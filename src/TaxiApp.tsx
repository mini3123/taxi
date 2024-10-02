import { SafeAreaView, StyleSheet, Text, Alert} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Intro from "./Intro";
import Login from "./Login";
import Register from "./Register";
import Main from "./Main";
import NickNameScreen from './Main_Setting_NickName';
function TaxiApp() : JSX.Element {
  console.log("-- TaxiApp()")

  const Stack  = createStackNavigator()

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Intro" component={Intro}
                      options={{headerShown: false}}/>
        <Stack.Screen name="Login" component={Login}
                      options={{headerShown: false}}/>
        <Stack.Screen name="Register" component={Register}
                      options={{headerShown: true, title:'회원가입'}}/>
        <Stack.Screen name="Main" component={Main}
                      options={{headerShown: false}}/>
        <Stack.Screen name="NickName" component={NickNameScreen}
                      options={{headerShown: false}}/>


      </Stack.Navigator>
    </NavigationContainer>
  )
}


const styles = StyleSheet.create({
  textBlack: {
    fontSize: 18,
    color: 'black',
  },
  textBlue: {
    fontSize: 18,
    color: 'blue',
  },
});

export default TaxiApp;
