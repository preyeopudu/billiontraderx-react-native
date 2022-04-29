import React, { useEffect, useMemo, useState } from "react";
import { StyleSheet, View, ActivityIndicator } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { RootStackScreen } from "./Stack/RootStack";
import {DrawerStack} from './Stack/drawerStack'
import { AuthContext } from './Stack/context';


export default function App() {
  const [isloading, setIsloading] = useState(true);
  const [auth, setAuth] = useState(false);
  const [user, setUser] = useState();
  const [notification, setNotification] = useState();
  const [ad, setAd] = useState();

  const initialLoginState = {
    isloading: false,
    userName: null,
    userToken: null,
  };

  return (
    <AuthContext.Provider
      value={{
        auth,
        setAuth,
        user,
        setUser,
        notification,
        setNotification,
        ad,
        setAd,
      }}
    >
      <NavigationContainer>
        {auth != false ? <DrawerStack/> : <RootStackScreen />}
        <StatusBar translucent={true} />
      </NavigationContainer>
    </AuthContext.Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
