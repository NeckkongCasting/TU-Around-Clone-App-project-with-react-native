import React from 'react';
import KreemStyle from '../styles/KreemStyle';
import { View, Text, Image, TouchableOpacity } from 'react-native';

const back = require('../assets/kreem-back.png');
const car = require('../assets/kreem-yellowcar.png');
const box = require('../assets/kreem-yellowbox.png');
const bigline = require('../assets/kreem-yellowbigline.png');
const line = require('../assets/kreem-yellowline.png');

export default function Red1A({ navigation }) {
    return (
      <View style={KreemStyle.background}>
        {/* แถบด้านบน */}
        <View style={KreemStyle.yellowheaderBar}>
          <Image source={back} style={KreemStyle.back} />
          <Text style={KreemStyle.headerText}>EV 1B</Text>
        </View>
        
        <Image source={bigline} style={KreemStyle.yellowbiglineIcon} />

        <View style={[KreemStyle.containerIcon, KreemStyle.row]}>
          <Image source={car} style={[KreemStyle.line,KreemStyle.carIcon]} />
          <Image source={box} style={[KreemStyle.line,KreemStyle.boxIcon]}/>
          <Text style={KreemStyle.textInbox}>ป้ายที่ผ่าน</Text>

          <View style={KreemStyle.containerInfo}>
            <View style={KreemStyle.row}><Image source={line} style={KreemStyle.line} /><Text style={KreemStyle.textInfo}>โรงพิมพ์ มธ.</Text></View>
            <View style={KreemStyle.row}><Image source={line} style={KreemStyle.line} /><Text style={KreemStyle.textInfo}>สถานีขนส่งรถตู้</Text></View>
            <View style={KreemStyle.row}><Image source={line} style={KreemStyle.line} /><Text style={KreemStyle.textInfo}>โรงทอศิลปกรรม</Text></View>
            <View style={KreemStyle.row}><Image source={line} style={KreemStyle.line} /><Text style={KreemStyle.textInfo}>สนง.ยามพาหนะ มธ.</Text></View>
            <View style={KreemStyle.row}><Image source={line} style={KreemStyle.line} /><Text style={KreemStyle.textInfo}>ยิม 4-5-6</Text></View>
            <View style={KreemStyle.row}><Image source={line} style={KreemStyle.line} /><Text style={KreemStyle.textInfo}>ลานพุทธมณฑล</Text></View>
            <View style={KreemStyle.row}><Image source={line} style={KreemStyle.line} /><Text style={KreemStyle.textInfo}>ยิม 7</Text></View>
            <View style={KreemStyle.row}><Image source={line} style={KreemStyle.line} /><Text style={KreemStyle.textInfo}>หอพัก 14 ชั้น</Text></View>
            <View style={KreemStyle.row}><Image source={line} style={KreemStyle.line} /><Text style={KreemStyle.textInfo}>หอในโซน C (1-3)</Text></View>
            <View style={KreemStyle.row}><Image source={line} style={KreemStyle.line} /><Text style={KreemStyle.textInfo}>ศูนย์การวิจัยโดม</Text></View>
            <View style={KreemStyle.row}><Image source={line} style={KreemStyle.line} /><Text style={KreemStyle.textInfo}>หอในโซน B6</Text></View>
            <View style={KreemStyle.row}><Image source={line} style={KreemStyle.line} /><Text style={KreemStyle.textInfo}>ลานจอดรถหอในโซน B</Text></View>
            <View style={KreemStyle.row}><Image source={line} style={KreemStyle.line} /><Text style={KreemStyle.textInfo}>รร.สาธิต-อนุบาล-ประถมศึกษา</Text></View>
            <View style={KreemStyle.row}><Image source={line} style={KreemStyle.line} /><Text style={KreemStyle.textInfo}>COMMON K BANK</Text></View>
            <View style={KreemStyle.row}><Image source={line} style={KreemStyle.line} /><Text style={KreemStyle.textInfo}>สมบ. อภิการบดี</Text></View>
            <View style={KreemStyle.row}><Image source={line} style={KreemStyle.line} /><Text style={KreemStyle.textInfo}>ศูนย์หนังสือ</Text></View>
            <View style={KreemStyle.row}><Image source={line} style={KreemStyle.line} /><Text style={KreemStyle.textInfo}>หอสมุดป๋วย</Text></View>
            <View style={KreemStyle.row}><Image source={line} style={KreemStyle.line} /><Text style={KreemStyle.textInfo}>สนง. ทะเบียนนักศึกษา</Text></View>
            <View style={KreemStyle.row}><Image source={line} style={KreemStyle.line} /><Text style={KreemStyle.textInfo}>คณะวิดวะ-SIIT-สถาปัตย์</Text></View>
            <View style={KreemStyle.row}><Image source={line} style={KreemStyle.line} /><Text style={KreemStyle.textInfo}>อาคารกลุ่มสังคมศาสตร์</Text></View>
          </View>
        </View>
      </View>
    );
}