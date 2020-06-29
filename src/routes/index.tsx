import * as React from 'react';
import { Feather } from '@expo/vector-icons'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeScreen from '../pages/Home';
import ContactsScreen from '../pages/Contacts';
import SetScreen from '../pages/Set';
import HelpScreen from '../pages/Help';

const Tab = createBottomTabNavigator();

function Routes() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused
                ? 'ios-information-circle'
                : 'ios-information-circle-outline';
            } else if (route.name === 'Settings') {
              iconName = focused ? 'ios-list-box' : 'ios-list';
            }

            return <Feather name="home" size={20} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: '#fff',
          inactiveTintColor: '#fff',
          activeBackgroundColor: '#075E54',
          inactiveBackgroundColor: '#128C7E',
        }}

      >
        <Tab.Screen
          options={{
            tabBarIcon: ({ color }) => <Feather name="home" size={20} color={color} />
          }}
          name="Home"
          component={HomeScreen}
        />
        <Tab.Screen
          options={{
            tabBarIcon: ({ color }) => <Feather name="users" size={20} color={color} />
          }}
          name="Contacts"
          component={ContactsScreen} />
        <Tab.Screen
          options={{
            tabBarIcon: ({ color }) => <Feather name="settings" size={20} color={color} />
          }}
          name="Settings"
          component={SetScreen} />

        <Tab.Screen
          options={{
            tabBarIcon: ({ color }) => <Feather name="help-circle" size={20} color={color} />
          }}
          name="Help"
          component={HelpScreen} />
      </Tab.Navigator>
    </NavigationContainer>

  );
}

export default Routes;
