
import React, { useState, useEffect, useRef } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet, Alert } from 'react-native';
import MapView from 'react-native-maps';
import * as Location from 'expo-location';
import myStyles from '../styles/myStyle';
import NoonStyle from '../styles/NoonStyle'; // Import Style ถูกต้อง



export default function MapObject() {
  const [location, setLocation] = useState(null);
  const [isArrowUp, setIsArrowUp] = useState(true);
  const [searchText, setSearchText] = useState('');
  const mapViewRef = useRef(null);
  const isFirstLoad = useRef(true); // ตอนเข้าหน้า Map ครั้งแรกจะรับค่าตำแหน่งเลย

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        Alert.alert('การเข้าถึง location ถูกปฏิเสธ');
        return;
      }

      let currentLocation = await Location.getCurrentPositionAsync({});
      setLocation(currentLocation);

      if (currentLocation && isFirstLoad.current) {
        mapViewRef.current.animateToRegion({
          latitude: currentLocation.coords.latitude,
          longitude: currentLocation.coords.longitude,
          latitudeDelta: 0.01,
          longitudeDelta: 0.01,
        });
        isFirstLoad.current = false; // ทำให้หยุดทำงานเพื่อไม่ให้หน้าต่างเด้งไปตำแหน่งปัจจุบันเองทุกครั้งที่ได้รับตำแหน่งใหม่
      }
    })();
  }, []);

  const toggleArrow = () => {
    setIsArrowUp(prevState => !prevState); // พลิกลูกศร
  };

  const handleSearch = () => {
    // เพิ่มฟังก์ชันในการค้นหาตำแหน่งที่ผู้ใช้กรอกในช่องค้นหา
  };

  return (
    
    <View style={myStyles.container}>
      <View style={NoonStyle.background}>

        <View style={NoonStyle.headerBar}>
      <Text style={NoonStyle.headerText}>TU Around</Text>
        </View>
      </View>

      <View style={myStyles.searchContainer}>
        <TextInput
          style={myStyles.searchInput}
          placeholder="ค้นหา"
          placeholderTextColor="#000000"
          value={searchText}
          onChangeText={setSearchText} // อัปเดตข้อความค้นหา
          onSubmitEditing={handleSearch} // เรียกฟังก์ชันค้นหาเมื่อกด Enter
        />

        <TouchableOpacity style={myStyles.arrowButton} onPress={toggleArrow}>
          <Image
            source={isArrowUp ? require('../assets/arrow-up-icon.png') : require('../assets/arrow-down-icon.png')}
            style={myStyles.arrowIcon}
          />
        </TouchableOpacity>
      </View>

      <MapView
        ref={mapViewRef}
        style={myStyles.map}
        showsUserLocation={true}
      />

    </View>
  );
}
