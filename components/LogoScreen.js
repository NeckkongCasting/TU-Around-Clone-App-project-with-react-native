import React from 'react';
import myStyles from '../styles/myStyle';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const tulogo = require('../assets/tuaroundIcon.png');

export default function HomeScreen({ navigation }) {
  return (
    <View style={myStyles.container}>

      <LinearGradient
        colors={['#AA2B3D', '#4E0E17']}
        style={myStyles.background}
      >

        <TouchableOpacity onPress={() => navigation.navigate('MapScreen')}>
          <Image source={tulogo} style={myStyles.logo} />
        </TouchableOpacity>
        <Text style={myStyles.header}>Tu Around</Text>
        <Text style={myStyles.content}>(Clone App)</Text>
        <Text style={myStyles.content}>Team Developer : ก๋วยเตี๋ยวหน้าใสกับใจโทรมๆ</Text>
        
      </LinearGradient>

    </View>
  );
}
