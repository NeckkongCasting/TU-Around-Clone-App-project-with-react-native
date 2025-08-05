import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Image,FlatList, TouchableOpacity, Alert } from 'react-native';
import * as Location from 'expo-location';
import NoonStyle from '../styles/NoonStyle';
import busData from '../assets/busLine.json'; // JSON สำหรับ Dropdown

const linear = require('../assets/linear-determinate.png');

export default function HistorySearch({ navigation }) {
  const [startPoint, setStartPoint] = useState('');
  const [endPoint, setEndPoint] = useState('');
  const [searchText, setSearchText] = useState('');
  const [filteredStops, setFilteredStops] = useState([]);

  // Get user's current location
  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        Alert.alert('การเข้าถึง location ถูกปฏิเสธ');
        return;
      }

      let currentLocation = await Location.getCurrentPositionAsync({});
      setStartPoint(`ตำแหน่งของคุณ`);
    })();
  }, []);

  // Search bus stops
  const searchBusStops = (text) => {
    setSearchText(text);
    const result = [];
    busData.forEach(busLine => {
      busLine['ป้ายรถเมล์'].forEach(stop => {
        if (stop['ชื่อป้าย'].includes(text)) {
          result.push(stop);
        }
      });
    });
    setFilteredStops(result);
  };

  const renderBusStop = ({ item }) => (
    <TouchableOpacity
      style={NoonStyle.dropdownItem}
      onPress={() => {
        setSearchText(item['ชื่อป้าย']);
        setEndPoint(item['ชื่อป้าย']);
        setFilteredStops([]);
      }}
    >
      <Text style={NoonStyle.dropdownItemText}>{item['ชื่อป้าย']}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={NoonStyle.container}>
      <Text style={NoonStyle.header}>คุณจะไปที่ไหน</Text>

      <View style={NoonStyle.card}>
        <Text style={NoonStyle.label}>จุดเริ่มต้น</Text>
        <TextInput
          style={NoonStyle.textInput}
          value={startPoint}
        
        />
      </View>

      <View style={NoonStyle.card}>
        <Text style={NoonStyle.label}>จุดหมายปลายทาง</Text>
        <TextInput
          style={NoonStyle.textInput}
          value={searchText}
          onChangeText={searchBusStops}
        />
        {filteredStops.length > 0 && (
          <View style={NoonStyle.dropdownContainer}>
            <FlatList
              data={filteredStops}
              renderItem={renderBusStop}
              keyExtractor={(item, index) => index.toString()}
            />
          </View>
        )}
      </View>

      <View style={NoonStyle.rowContainer}>
        <Text style={NoonStyle.sectionTitle}>ประวัติการค้นหา</Text>
        <View style={NoonStyle.historyContainer}>
          <Image source={linear} style={NoonStyle.linear} />
        </View>
      </View>

      <View style={NoonStyle.rowContainer}>
        <Text style={NoonStyle.sectionTitle}>สถานที่แนะนำ</Text>
        <View style={NoonStyle.historyContainer}>
          <Image source={linear} style={NoonStyle.linear} />
        </View>
      </View>

      <TouchableOpacity
        style={NoonStyle.routeButton}
        onPress={() => {
          if (!endPoint) {
            Alert.alert('ข้อมูลเส้นทาง', 'กรุณากรอกจุดหมายปลายทางก่อน');
          } else {
            Alert.alert('ข้อมูลเส้นทาง', `จุดเริ่มต้น: ${startPoint}\nจุดหมาย: ${endPoint}`);
          }
        }}
      >
        <Text style={NoonStyle.routeButtonText}>ดูข้อมูลเส้นทาง</Text>
      </TouchableOpacity>
    </View>
  );
}

