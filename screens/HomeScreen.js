import * as WebBrowser from 'expo-web-browser';
import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  Slider,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import { MonoText } from '../components/StyledText';

class HomeScreen extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      stressLevel: 1
    }
  }
  render() {
    return (
      <View style={styles.container}>
        <ScrollView
          style={styles.container}
          contentContainerStyle={styles.contentContainer}>
          <View style={styles.contentContainer}>

            <Text style={styles.welcomeText}>Some Words</Text>
            <Text>Please estimate your current stress level.</Text>
            <Text>1 as no stress, 10 as all the stress</Text>
            <Text>current stress: {this.state.stressLevel}</Text>
            <Slider
              style={{width: 200, height: 40}}
              minimumValue={1}
              maximumValue={10}
              step={1}
              onValueChange={(value) => this.setState({stressLevel: value})}
              minimumTrackTintColor="#c3d"
              maximumTrackTintColor="#000"
            />
            
            <Text style={styles.buttonText}
              onPress={() => this.props.navigation.navigate('BreathingIntro')}>Breathing</Text>
        
            <Text style={styles.buttonText}
              onPress={() => this.props.navigation.navigate('MuscleIntro')}>Muscles</Text>
            <Text style={styles.buttonText}>Eyes</Text>
          </View>
      </ScrollView>
    </View>
    );
  }
}

HomeScreen.navigationOptions = {
  header: null,
};

export default HomeScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  developmentModeText: {
    marginBottom: 20,
    color: 'rgba(0,0,0,0.4)',
    fontSize: 14,
    lineHeight: 19,
    textAlign: 'center',
  },
  contentContainer: {
    paddingTop: 30,
    marginTop: 10,
    marginBottom: 20,
    alignItems: 'center',
  },
  welcomeText: {
    fontSize: 24,
    lineHeight: 31,
    textAlign: 'center',
  },
  buttonText: {
    fontSize: 36,
    lineHeight: 48,
    padding: 10,
  },
  tabBarInfoContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: { width: 0, height: -3 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
      },
      android: {
        elevation: 20,
      },
    }),
    alignItems: 'center',
    backgroundColor: '#fbfbfb',
    paddingVertical: 20,
  },
  tabBarInfoText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    textAlign: 'center',
  },
});
