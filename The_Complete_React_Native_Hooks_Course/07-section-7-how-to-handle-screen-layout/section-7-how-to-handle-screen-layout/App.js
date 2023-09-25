import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import HomeScreen from "./src/screens/HomeScreen";
import ComponentsScreen from "./src/screens/ComponentsScreen";
import ListScreen from "./src/screens/ListScreen";
import ImageScreen from "./src/screens/ImageScreen";
import CounterScreen from "./src/screens/CounterScreen";
import ColorScreen from "./src/screens/ColorScreen";
import SquareScreen from "./src/screens/SquareScreen";
import SquareReducerScreen from "./src/screens/SquareReducerScreen";
import CounterReducerScreen from "./src/screens/CounterReducerScreen";
import TextScreen from "./src/screens/TextScreen";
import BoxScreen from "./src/screens/BoxScreen";
import AlignItemsWithFlexScreen from "./src/screens/AlignItemsWithFlexScreen";
import FlexDirectionScreen from "./src/screens/FlexDirectionScreen";
import JustifyContentScreen from "./src/screens/justifyContentScreens/JustifyContentScreen";
import JustifyContentDemoWithColumnCenterScreen from "./src/screens/justifyContentScreens/JustifyContentDemoWithColumnCenterScreen";
import JustifyContentDemoWithColumnFlexStartScreen from "./src/screens/justifyContentScreens/JustifyContentDemoWithColumnFlexStartScreen";
import JustifyContentDemoWithColumnFlexEndcreen from "./src/screens/justifyContentScreens/JustifyContentDemoWithColumnFlexEndScreen";
import JustifyContentDemoWithColumnBaselineScreen from "./src/screens/justifyContentScreens/JustifyContentDemoWithColumnBaselineScreen";
import JustifyContentDemoWithColumnStretchScreen from "./src/screens/justifyContentScreens/JustifyContentDemoWithColumnStretchScreen";
import JustifyContentDemoWithRowStretchScreen from "./src/screens/justifyContentScreens/JustifyContentDemoWithRowStretchScreen";
import JustifyContentDemoWithRowBaselineScreen from "./src/screens/justifyContentScreens/JustifyContentDemoWithRowBaselineScreen";
import JustifyContentDemoWithRowCenterScreen from "./src/screens/justifyContentScreens/JustifyContentDemoWithRowCenterScreen";
import JustifyContentDemoWithRowFlexEndScreen from "./src/screens/justifyContentScreens/JustifyContentDemoWithRowFlexEndScreen";
import JustifyContentDemoWithRowFlexStartScreen from "./src/screens/justifyContentScreens/JustifyContentDemoWithRowFlexStartScreen";
import FlexOnChildrenScreen from "./src/screens/FlexOnChildrenScreen";
import AlignSelfOnChildrenScreen from "./src/screens/AlignSelfOnChildrenScreen";
import ThePositionPropertyScreen from "./src/screens/ThePositionPropertyScreen";
import TopBottomLeftRightAndAbsoluteFillScreen from "./src/screens/TopBottomLeftRightAndAbsoluteFillScreen";
import ExerciseSection7LayoutScreen from "./src/screens/ExerciseSection7LayoutScreen";

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Components: ComponentsScreen,
    List: ListScreen,
    Image: ImageScreen,
    Counter: CounterScreen,
    CounterReducer: CounterReducerScreen,
    Color: ColorScreen,
    Square: SquareScreen,
    SquareReducer: SquareReducerScreen,
    Text: TextScreen,
    Box: BoxScreen,
    AlignItemsWithFlex: AlignItemsWithFlexScreen,
    FlexDirection: FlexDirectionScreen,
    JustifyContent: JustifyContentScreen,
    JustifyContentDemoWithColumnCenter: JustifyContentDemoWithColumnCenterScreen,
    JustifyContentDemoWithColumnFlexStart: JustifyContentDemoWithColumnFlexStartScreen,
    JustifyContentDemoWithColumnFlexEnd: JustifyContentDemoWithColumnFlexEndcreen,
    JustifyContentDemoWithColumnBaseline: JustifyContentDemoWithColumnBaselineScreen,
    JustifyContentDemoWithColumnStretch: JustifyContentDemoWithColumnStretchScreen,
    JustifyContentDemoWithRowStretch: JustifyContentDemoWithRowStretchScreen,
    JustifyContentDemoWithRowBaseline: JustifyContentDemoWithRowBaselineScreen,
    JustifyContentDemoWithRowCenter: JustifyContentDemoWithRowCenterScreen,
    JustifyContentDemoWithRowFlexEnd: JustifyContentDemoWithRowFlexEndScreen,
    JustifyContentDemoWithRowFlexStart: JustifyContentDemoWithRowFlexStartScreen,
    FlexOnChildren: FlexOnChildrenScreen,
    AlignSelfOnChildren: AlignSelfOnChildrenScreen,
    ThePositionProperty: ThePositionPropertyScreen,
    TopBottomLeftRightAndAbsoluteFill: TopBottomLeftRightAndAbsoluteFillScreen,
    ExerciseSection7Layout: ExerciseSection7LayoutScreen,
  },
  {
    initialRouteName: 'Home',
    defaultNavigationOptions: {
      title: "Handle Screen Layout in React",
    },
  }
);

export default createAppContainer(navigator);

// This is a demo to create a starter screen...
/*
import React from 'react';
import { Text, StyleSheet, View } from 'react-native';
import { appStyles, screenWidth, SpacingView, UnderlineView } from '../components/StyleGuide';

const DemoScreen = () => {
    let section7subtitle = 'Learn how to handle screen layout';
    
    return (
        <View style={appStyles.paddingStyle}>
            <Text style={styles.textStyle}>A Demo  Screen</Text>
            <Text style={styles.subtitleStyle}>{section7subtitle}</Text>
            <UnderlineView />
        </View>
    );
}

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 30,
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#00008B'
    },
    subtitleStyle: {
        fontSize: 20,
        textAlign: 'left',
        color: 'gray'
    }
});

export default DemoScreen;
*/