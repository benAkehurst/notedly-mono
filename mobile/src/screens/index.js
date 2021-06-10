import React from 'react';
import { Text, View, ScrollView, Button } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createStackNavigator } from 'react-navigation-stack';

import Feed from './feed';
import Favorites from './favorites';
import MyNotes from './mynotes';
import NoteSceen from './note';

const FeedStack = createStackNavigator({
  Feed: Feed,
  Note: NoteSceen,
});

const MyStack = createStackNavigator({
  MyNotes: MyNotes,
  Note: NoteSceen,
});

const FavStack = createStackNavigator({
  Favorites: Favorites,
  Note: NoteSceen,
});

const TabNavigator = createBottomTabNavigator({
  FeedScreen: {
    screen: FeedStack,
    navigationOptions: {
      tabBarLabel: 'Feed',
    },
  },
  MyNoteScreen: {
    screen: MyStack,
    navigationOptions: {
      tabBarLabel: 'My Notes',
    },
  },
  FavoritesScreen: {
    screen: FavStack,
    navigationOptions: {
      tabBarLabel: 'Favorites',
    },
  },
});

export default createAppContainer(TabNavigator);
