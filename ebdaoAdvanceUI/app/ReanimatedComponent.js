import React from 'react';
import { View, Button, StyleSheet } from 'react-native';
import Animated, { Easing } from 'react-native-reanimated';

const ReanimatedComponent = () => {
  const translateY = new Animated.Value(0);

  const startAnimation = () => {
    translateY.setValue(0);
    Animated.timing(translateY, {
      toValue: 100,
      duration: 1000,
      easing: Easing.linear,
      useNativeDriver: true,
    }).start();
  };

  return (
    <View style={styles.container}>
      <Animated.View style={{ transform: [{ translateY }] }}>
        <View style={styles.box} />
      </Animated.View>
      <Button title="Start Animation" onPress={startAnimation} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  box: {
    width: 100,
    height: 100,
    backgroundColor: 'red',
  },
});

export default ReanimatedComponent;