import React from 'react';
import { View, StyleSheet } from 'react-native';
import CustomButton from './CustomButton';
import withLogging from './withLogging';
import FadeInComponent from './FadeInComponent';
import ReanimatedComponent from './ReanimatedComponent';

const EnhancedButton = withLogging(CustomButton);

const App = () => {
  return (
    <View style={styles.container}>
      <EnhancedButton title="Enhanced Click Me" onPress={() => console.log('Enhanced Button Pressed!')} />
      <FadeInComponent />
      <ReanimatedComponent />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;