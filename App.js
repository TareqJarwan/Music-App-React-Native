// import React from 'react';
// import {StyleSheet, View, Text, Button} from 'react-native';
// import {NavigationContainer} from '@react-navigation/native';
// import {createStackNavigator} from '@react-navigation/stack';

// import 'react-native-gesture-handler';

// function HomeScreen({navigation}) {
//   return (
//     <View style={styels.container}>
//       <Text>Home Screen</Text>
//       <Button
//         title="Go to Details"
//         onPress={() =>
//           navigation.navigate('Details', {
//             itemId: 86,
//             otherParam: 'anything you want here',
//           })
//         }
//       />
//     </View>
//   );
// }

// function DetailsScreen({route, navigation}) {
//   const {itemId, otherParam} = route.params;
//   return (
//     <View style={styels.container}>
//       <Text>Details Screen</Text>
//       <Text>itemId: {JSON.stringify(itemId)}</Text>
//       <Text>otherParam: {JSON.stringify(otherParam)}</Text>
//       <Button
//         title="Go to Details... again"
//         onPress={() => navigation.push('Details')}
//       />
//       <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
//       <Button title="Go back" onPress={() => navigation.goBack()} />
//       <Button
//         title="Go back to first screen in stack"
//         onPress={() => navigation.popToTop()}
//       />
//     </View>
//   );
// }

// const Stack = createStackNavigator();

// function App() {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator
//         screenOptions={{
//           headerStyle: {
//             backgroundColor: '#f4511e',
//           },
//           headerTintColor: '#fff',
//           headerTitleStyle: {
//             fontWeight: 'bold',
//           },
//         }}>
//         <Stack.Screen
//           name="Home"
//           component={HomeScreen}
//           options={{
//             title: 'Home',
//           }}
//         />
//         <Stack.Screen
//           name="Details"
//           component={DetailsScreen}
//           options={{title: 'Details'}}
//         />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// }

// const styels = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });

// export default App;

import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import Dashboard from './src/navigation/Dashboard';
import Song from './src/navigation/Song';
import Artist from './src/navigation/Artist';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Dashboard"
          component={Dashboard}
          options={{title: 'Music App'}}
        />
        <Stack.Screen
          name="Song"
          component={Song}
          options={{title: 'Song lyrics'}}
        />
        <Stack.Screen
          name="Artist"
          component={Artist}
          options={{title: 'Artist'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
