import React, { Component } from 'react';
import { Text } from 'react-native';
import { Grid, Col, Row } from 'native-base';
import { map } from 'lodash';
import CheckBox from 'react-native-check-box';

class RecentJobsTable extends Component {
    onClick = (item) => {
      item.Is_Checked = !item.Is_Checked;
    }

    renderCheckBox = (item) => {
      return (
        <CheckBox
          style={{ flex: 1, padding: 10 }}
          onClick={() => this.onClick(item)}
          isChecked={item.Is_Checked}
        />
      );
    }

    render() {
      return (
        <Grid style={{ alignItems: 'center' }}>

          <Row style={{ height: 30 }} >
          {/*Table Labels*/}

             {/*Job #*/}
            <Col size={24} style={styles.tableStyle.title}>
              <Text style={{ fontWeight: 'bold' }}>Job #</Text>
            </Col>
             {/*Client*/}
            <Col size={28} style={styles.tableStyle.title}>
              <Text style={{ fontWeight: 'bold' }}>Client</Text>
            </Col>
             {/*Job Title*/}
            <Col size={31} style={styles.tableStyle.title}>
              <Text style={{ fontWeight: 'bold' }}>Job Title</Text>
            </Col>
             {/*Add*/}
            <Col size={17} style={styles.tableStyle.titleLast}>
              <Text style={{ fontWeight: 'bold' }}>Add</Text>
            </Col>
          </Row>
          {/*Table Labels*/}
          {map(this.props.data, (item) =>
            <Row style={{ minHeight: 50 }} key={item.Job_Id}>
               {/*Job # Data*/}
              <Col size={24} style={styles.tableStyle.body}>
                <Text style={styles.tableStyle.bodyText}>{item.Job_Number}</Text>
              </Col>
               {/*Client name Data*/}
              <Col size={28} style={styles.tableStyle.body}>
                <Text style={styles.tableStyle.bodyText}>{item.Client_Name}</Text>
              </Col>
               {/*Sub Task Data*/}
              <Col size={31} style={styles.tableStyle.body}>
                <Text style={styles.tableStyle.bodyText}>{item.Sub_Task}</Text>
              </Col>
               {/*Checkbox*/}
              <Col size={17} style={styles.tableStyle.bodyLast}>
                  {this.renderCheckBox(item)}
              </Col>

            </Row>
          )}
        </Grid>
      );
    }
}

const styles = {
  container: {
    flex: 1,
  },
  checkBox: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  tableStyle: {
		title: {
			backgroundColor: '#a0a6ab',
			borderTopWidth: 1,
			borderBottomWidth: 1,
			borderRightWidth: 1,
			justifyContent: 'center',
			alignItems: 'center'
		},
		titleLast: {
			backgroundColor: '#a0a6ab',
			borderTopWidth: 1,
			borderBottomWidth: 1,
			justifyContent: 'center',
			alignItems: 'center'
		},
		body: {
			backgroundColor: '#fff',
			borderBottomWidth: 1,
			borderRightWidth: 1,
			justifyContent: 'center',
			alignItems: 'center'
		},
		bodyLast: {
			backgroundColor: '#fff',
			borderBottomWidth: 1,
			justifyContent: 'center',
			alignItems: 'center'
		},
    bodyText: {
			fontSize: 14
		}
	}
};

export { RecentJobsTable };
