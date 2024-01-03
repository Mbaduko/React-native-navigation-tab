import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from 'react-native-vector-icons/Ionicons';
import Home from "./Screens/home";
import About from "./Screens/about";


const Tab = createBottomTabNavigator();

const app = () => {
  return(
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={Home}
          options={
            {
              tabBarIcon: ({color, size}) => (
                <Ionicons name="home-outline" color={color} size={size} />
              )
            }}
        />
        <Tab.Screen name="About " component={About}
          options={
            {
              tabBarIcon: ({color, size}) => (
                <Ionicons name="information-circle-outline" color={color} size={size} />
              )
            }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default app;