import {
    View,
    Text,
    Image,
    TouchableOpacity,
    useWindowDimensions,
    StyleSheet,
  } from "react-native";
  import React, { useState } from "react";
  import { StatusBar } from "expo-status-bar";
  import { MaterialIcons } from "@expo/vector-icons";
  import { TabBar, TabView } from "react-native-tab-view";
  import { Colors } from "react-native/Libraries/NewAppScreen";
  
  export default function Profile () {
  
    const layout = useWindowDimensions();
    const [index, setIndex] = useState(0);
  
    const [routes] = useState([
      { key: "first", title: "Photos" },
      { key: "second", title: "Likes" },
    ]);
  
    const renderTabBar = (props) => (
      <TabBar
        {...props}
        indicatorStyle={{
          backgroundColor: Colors.primary,
        }}
        style={{
          backgroundColor: Colors.white,
          height: 44,
        }}
        renderLabel={({ focused, route }) => (
          <Text style={[{ color: focused ? Colors.black : Colors.gray }]}>
            {route.title}
          </Text>
        )}
      />
    );
    return (
      <View style={style.mainview}>
        <StatusBar backgroundColor={Colors.gray} />
        <View style={{ width: "100%" }}>
          <Image
            source={require('../../../assets/icoUser.png')}
            resizeMode="cover"
            style={style.imagecover}
          />
        </View>
  
        <View style={{ flex: 1, alignItems: "center" }}>
          <Image
            source={require('../../../assets/icoUser.png')}
            resizeMode="contain"
            style={{
              height: 155,
              width: 155,
              borderRadius: 999,
              borderColor: Colors.primary,
              borderWidth: 2,
              marginTop: -90,
            }}
          />
  
          <Text
            style={{
              color: Colors.primary,
              marginVertical: 8,
            }}
          >
            Melissa Peters
          </Text>
          <Text
            style={{
              color: Colors.black,
            }}
          >
            Interior designer
          </Text>
  
          <View
            style={{
              flexDirection: "row",
              marginVertical: 6,
              alignItems: "center",
            }}
          >
            <MaterialIcons name="location-on" size={24} color="black" />
            <Text
              style={{
                marginLeft: 4,
              }}
            >
              Lagos, Nigeria
            </Text>
          </View>
  
          <View
            style={{
              paddingVertical: 8,
              flexDirection: "row",
            }}
          >
            <View
              style={{
                flexDirection: "column",
                alignItems: "center",
                marginHorizontal: 10,
              }}
            >
              <Text
                style={{
                  color: Colors.primary,
                }}
              >
                122
              </Text>
              <Text
                style={{                  
                  color: Colors.primary,
                }}
              >
                Followers
              </Text>
            </View>
  
            <View
              style={{
                flexDirection: "column",
                alignItems: "center",
                marginHorizontal: 10,
              }}
            >
              <Text
                style={{                
                  color: Colors.primary,
                }}
              >
                67
              </Text>
              <Text
                style={{
                  color: Colors.primary,
                }}
              >
                Followings
              </Text>
            </View>
  
            <View
              style={{
                flexDirection: "column",
                alignItems: "center",
                marginHorizontal: 10,
              }}
            >
              <Text
                style={{            
                  color: Colors.primary,
                }}
              >
                77K
              </Text>
              <Text
                style={{
                  color: Colors.primary,
                }}
              >
                Likes
              </Text>
            </View>
          </View>
  
          <View style={{ flexDirection: "row" }}>
            <TouchableOpacity
              style={{
                width: 124,
                height: 36,
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: Colors.primary,
                borderRadius: 10,
                marginHorizontal: 20,
              }}
            >
              <Text
                style={{                  
                  color: Colors.white,
                }}
              >
                Edit Profile
              </Text>
            </TouchableOpacity>
  
            <TouchableOpacity
              style={{
                width: 124,
                height: 36,
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: Colors.primary,
                borderRadius: 10,
                marginHorizontal: 20,
              }}
            >
              <Text
                style={{
                  color: Colors.white,
                }}
              >
                Add Friend
              </Text>
            </TouchableOpacity>
          </View>
        </View>
  
        <View style={{ flex: 1, marginHorizontal: 22, marginTop: 20 }}>
          <TabView
            navigationState={{ index, routes }}
            renderScene={renderScene}
            onIndexChange={setIndex}
            initialLayout={{ width: layout.width }}
            renderTabBar={renderTabBar}
          />
        </View>
      </View>
    );
};

const style = StyleSheet.create({
  
  photoview:{
    flex: 1,
    aspectRatio: 1,
    margin: 3,
  },

  image:{ 
    width: "100%", 
    height: "100%", 
    borderRadius: 12 
  },

  mainview:{ 
    flex: 1, 
    backgroundColor: Colors.white, 
  },

  imagecover:{
    height: 228,
    width: "100%",
  },
  
})