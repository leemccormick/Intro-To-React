import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import SearchScreen from './src/screens/SearchScreen';

// To start the project with navigation library --> Then, run npm install --legacy-peer-deps and then npm start.
const navigator = createStackNavigator(
  {
    Search: SearchScreen,
  },
  {
    initialRouteName: 'Search',
    defaultNavigationOptions: {
      title: 'Business Navigation Search',
    },
  }
);

export default createAppContainer(navigator);

/* NOTE :
For networking, we can use this 2 method to fetch data from api.
1) Fetch --> build in funtion in react native. 
2) axios --> a library, to use this library run this command : npm install axios
*/