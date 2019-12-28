import React from 'react';
import {
  Button,
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

class BreathingIntroScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Breathing Intro</Text>
        <Text style={styles.guide}>
          This is a few sentences that tell you what to expect.  
          Not all the theory behind it, just some text.
        </Text>
        <Button title="Get Started"
          onPress={() => this.props.navigation.navigate('TimedThing')} />
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
    fontSize: 36,
    alignSelf: 'center'
  },
  guide: {
    padding: 10,
    alignSelf: 'flex-start',
    fontSize: 20,
    lineHeight: 24,
  }
})

export default BreathingIntroScreen