import React from 'react';
import {
  Button,
  Image,
  Platform,
  ScrollView,
  Slider,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

class FinishedScreen extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      stressBefore: 5,
      stressAfter: 5,
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Finished</Text>
        <Text>Stress Level Before: {this.state.stressBefore}</Text>
        <Slider
          style={{width: 200, height: 40}}
          value={this.state.stressBefore}
          minimumValue={1}
          maximumValue={10}
          step={1}
          onValueChange={(value) => this.setState({stressBefore: value})}
          minimumTrackTintColor="#c3d"
          maximumTrackTintColor="#000"
        />
        <Text>Stress Level Before: {this.state.stressAfter}</Text>
        <Slider
          style={{width: 200, height: 40}}
          value={this.state.stressAfter}
          minimumValue={1}
          maximumValue={10}
          step={1}
          onValueChange={(value) => this.setState({stressAfter: value})}
          minimumTrackTintColor="#c3d"
          maximumTrackTintColor="#000"
        />
        <Button title='Submit Results' onPress={()=> {
          fetch('https://survey-results-demo.herokuapp.com/results', {
            method: 'POST',
            headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              result: {
                level_before: this.state.stressBefore,
                level_after: this.state.stressAfter,
                activity: this.props.navigation.getParam('activity', 'noIdea')
              }
            }),
          }).then(response => {console.log(response)})
        }} />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ccc',
  },
})

export default FinishedScreen