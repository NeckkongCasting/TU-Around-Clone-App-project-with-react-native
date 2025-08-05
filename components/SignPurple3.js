import React from 'react';
import KreemStyle from '../styles/KreemStyle';
import { View, Text, Image, TouchableOpacity } from 'react-native';

const back = require('../assets/kreem-back.png');
const car = require('../assets/kreem-purplecar.png');
const box = require('../assets/kreem-purplebox.png');
const bigline = require('../assets/kreem-purplebigline.png');
const line = require('../assets/kreem-purpleline.png');

export default function Red1A({ navigation }) {
    return (
      <View style={KreemStyle.background}>
        {/* แถบด้านบน */}
        <View style={KreemStyle.purpleheaderBar}>
          <Image source={back} style={KreemStyle.back} />
          <Text style={KreemStyle.headerText}>EV 3</Text>
        </View>
        
        <Image source={bigline} style={KreemStyle.purplebiglineIcon} />

        <View style={[KreemStyle.containerIcon, KreemStyle.row]}>
          <Image source={car} style={[KreemStyle.line,KreemStyle.carIcon]} />
          <Image source={box} style={[KreemStyle.line,KreemStyle.boxIcon]}/>
          <Text style={KreemStyle.textInbox}>ป้ายที่ผ่าน</Text>

          <View style={KreemStyle.containerInfo}>
            <View style={KreemStyle.row}><Image source={line} style={KreemStyle.line} /><Text style={KreemStyle.textInfo}>หอทียูโดม</Text></View>
            <View style={KreemStyle.row}><Image source={line} style={KreemStyle.line} /><Text style={KreemStyle.textInfo}>เชียงราก 1</Text></View>
            <View style={KreemStyle.row}><Image source={line} style={KreemStyle.line} /><Text style={KreemStyle.textInfo}>ยิม 4-5-6</Text></View>
            <View style={KreemStyle.row}><Image source={line} style={KreemStyle.line} /><Text style={KreemStyle.textInfo}>ลานพญานาค</Text></View>
            <View style={KreemStyle.row}><Image source={line} style={KreemStyle.line} /><Text style={KreemStyle.textInfo}>ยิม 7</Text></View>
            <View style={KreemStyle.row}><Image source={line} style={KreemStyle.line} /><Text style={KreemStyle.textInfo}>หอสมุดป๋วย</Text></View>
            <View style={KreemStyle.row}><Image source={line} style={KreemStyle.line} /><Text style={KreemStyle.textInfo}>อาคารกิจกรรมนักศึกษา</Text></View>
            <View style={KreemStyle.row}><Image source={line} style={KreemStyle.line} /><Text style={KreemStyle.textInfo}>สวทช.</Text></View>
            <View style={KreemStyle.row}><Image source={line} style={KreemStyle.line} /><Text style={KreemStyle.textInfo}>รร.สาธิตแห่ง มธ.</Text></View>
            <View style={KreemStyle.row}><Image source={line} style={KreemStyle.line} /><Text style={KreemStyle.textInfo}>ตลาดนัดอินเตอร์โซน</Text></View>
            <View style={KreemStyle.row}><Image source={line} style={KreemStyle.line} /><Text style={KreemStyle.textInfo}>ศูนย์อาหารทิวสนโดม</Text></View>
            <View style={KreemStyle.row}><Image source={line} style={KreemStyle.line} /><Text style={KreemStyle.textInfo}>หอในโซน B6</Text></View>
          </View>
        </View>
      </View>
    );
}