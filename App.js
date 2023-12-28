import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Home from "./Screens/home";
import About from "./Screens/about";


const Tab = createBottomTabNavigator();

const app = () => {
  return(
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={Home}/>
        <Tab.Screen name="About " component={About}/>
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default app;