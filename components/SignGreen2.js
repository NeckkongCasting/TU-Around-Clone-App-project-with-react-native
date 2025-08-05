import React from 'react';
import KreemStyle from '../styles/KreemStyle';
import { View, Text, Image, TouchableOpacity } from 'react-native';

const back = require('../assets/kreem-back.png');
const car = require('../assets/kreem-greencar.png');
const box = require('../assets/kreem-greenbox.png');
const bigline = require('../assets/kreem-greenbigline.png');
const line = require('../assets/kreem-greenline.png');

export default function Red1A({ navigation }) {
    return (
      <View style={KreemStyle.background}>
        {/* แถบด้านบน */}
        <View style={KreemStyle.greenheaderBar}>
          <Image source={back} style={KreemStyle.back} />
          <Text style={KreemStyle.headerText}>EV 2</Text>
        </View>
        
        <Image source={bigline} style={KreemStyle.greenbiglineIcon} />

        <View style={[KreemStyle.containerIcon, KreemStyle.row]}>
          <Image source={car} style={[KreemStyle.line,KreemStyle.carIcon]} />
          <Image source={box} style={[KreemStyle.line,KreemStyle.boxIcon]}/>
          <Text style={KreemStyle.textInbox}>ป้ายที่ผ่าน</Text>

          <View style={KreemStyle.containerInfo}>
            <View style={KreemStyle.row}><Image source={line} style={KreemStyle.line} /><Text style={KreemStyle.textInfo}>รพ.ธรรมศาสตร์</Text></View>
            <View style={KreemStyle.row}><Image source={line} style={KreemStyle.line} /><Text style={KreemStyle.textInfo}>อุทยานป๋วย 100 ปี</Text></View>
            <View style={KreemStyle.row}><Image source={line} style={KreemStyle.line} /><Text style={KreemStyle.textInfo}>กิติยาคาร</Text></View>
            <View style={KreemStyle.row}><Image source={line} style={KreemStyle.line} /><Text style={KreemStyle.textInfo}>สนามกีฬา</Text></View>
            <View style={KreemStyle.row}><Image source={line} style={KreemStyle.line} /><Text style={KreemStyle.textInfo}>ศูนย์การเรียนรู้</Text></View>
            <View style={KreemStyle.row}><Image source={line} style={KreemStyle.line} /><Text style={KreemStyle.textInfo}>ธนาคารกรุงเทพ</Text></View>
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