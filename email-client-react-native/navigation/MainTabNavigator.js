import React from "react";
import { Platform } from "react-native";
import { createStackNavigator, createBottomTabNavigator } from "react-navigation";

import TabBarIcon from "../components/TabBarIcon";
import InboxScreen from "../screens/InboxScreen";
import ComposeScreen from "../screens/ComposeScreen";
import AllMailScreen from "../screens/AllMailScreen";
import EmailScreen from "../screens/EmailScreen";

const InboxStack = createStackNavigator({
  Inbox: InboxScreen,
  Email: EmailScreen
});

InboxStack.navigationOptions = {
  tabBarLabel: "Inbox",
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === "ios" ? "ios-mail" : "md-mail"}
    />
  )
};

const ComposeStack = createStackNavigator({
  Compose: ComposeScreen
});

ComposeStack.navigationOptions = {
  tabBarLabel: "Compose",
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === "ios" ? "ios-create" : "md-create"}
    />
  )
};

const AllMailStack = createStackNavigator({
  AllMail: AllMailScreen
});

AllMailStack.navigationOptions = {
  tabBarLabel: "All Mail",
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === "ios" ? "ios-list-box" : "md-list-box"}
    />
  )
};

export default createBottomTabNavigator({
  InboxStack,
  ComposeStack,
  AllMailStack
});
