import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";

// This is an example using props
/*
const HomeScreen = props => {
  console.log('props on Home Screen is : ' + props)
  console.log(props)
  console.log('props.navigation on Home Screen is : ' + props.navigation)
  console.log(props.navigation)

  return (
    <View>
      <Text style={styles.text}>Home Screen For Navigation</Text>

      <Text style={styles.text}>Buttons Demo</Text>
      <Button
        title="Go To Components Demo"
        onPress={() => props.navigation.navigate('Components')}
      />

      <Button
        title="Go To List Demo"
        onPress={() => props.navigation.navigate('List')}
      />

      <Text style={styles.text}>TouchableOpacity Demo</Text>
      <TouchableOpacity
        onPress={() => props.navigation.navigate('Components')}
      >
        <Text>Go to Components With TouchableOpacity</Text>
        <Text>Go to Components With TouchableOpacity</Text>
        <Text>Go to Components With TouchableOpacity</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => props.navigation.navigate('List')}
      >
        <Text>Go to List With TouchableOpacity</Text>
        <Text>Go to List With TouchableOpacity</Text>
        <Text>Go to List With TouchableOpacity</Text>
      </TouchableOpacity>
    </View>
  );
};
*/

// This is an example using navigation
const HomeScreen = ({navigation}) => {
  console.log('navigation on Home Screen is : ' + navigation)
  console.log(navigation)

  return (
    <View>
      <Text style={styles.text}>Home Screen For Navigation</Text>

      <Text style={styles.text}>Buttons Demo</Text>
      <Button
        title="Go To Components Demo"
        onPress={() => navigation.navigate('Components')}
      />

      <Button
        title="Go To List Demo"
        onPress={() => navigation.navigate('List')}
      />

<Button
        title="Go To Image Demo"
        onPress={() => navigation.navigate('Image')}
      />

      <Text style={styles.text}>TouchableOpacity Demo</Text>
      <TouchableOpacity
        onPress={() => navigation.navigate('Components')}
      >
        <Text>Go to Components With TouchableOpacity</Text>
        <Text>Go to Components With TouchableOpacity</Text>
        <Text>Go to Components With TouchableOpacity</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => navigation.navigate('List')}
      >
        <Text>Go to List With TouchableOpacity</Text>
        <Text>Go to List With TouchableOpacity</Text>
        <Text>Go to List With TouchableOpacity</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
});

export default HomeScreen;
