import React from 'react';
import KreemStyle from '../styles/KreemStyle';
import { View, Text, Image, TouchableOpacity } from 'react-native';

const back = require('../assets/kreem-back.png');
const car = require('../assets/kreem-redcar.png');
const box = require('../assets/kreem-redbox.png');
const bigline = require('../assets/kreem-redbigline.png');
const line = require('../assets/kreem-redline.png');

export default function Red1A({ navigation }) {
    return (
      <View style={KreemStyle.background}>
        {/* แถบด้านบน */}
        <View style={KreemStyle.redheaderBar}>
          <Image source={back} style={KreemStyle.back} />
          <Text style={KreemStyle.headerText}>EV 1A</Text>
        </View>
        
        <Image source={bigline} style={KreemStyle.redbiglineIcon} />

        <View style={[KreemStyle.containerIcon, KreemStyle.row]}>
          <Image source={car} style={[KreemStyle.line,KreemStyle.carIcon]} />
          <Image source={box} style={[KreemStyle.line,KreemStyle.boxIcon]}/>
          <Text style={KreemStyle.textInbox}>ป้ายที่ผ่าน</Text>

          <View style={KreemStyle.containerInfo}>
            <View style={KreemStyle.row}><Image source={line} style={KreemStyle.line} /><Text style={KreemStyle.textInfo}>โรงพิมพ์ มธ.</Text></View>
            <View style={KreemStyle.row}><Image source={line} style={KreemStyle.line} /><Text style={KreemStyle.textInfo}>สถานีขนส่งรถตู้</Text></View>
            <View style={KreemStyle.row}><Image source={line} style={KreemStyle.line} /><Text style={KreemStyle.textInfo}>โรงทอศิลปกรรม</Text></View>
            <View style={KreemStyle.row}><Image source={line} style={KreemStyle.line} /><Text style={KreemStyle.textInfo}>สนง.ยามพาหนะ มธ.</Text></View>
            <View style={KreemStyle.row}><Image source={line} style={KreemStyle.line} /><Text style={KreemStyle.textInfo}>ข้าง JC CINEMA</Text></View>
            <View style={KreemStyle.row}><Image source={line} style={KreemStyle.line} /><Text style={KreemStyle.textInfo}>คณะศิลปกรรม</Text></View>
            <View style={KreemStyle.row}><Image source={line} style={KreemStyle.line} /><Text style={KreemStyle.textInfo}>ข้างตึก SC1</Text></View>
            <View style={KreemStyle.row}><Image source={line} style={KreemStyle.line} /><Text style={KreemStyle.textInfo}>หอพระ</Text></View>
            <View style={KreemStyle.row}><Image source={line} style={KreemStyle.line} /><Text style={KreemStyle.textInfo}>อาคารกิจกรรมนักศึกษา</Text></View>
            <View style={KreemStyle.row}><Image source={line} style={KreemStyle.line} /><Text style={KreemStyle.textInfo}>สถานบันเอเชีย</Text></View>
            <View style={KreemStyle.row}><Image source={line} style={KreemStyle.line} /><Text style={KreemStyle.textInfo}>สวทช.</Text></View>
            <View style={KreemStyle.row}><Image source={line} style={KreemStyle.line} /><Text style={KreemStyle.textInfo}>รร.สาธิตแห่ง มธ.</Text></View>
            <View style={KreemStyle.row}><Image source={line} style={KreemStyle.line} /><Text style={KreemStyle.textInfo}>ตลาดนัดอินเตอร์โซน</Text></View>
            <View style={KreemStyle.row}><Image source={line} style={KreemStyle.line} /><Text style={KreemStyle.textInfo}>ศูนย์อาหารทิวสนโดม</Text></View>
            <View style={KreemStyle.row}><Image source={line} style={KreemStyle.line} /><Text style={KreemStyle.textInfo}>หอในโซน B6</Text></View>
            <View style={KreemStyle.row}><Image source={line} style={KreemStyle.line} /><Text style={KreemStyle.textInfo}>ลานจอดรถหอในโซน B</Text></View>
            <View style={KreemStyle.row}><Image source={line} style={KreemStyle.line} /><Text style={KreemStyle.textInfo}>หอในโซน C (4-6)</Text></View>
            <View style={KreemStyle.row}><Image source={line} style={KreemStyle.line} /><Text style={KreemStyle.textInfo}>หอพัก 14 ชั้น</Text></View>
            <View style={KreemStyle.row}><Image source={line} style={KreemStyle.line} /><Text style={KreemStyle.textInfo}>อาคาร SC1</Text></View>
            <View style={KreemStyle.row}><Image source={line} style={KreemStyle.line} /><Text style={KreemStyle.textInfo}>อาคารกลุ่มสังคมศาสตร์</Text></View>
            <View style={KreemStyle.row}><Image source={line} style={KreemStyle.line} /><Text style={KreemStyle.textInfo}>หน้า JC CINEMA</Text></View>
            <View style={KreemStyle.row}><Image source={line} style={KreemStyle.line} /><Text style={KreemStyle.textInfo}>คณะวิศวะ-SIIT-สถาปัตย์</Text></View>
          </View>
        </View>
        
      

      </View>

    );
}