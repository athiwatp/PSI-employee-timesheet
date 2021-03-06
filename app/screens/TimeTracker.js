import React, { Component } from 'react';
import { Alert } from 'react-native';
import { Container, Content, Button, Grid, Header, Left, Right, Body, Title, Text, View, Spinner } from 'native-base';

// MobX
import { observer } from 'mobx-react/native';
//MobX
import todaysJobStore from '../stores/TodaysJobStore';
import recentJobStore from '../stores/RecentJobStore';
import timeTrackerStore from '../stores/TimeTrackerStore';

// Import components
import { TimeTrackerTable } from '../components/TimeTrackerTable';

@observer
export default class TimeTracker extends Component {
	render() {
		if ((timeTrackerStore.loading) || (recentJobStore.recentJobs === null) || (todaysJobStore.todaysJobs === null) || (timeTrackerStore.timeTrackerList === null)) {
          return (
            <View style={styles.centerContainter}>
              <Spinner size='large' />
              <Text style={{ marginTop: -7, color: '#0BD318' }}>LOADING</Text>
            </View>
          );
        }

		return (
			<Container>
				<Header style={styles.headerStyle}>
					<Left />
					<Body>
						<Title style={styles.headerTextStyle}>Time Tracker</Title>
					</Body>
					<Right />
				</Header>
				<Content>
					{/*Heading*/}
					<Grid style={{ justifyContent: 'center', paddingVertical: 30 }}>
		              <Text style={{ fontSize: global.LARGE_TEXT }}>
		                <Text style={{ fontWeight: 'bold', fontSize: global.LARGE_TEXT }}>PSI </Text> Time Calculator
		              </Text>
		            </Grid>

					{/*Table*/}
					<TimeTrackerTable />

					{/*Buttons*/}
					<View style={{ marginTop: 60, marginBottom: 60 }}>


					  {/* FOR DEBUGGING */}
					  {/*}
					  {(!timeTrackerStore.isEmpty && timeTrackerStore.hasUncommitted) &&
						  <Text style={{ color: 'red', fontSize: 16, textAlign: 'center', marginBottom: 10 }}>Rows in PINK are uncommitted. Click 'Update Charges' to commit.</Text>
					  }

					  <Text>Size: {timeTrackerStore.size}</Text>

					  {(timeTrackerStore.hasUncommitted) &&
						<Text style={{ textAlign: 'center' }}> Has Uncommitted: true </Text>
					  }
					  {(!timeTrackerStore.hasUncommitted) &&
						<Text style={{ textAlign: 'center' }}> Has Uncommitted: false </Text>
					  }

					  <Text style={{ textAlign: 'center' }}>Size: {timeTrackerStore.size}</Text>*/}

					  <Grid style={{ justifyContent: 'center', padding: 10 }}>
	                    <Text style={{ fontSize: global.LARGE_TEXT }}>
	                      Total Hours: <Text style={{ fontWeight: 'bold', fontSize: global.LARGE_TEXT }}>{timeTrackerStore.totalHours}</Text>
	                    </Text>
	                  </Grid>


					</View>
				</Content>
			</Container>
		);
	}
}

const styles = {
	headerStyle: {
		backgroundColor: 'red'
	},
	headerTextStyle: {
		color: '#FFF'
	},
	updateTimeTrackerButton: {
		backgroundColor: '#007aff',
		marginHorizontal: 20,
		shadowColor: '#000',
		shadowOffset: {
			width: 0,
			height: 2
		},
		shadowOpacity: 0.3,
		shadowRadius: 2
	},
	resetAllButton: {
		backgroundColor: '#007aff',
		marginHorizontal: 20,
		marginTop: 25,
		shadowColor: '#000',
		shadowOffset: {
			width: 0,
			height: 2
		},
		shadowOpacity: 0.3,
		shadowRadius: 2
	},
	jobNumberBorder: {
		backgroundColor: '#a0a6ab',
		borderWidth: 1,
		justifyContent: 'center',
		alignItems: 'center',
		fontSize: 18,
		fontWeight: 'bold'
	},
	centerContainter: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
  	}
};
