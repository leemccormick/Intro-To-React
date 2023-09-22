import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity, Dimensions, ScrollView } from "react-native";
import CustomButton from '../components/CustomButton';

const HomeScreen = ({ navigation }) => {
  console.log('navigation on Home Screen is : ' + navigation)
  console.log(navigation)

  const screenWidth = Dimensions.get('window').width; // Get the screen width
  const spacingView = <View style={styles.spacing}></View>;

  const navigateToComponents = () => {
    console.log('Custom button pressed ! : Go to Components screen...');
    navigation.navigate('Components');
  };

  const navigateToList = () => {
    console.log('Custom button pressed ! : Go to List screen...');
    navigation.navigate('List');
  };

  const navigateToImage = () => {
    console.log('Custom buttom pressed ! : Go to Image screen...');
    navigation.navigate('Image');
  };

  const navigateToCounter = () => {
    console.log('Custom button pressed ! : Go to Counter screen...');
    navigation.navigate('Counter');
  };

  const navigateToColor = () => {
    console.log('Custom button pressed ! : Go to Color screen...');
    navigation.navigate('Color');
  };

  const navigateToSquare = () => {
    console.log('Custom button pressed ! : Go to Square screen...');
    navigation.navigate('Square');
  };

  const customButtonsBox = (
    <View style={[styles.box, { width: screenWidth * 0.9 }]}>
      <Text style={styles.subtitleStyle}>Custom Button Demo</Text>
      {spacingView}
      <CustomButton onPress={navigateToComponents} title="Components Screen" />
      {spacingView}
      <CustomButton onPress={navigateToList} title="List Screen" />
      {spacingView}
      <CustomButton onPress={navigateToImage} title="Image Screen" />
      {spacingView}
      <CustomButton onPress={navigateToCounter} title="Counter Screen" />
      {spacingView}
      <CustomButton onPress={navigateToColor} title="Color Screen" />
      {spacingView}
      <CustomButton onPress={navigateToSquare} title="Square Screen" />
      {spacingView}
    </View>
  );

  const buttonsDemoBox = (
    <View style={[styles.box, { width: screenWidth * 0.9 }]}>
      <Text style={styles.subtitleStyle}>Buttons Demo</Text>
      {spacingView}
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
      <Button
        style={styles.button}
        title="Go To Counter Demo"
        onPress={() => navigation.navigate('Counter')}
      />
    </View>);

  const touchableOpacityDemoBox = (
    <View style={[styles.box, { width: screenWidth * 0.9 }]}>
      <Text style={styles.subtitleStyle}>TouchableOpacity Demo</Text>
      {spacingView}
      <TouchableOpacity onPress={() => navigation.navigate('Components')} >
        <Text>Go to Components With TouchableOpacity</Text>
        <Text>Go to Components With TouchableOpacity</Text>
        <Text>Go to Components With TouchableOpacity</Text>
      </TouchableOpacity>
      {spacingView}
      <TouchableOpacity onPress={() => navigation.navigate('List')} >
        <Text>Go to List With TouchableOpacity</Text>
        <Text>Go to List With TouchableOpacity</Text>
        <Text>Go to List With TouchableOpacity</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <Text style={styles.textStyle}>Home Screen For Navigation</Text>
      {spacingView}
      {customButtonsBox}
      {spacingView}
      {buttonsDemoBox}
      {spacingView}
      {touchableOpacityDemoBox}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#00008B'
  },
  subtitleStyle: {
    fontSize: 16,
    textAlign: 'left',
    color: 'gray'
  },
  scrollContainer: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 20,
    paddingHorizontal: 20,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  box: {
    paddingVertical: 20,
    paddingHorizontal: 20,
    borderWidth: 2,  // Border width
    borderColor: '#00008B',  // Border color
    borderRadius: 10,  // Border radius (optional)
  },
  spacing: {
    height: 20,  // Adds vertical space between views
  },
  button: {
    backgroundColor: '#007BFF',
    padding: 10,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    minWidth: 100,
  },
});

export default HomeScreen;

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