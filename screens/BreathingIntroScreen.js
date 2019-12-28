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

class BreathingIntroScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Breathing Intro</Text>
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

export default BreathingIntroScreen