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

class FinishedScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Finished</Text>
        <Button title='Return Home' onPress={()=>this.props.navigation.navigate('Home')} />
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