import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default class App extends React.Component {
  state = {counter: 1}
  render() {
    return (
      <View style={styles.container}>
        <Text>{this.state.counter}</Text>
        <Button 
          title={'Press me 11'}
          onPress={() => this.setState({counter: this.state.counter + 1})}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
