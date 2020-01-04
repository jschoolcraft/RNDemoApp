import React from 'react';
import {
  Button,
  Image,
  Modal,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableHighlight,
  View,
} from 'react-native';

class ConsentScreen extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            modalVisible: true,
            setModalVisible: true,
        }
    }
  render() {
    return (
      <View style={styles.container}>
        <Modal
        animationType="slide"
        transparent={false}
        visible={this.state.modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
        }}>
        <View style={styles.wrapper}>
          <View>
            <Text style={styles.title}>Consent Form Required!</Text>
            <Text style={styles.paragraph}>
                You must provide a signed consent form to Keira.
                This can be some giant wall of text explaining why you need consent or whatever.
            </Text>
            <Text style={styles.paragraph}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </Text>
            <Text style={styles.paragraph}>If you are under 18, you must have parental consent to participate in the survey.</Text>

            <TouchableHighlight
              onPress={() => {
                this.setState({modalVisible: false})
                this.props.navigation.navigate('Main')
              }}>
              <Text>I Agree, Signed Consent Provided</Text>
            </TouchableHighlight>
          </View>
        </View>
      </Modal>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ccc',
  },
  wrapper: {
      flex: 1,
      marginTop: 50,
      marginHorizontal: 10
  },
  title: {
      fontSize: 24,
      textAlign: 'center'
  },
  paragraph: {
      fontSize: 18,
      lineHeight: 22,
      paddingBottom: 20
  }
})

export default ConsentScreen