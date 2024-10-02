import { SafeAreaView, StyleSheet, Text, TouchableOpacity, TextInput, View, Alert } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome'
import { useState } from "react";
import { useNavigation,ParamListBase } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";

function Register() : JSX.Element {
  console.log("-- Register()")

  const [userId,setUserId] = useState('');
  const [userPw,setUserPw] = useState('');
  const [userPw2,setUserPw2] = useState('');

  const isDisable = ()=>{
    if (userId && userPw && userPw2 && (userPw==userPw2)) {
      return false
    }
    else {
      return true
    }
  }

  const navigation = useNavigation<StackNavigationProp<ParamListBase>>()

  return (
    <SafeAreaView style={styles.container}>
      <View style={[styles.container, {justifyContent:'flex-end'}]}>
        <Icon name="taxi" size={80} color={'#3498db'}/>
      </View>
      <View style={[styles.container, {flex:2}]}>
        <TextInput style={styles.input} placeholder={'아이디'} onChangeText={newId => setUserId(newId)}/>
        <TextInput style={styles.input} placeholder={'패스워드'} secureTextEntry={true} onChangeText={newPw => setUserPw(newPw)}/>
        <TextInput style={styles.input} placeholder={'패스워드 확인'} secureTextEntry={true} onChangeText={newPw2 => setUserPw2(newPw2)}/>
      </View>
      <View style={[styles.container, {justifyContent:'flex-start'}]}>
        <TouchableOpacity disabled={isDisable()} style={isDisable() ? styles.buttonDisable : styles.button}>
          <Text style={styles.buttonText}>회원가입</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width:'100%',
  },
  input: {
    width: '70%',
    height: 40,
    borderWidth: 1,
    borderColor: 'gray',
    marginVertical: 10,
    padding: 10
  },
  button: {
    width: '70%',
    backgroundColor: '#3498db',
    paddingVertical: 10,
    paddingHorizontal : 20,
    borderRadius:5
  },
  buttonText : {
    color:'white',
    fontSize:16,
    textAlign: 'center'
  },
  buttonDisable: {
    width:'70%',
    backgroundColor: 'gray',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  }
});

export default Register;
