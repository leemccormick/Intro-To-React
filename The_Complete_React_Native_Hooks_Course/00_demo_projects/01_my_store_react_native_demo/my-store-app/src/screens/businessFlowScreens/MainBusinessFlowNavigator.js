import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ProductListScreen from './ProductListScreen';
import SaleInfoScreen from './SaleInfoScreen';
import ITInfoScreen from './ITInfoScreen';
import useCurrentUser from '../../hooks/useCurrentUser';
import { AntDesign, Ionicons, Octicons } from '@expo/vector-icons'; 
import { appStyles } from '../../components/StyleGuide';

const Tab = createBottomTabNavigator();
const MainBusinessFlowBottomTabNavigator = () => {
  const [fullName, rolesDescription, hasCustomerRole, hasSaleRole, hasAdminRole] = useCurrentUser();

  console.log('-------------MainBusinessFlowBottomTabNavigator-------------');
  console.log('hasSaleRole | ', hasSaleRole);
  console.log('hasAdminRole | ', hasAdminRole);
  console.log('fullName | ', fullName);

  return (
    <Tab.Navigator screenOptions={({ route }) => ({
      tabBarIcon: ({ focused, color, size }) => {
        let iconName;
        if (route.name === 'ProductList') {
          iconName = focused ? 'home' : 'home';
          return <AntDesign name={iconName} size={size} color={color} />;
        } else if (route.name === 'SaleInfo') {
          iconName = focused ? 'graph' : 'graph';
          return <Octicons name={iconName} size={size} color={color} />;
        } else if (route.name === 'ITInfo') {
          iconName = focused ? 'ios-people-outline' : 'ios-people-outline';
          return <Ionicons name={iconName} size={size} color={color} />;
        }
      },
      tabBarActiveTintColor: appStyles.secondaryDarkColor.color,
      tabBarInactiveTintColor: appStyles.successColor.color,
      tabBarLabelStyle: {
        fontSize: 12,
      },
      tabBarStyle: {
        backgroundColor: appStyles.secondaryBackgroundLightColor.backgroundColor,
        borderTopWidth: 0.2,
        borderTopColor: appStyles.secondaryLightBlueColor.color,
      },
    })} >
      {
        hasSaleRole
          ? <Tab.Screen name="SaleInfo" component={SaleInfoScreen} options={{ tabBarLabel: 'Sale', headerShown: false, }} />
          : null
      }

      <Tab.Screen name="ProductList" component={ProductListScreen} options={{ tabBarLabel: 'Products', headerShown: false, }} />

      {
        hasAdminRole
          ? <Tab.Screen name="ITInfo" component={ITInfoScreen} options={{ tabBarLabel: 'Systems', headerShown: false, }} />
          : null
      }
    </Tab.Navigator>
  );
}

export default MainBusinessFlowBottomTabNavigator;