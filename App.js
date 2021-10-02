import React, { useState } from "react";
import { StyleSheet, Image, View, ScrollView } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { FontAwesome, MaterialIcons, Foundation } from "@expo/vector-icons";
import Pcomedia from "./src/components/Pcomedia";
import Promance from "./src/components/Promance";
import Paccion from "./src/components/Paccion";
import Scomedia from "./src/components/Scomedia";
import Saventura from "./src/components/Saventura";
import Sfantasia from "./src/components/Sfantasia";
import Peliculas from "./src/components/Peliculas";
import Series from "./src/components/Series";

function Pelis() {
  return (
    <>
      <ScrollView>

        <View style={styles.fondo}>
          <View style={styles.encabezado}>
            <Image style={styles.logo} source={require("./src/img/logo.png")} />
          </View>
          <Pcomedia />
          <Promance />
          <Paccion />
        </View>

      </ScrollView>
    </>
  );
}

function Temporadas() {
  return (
    <>
      <ScrollView>

        <Scomedia />
        <Saventura />
        <Sfantasia />

      </ScrollView>
    </>
  );
}

function Otro() {
  return (
    <>
      <ScrollView>
      <View style={styles.contenedor}>
        <Peliculas />
        <Series />
      </View>
      </ScrollView>
    </>
  );
}

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Feed"
      screenOptions={{
        tabBarActiveTintColor: "#FF0000",
        tabBarActiveBackgroundColor: "#000000",
        tabBarInactiveTintColor: "#34495e",
        tabBarInactiveBackgroundColor: "#FFF",
      }}
    >
      <Tab.Screen
        name="Peliculas"
        component={Pelis}
        options={{
          tabBarLabel: "Peliculas",
          tabBarIcon: ({ color, size }) => (
            <Foundation name="play-video" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Series"
        component={Temporadas}
        options={{
          tabBarLabel: "Series",
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="video-collection" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Próximos Estrenos"
        component={Otro}
        options={{
          tabBarLabel: "Proximamente",
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="calendar" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  logo: {
    height: 80,
    width: 300,
    flex: 1,
  },
  encabezado: {
    marginTop: 30,
    marginBottom: 0,
    flex: 1,
    alignItems: "center",
    padding: 10,
  },
  fondo: {
    marginTop: 10,
    backgroundColor: "white",
  },
  contenedor:{
    backgroundColor:'#D7DBDD',
  }
});

