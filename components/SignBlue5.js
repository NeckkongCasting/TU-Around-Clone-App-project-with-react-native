import React from 'react';
import KreemStyle from '../styles/KreemStyle';
import { View, Text, Image, TouchableOpacity } from 'react-native';

const back = require('../assets/kreem-back.png');
const car = require('../assets/kreem-bluecar.png');
const box = require('../assets/kreem-bluebox.png');
const bigline = require('../assets/kreem-bluebigline.png');
const line = require('../assets/kreem-blueline.png');

export default function Red1A({ navigation }) {
    return (
      <View style={KreemStyle.background}>
        {/* แถบด้านบน */}
        <View style={KreemStyle.blueheaderBar}>
          <Image source={back} style={KreemStyle.back} />
          <Text style={KreemStyle.headerText}>EV 5</Text>
        </View>
        
        <Image source={bigline} style={KreemStyle.bluebiglineIcon} />

        <View style={[KreemStyle.containerIcon, KreemStyle.row]}>
          <Image source={car} style={[KreemStyle.line,KreemStyle.carIcon]} />
          <Image source={box} style={[KreemStyle.line,KreemStyle.boxIcon]} />
          <Text style={KreemStyle.textInbox}>ป้ายที่ผ่าน</Text>

          <View style={KreemStyle.containerInfo}>
            <View style={KreemStyle.row}><Image source={line} style={KreemStyle.line} /><Text style={KreemStyle.textInfo}>รพ.ธรรมศาสตร์</Text></View>
            <View style={KreemStyle.row}><Image source={line} style={KreemStyle.line} /><Text style={KreemStyle.textInfo}>อุทยานป๋วย 100 ปี</Text></View>
            <View style={KreemStyle.row}><Image source={line} style={KreemStyle.line} /><Text style={KreemStyle.textInfo}>กิติยาคาร</Text></View>
            <View style={KreemStyle.row}><Image source={line} style={KreemStyle.line} /><Text style={KreemStyle.textInfo}>สนามกีฬา</Text></View>
            <View style={KreemStyle.row}><Image source={line} style={KreemStyle.line} /><Text style={KreemStyle.textInfo}>โรงพิมพ์ มธ.</Text></View>
            <View style={KreemStyle.row}><Image source={line} style={KreemStyle.line} /><Text style={KreemStyle.textInfo}>สถานีขนส่งรถตู้</Text></View>
            <View style={KreemStyle.row}><Image source={line} style={KreemStyle.line} /><Text style={KreemStyle.textInfo}>โรงทอศิลปกรรม</Text></View>
            <View style={KreemStyle.row}><Image source={line} style={KreemStyle.line} /><Text style={KreemStyle.textInfo}>สนง.ยานพาหนะ มธ.</Text></View>
            <View style={KreemStyle.row}><Image source={line} style={KreemStyle.line} /><Text style={KreemStyle.textInfo}>ข้าง JC CINEMA</Text></View>
            <View style={KreemStyle.row}><Image source={line} style={KreemStyle.line} /><Text style={KreemStyle.textInfo}>ตลาดนัดอินเตอร์โซน</Text></View>
            <View style={KreemStyle.row}><Image source={line} style={KreemStyle.line} /><Text style={KreemStyle.textInfo}>คณะศิลปกรรม</Text></View>
            <View style={KreemStyle.row}><Image source={line} style={KreemStyle.line} /><Text style={KreemStyle.textInfo}>ข้างตึก SC1</Text></View>
          </View>
        </View>
      </View>
    );
}