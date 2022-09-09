// ESSA PRECISA DE AUTENTICAÇÃO

import React from "react";

import {Feather} from 'react-native-vector-icons';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


const Tab = createBottomTabNavigator();


import Home from '../pages/Home';
import Details from "../pages/Details";
import New from '../pages/New';
import Contact from '../pages/Contact';

export default function AppRoutes() {
    return (
        
        <Tab.Navigator initialRouteName="Home">
            <Tab.Screen name="Feed" component={Home}
          options={{
            tabBarIcon: () => {
                return <Feather name='home' size={25} color='crimson'/> 
            },
           tabBarBadge: 10
            }}/>

            <Tab.Screen name="New" component={New}
          options={{
            tabBarIcon: () => {
                return <Feather name='camera' size={25} color='crimson'/> }, tabBarBadge: 1
           }}/>

            <Tab.Screen name="Details" component={Details} options={{
                tabBarIcon: () => {
                    return <Feather name='details' size={25} color='crimson'/>
                },
                tabBarBadge: 10
            }}/>

            <Tab.Screen name="Contacts" component={Contact}
                options={{
                tabBarIcon: () => {
                return <Feather name='user' size={25} color='crimson'/> }, tabBarBadge: 2
           }}/>

        </Tab.Navigator>
    )
}