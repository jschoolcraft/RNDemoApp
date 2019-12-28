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

class MuscleIntroScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Muscle Intro</Text>
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

export default MuscleIntroScreen