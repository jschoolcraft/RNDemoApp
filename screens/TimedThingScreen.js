import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

class ShowTime extends React.Component {
  render() {
    return (
      <View>
        <Text>{this.props.label} {this.props.currentTime}</Text>
      </View>
    );
  }
}

class DoThing extends React.Component {
  render () {
    let label = this.props.timeInCycle <= cycleInterval/2 ? 'Inhale' : 'Exhale'
    return (
      <Text>{label}</Text>
    )
  }
}

class ArrayThing extends React.Component {
  render () {
    let labels = [
      'foo',
      'bar',
      'baz',
      'bo',
      'floor'
    ]

    return (
      <Text>{labels[this.props.currentCycle]}</Text>
    )
  }
}

const cycleInterval = 4
const maxCycles = 4

class TimedThingScreen extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentCycle: 0,
      timeInCycle: 0,
      timeOverall: 0,
    }
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      this.nextTick()
    }, 1000)
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  nextTick() {
    if (this.state.currentCycle >= maxCycles) {
      clearInterval(this.interval)
      this.props.navigation.navigate('Finished')
    } else {
      let timeOverall = this.state.timeOverall
      this.setState(previousState => (
        {
          currentCycle: Math.trunc(timeOverall / cycleInterval),
          timeInCycle: timeOverall % cycleInterval + 1,
          timeOverall: timeOverall + 1 
        }
      ));
      console.log(this.state);
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>TimedThingScreen</Text>
        <View style={styles.wrapper}>
          <DoThing currentCycle={this.state.currentCycle} timeInCycle={this.state.timeInCycle} />
        </View>
        
        <View style={styles.wrapper}>
          <ArrayThing currentCycle={this.state.currentCycle} />
        </View>

        <View style={styles.wrapper}>
          <ShowTime label={'Current Cycle'} currentTime={this.state.currentCycle} />
        </View>

        <View style={styles.wrapper}>
          <ShowTime label={'Time in Cycle'} currentTime={this.state.timeInCycle} />
        </View>

        <View style={styles.wrapper}>
          <ShowTime label={'Time Overall'} currentTime={this.state.timeOverall} />
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ccc',
  },
  title: {
    fontSize: 28
  },
  wrapper: {
    padding: 10
  }
})

export default TimedThingScreen