import React from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity} from 'react-native';
import { useNavigation } from '@react-navigation/native'
import * as Animatable from 'react-native-animatable'

export default function Login() {
   const navegation = useNavigation();
   return (
    <View style={styles.container}>
      <Animatable.View animation='fadeInLeft' delay={500} 
      style={styles.header}>
         <Text style={styles.message}>Bem-Vindo</Text>
      </Animatable.View>

      <Animatable.View animation='fadeInUp' style={styles.containerForm}>

         <Animatable.Image
         animation='flipInY' 
         source={require('../../../assets/imagemlogo.png')}
         style={{ width: '100%'}} resizeMode='contain'/>
         
         <Text style={styles.title}>Email</Text>
         <TextInput placeholder='Digite um email'
         style={styles.input}/>

         <Text style={styles.title}>Email</Text>
         <TextInput placeholder='Digite sua senha'
         style={styles.input}/>
          
          <TouchableOpacity onPress={ () => navegation.navigate("Userdata")}  style={styles.button}>
            <Text style={styles.buttonText}>Login</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.buttonRegister}>
            <Text style={styles.registerText}>Cadastre-se</Text>
          </TouchableOpacity>

      </Animatable.View>

    </View>
 );
}

const styles = StyleSheet.create({
   container:{
      flex:1,
      backgroundColor: '#ff8c00',
   },
   header:{
      marginTop: '14%',
      marginBottom: '8%',
      paddingStart: '5%',
   },
   message:{
      fontSize: 28,
      fontWeight: 'bold',
   },
   containerForm:{
      backgroundColor: '#FFF',
      flex:1,
      borderTopLeftRadius: 25,
      borderTopRightRadius: 25,
      paddingStart: '5%',
      paddingEnd: '5%',
   },
   title:{
      fontSize: 20,
      marginTop: 28,
   },
   input:{
      borderBottomWidth: 1,
      height: 48,
      marginBottom: 12,
      fontSize: 16,
   },
   button:{
      backgroundColor: '#ff8c00',
      width: '100%',
      borderRadius: 4,
      paddingVertical: 8,
      marginTop: 14,
      justifyContent: 'center',
      alignItems: 'center',
   },
   buttonText:{
      fontSize: 18,
      fontWeight: 'bold',
   },
   buttonRegister:{
      marginTop: 14,
      alignSelf: 'center',
   },
   registerText:{
      color: '#a1a1a1'
   },
   containerLogo:{
      flex:2,
      justifyContent: 'center',
      alignItems: 'center',
   }
 })