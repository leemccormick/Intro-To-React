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
  const navigateToCounterReducer = () => {
    console.log('Custom button pressed ! : Go to Counter Reducer screen...');
    navigation.navigate('CounterReducer');
  };

  const navigateToColor = () => {
    console.log('Custom button pressed ! : Go to Color screen...');
    navigation.navigate('Color');
  };

  const navigateToSquare = () => {
    console.log('Custom button pressed ! : Go to Square screen...');
    navigation.navigate('Square');
  };

  const navigateToSquareReducer = () => {
    console.log('Custom button pressed ! : Go to Square Reducer screen...');
    navigation.navigate('SquareReducer');
  };

  const navigateToText = () => {
    console.log('Custom button pressed ! : Go to Text screen...');
    navigation.navigate('Text');
  };

  const navigateToBox = () => {
    console.log('Custom button pressed ! : Go to Box screen...');
    navigation.navigate('Box');
  };

  const navigateToAlignItemsWithFlex = () => {
    console.log('Custom button pressed ! : Go to Align Items With Flex screen...');
    navigation.navigate('AlignItemsWithFlex');
  };

  const navigateToFlexDirection = () => {
    console.log('Custom button pressed ! : Go to Flex Direction screen...');
    navigation.navigate('FlexDirection');
  };

  const navigateToJustifyContent = () => {
    console.log('Custom button pressed ! : Go to Justify Content screen...');
    navigation.navigate('JustifyContent');
  };

  const navigateToFlexOnChildren = () => {
    console.log('Custom button pressed ! : Go to Flex On Children screen...');
    navigation.navigate('FlexOnChildren');
  };

  const navigateToAlignSelfOnChildren = () => {
    console.log('Custom button pressed ! : Go to Align Self On Children screen...');
    navigation.navigate('AlignSelfOnChildren');
  };

  const navigateToThePositionProperty = () => {
    console.log('Custom button pressed ! : Go to The Position Property screen...');
    navigation.navigate('ThePositionProperty');
  };

  const navigateToThePositionTopBottomLeftRightAndAbsoluteFill = () => {
    console.log('Custom button pressed ! : Go to The Position Top Bottom Left Right and Abosolube Fill Objects screen...');
    navigation.navigate('TopBottomLeftRightAndAbsoluteFill');
  };

  const navigateToExerciseSection7Layout = () => {
    console.log('Custom button pressed ! : Go to Exercis Section7 Layout screen...');
    navigation.navigate('ExerciseSection7Layout');
  };

  const customButtonsBox = (
    <View style={[styles.box, { width: screenWidth * 0.9 }, { flex: 1, padding: 16 }]}>
      <Text style={styles.subtitleStyle}>Custom Button Demo</Text>
      {spacingView}
      <CustomButton onPress={navigateToComponents} title="Components Screen" />
      {spacingView}
      <CustomButton onPress={navigateToList} title="List Screen" />
      {spacingView}
      <CustomButton onPress={navigateToImage} title="Image Screen" />
      {spacingView}
    </View>
  );

  const contentSection6ButtonsBox = (
    <View style={[styles.box, { width: screenWidth * 0.9 }, { flex: 1, padding: 16 }]}>
      <Text style={styles.subtitleStyle}>Section 6 : State Management in React Components</Text>
      {spacingView}
      <CustomButton onPress={navigateToCounter} title="Counter Screen" />
      {spacingView}
      <CustomButton onPress={navigateToCounterReducer} title="Counter Reducer Screen" />
      {spacingView}
      <CustomButton onPress={navigateToColor} title="Color Screen" />
      {spacingView}
      <CustomButton onPress={navigateToSquare} title="Square Screen" />
      {spacingView}
      <CustomButton onPress={navigateToSquareReducer} title="Square Reducer Screen" />
      {spacingView}
      <CustomButton onPress={navigateToText} title="Text Screen" />
      {spacingView}
    </View>
  );

  const contentSection7ButtonsBox = (
    <View style={[styles.box, { width: screenWidth * 0.9 }, { flex: 1, padding: 16 }]}>
      <Text style={styles.subtitleStyle}>Section 7 : How to Handle Screen Layout</Text>
      {spacingView}
      <CustomButton onPress={navigateToBox} title="Box Screen" />
      {spacingView}
      <CustomButton onPress={navigateToAlignItemsWithFlex} title="Align Items With Flex  Screen" />
      {spacingView}
      <CustomButton onPress={navigateToFlexDirection} title="Flex Direction  Screen" />
      {spacingView}
      <CustomButton onPress={navigateToJustifyContent} title="Justify Content  Screen" />
      {spacingView}
      <CustomButton onPress={navigateToFlexOnChildren} title="Flex on Children  Screen" />
      {spacingView}
      <CustomButton onPress={navigateToAlignSelfOnChildren} title="Align Self on Children  Screen" />
      {spacingView}
      <CustomButton onPress={navigateToThePositionProperty} title="The Position Property Screen" />
      {spacingView}
      <CustomButton onPress={navigateToThePositionTopBottomLeftRightAndAbsoluteFill} title="Top Bottom Left Right Screen" />
      {spacingView}
      <CustomButton onPress={navigateToExerciseSection7Layout} title="Layout Exercise Screen" />
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
      {contentSection6ButtonsBox}
      {spacingView}
      {contentSection7ButtonsBox}
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
    // flex: 2,
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