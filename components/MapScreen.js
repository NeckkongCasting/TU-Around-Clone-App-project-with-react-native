import React, { useState, useEffect, useRef } from 'react';
import { View, TextInput, TouchableOpacity, Image, Alert, Text, Modal, FlatList } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import * as Location from 'expo-location';
import myStyles from '../styles/myStyle';
import busData from '../assets/busLine.json';

export default function MapScreen({ navigation }) {
  const [location, setLocation] = useState(null);
  const [isArrowUp, setIsArrowUp] = useState(true);
  const [showButtons, setShowButtons] = useState(false);
  const [searchText, setSearchText] = useState('');
  const [modalVisible, setModalVisible] = useState(false);
  const [filteredStops, setFilteredStops] = useState([]); 
  const [selectedStop, setSelectedStop] = useState(null); 
  const mapViewRef = useRef(null);
  const isFirstLoad = useRef(true);

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
        isFirstLoad.current = false;
      }
    })();
  }, []);

  const toggleArrow = () => {
    setIsArrowUp(!isArrowUp);
    setShowButtons(!showButtons);
  };

  const goToCurrentLocation = () => {
    if (location && mapViewRef.current) {
      mapViewRef.current.animateToRegion({
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
        latitudeDelta: 0.01,
        longitudeDelta: 0.01,
      });
    } else {
      Alert.alert('ไม่สามารถค้นหาตำแหน่งปัจจุบันได้');
    }
  };

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

  const focusOnSelectedStop = (stop) => {
    if (stop && mapViewRef.current) {
      mapViewRef.current.animateToRegion({
        latitude: stop['ที่ตั้งละติจูด'] || stop['พิกัดละติจูด'],
        longitude: stop['ที่ตั้งลองจิจูด'] || stop['พิกัดลองจิจูด'],
        latitudeDelta: 0.01,
        longitudeDelta: 0.01,
      });
      setSelectedStop(stop);
    }
  };

  const renderBusStop = ({ item }) => (
    <TouchableOpacity
      style={myStyles.dropdownItem}
      onPress={() => {
        setSearchText(item['ชื่อป้าย']);
        setFilteredStops([]);
        focusOnSelectedStop(item);
      }}
    >
      <Text style={myStyles.dropdownItemText}>{item['ชื่อป้าย']}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={myStyles.container}>
      <View style={myStyles.searchContainer}>
        <TextInput
          style={myStyles.searchInput}
          placeholder="ค้นหาป้ายรถ EV"
          placeholderTextColor="#000000"
          value={searchText}
          onChangeText={searchBusStops} // เรียกใช้งานฟังก์ชันค้นหา
          onSubmitEditing={() => setFilteredStops([])}
        />

        <TouchableOpacity style={myStyles.arrowButton} onPress={toggleArrow}>
          <Image
            source={
              isArrowUp
                ? require('../assets/arrow-up-icon.png')
                : require('../assets/arrow-down-icon.png')
            }
            style={myStyles.arrowIcon}
          />
        </TouchableOpacity>
      </View>

      {showButtons && (
        <View style={myStyles.additionalButtonsContainer}>
          <TouchableOpacity style={myStyles.additionalButton} onPress={() => navigation.navigate('HistorySearch')}>
            <Image source={require('../assets/search-icon.png')} style={myStyles.additionalButtonIcon} />
          </TouchableOpacity>
          <TouchableOpacity style={myStyles.additionalButton} onPress={() => setModalVisible(true)}>
            <Image source={require('../assets/bus-icon.png')} style={myStyles.additionalButtonIcon} />
          </TouchableOpacity>
          <TouchableOpacity style={myStyles.additionalButton} onPress={goToCurrentLocation}>
            <Image source={require('../assets/location-icon.png')} style={myStyles.additionalButtonIcon} />
          </TouchableOpacity>
        </View>
      )}

<Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={myStyles.modalContainer}>
          <View style={myStyles.modalContent}>
            <Text style={myStyles.modalTitle}>ข้อมูลรถแต่ละสาย</Text>
            <TouchableOpacity
              style={[myStyles.modalButton, { backgroundColor: 'red' }]}
              onPress={() => { setModalVisible(false); navigation.navigate('SignRed1A'); }}
            >
              <Text style={myStyles.modalButtonText}>EV 1A - สีแดง</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[myStyles.modalButton, { backgroundColor: '#FFB23D' }]}
              onPress={() => { setModalVisible(false); navigation.navigate('SignYellow1B'); }}
            >
              <Text style={myStyles.modalButtonText}>EV 1B - สีเหลือง</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[myStyles.modalButton, { backgroundColor: '#30A077' }]}
              onPress={() => { setModalVisible(false); navigation.navigate('SignGreen2'); }}
            >
              <Text style={myStyles.modalButtonText}>EV 2 - สีเขียว</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[myStyles.modalButton, { backgroundColor: '#8518B0' }]}
              onPress={() => { setModalVisible(false); navigation.navigate('SignPurple3'); }}
            >
              <Text style={myStyles.modalButtonText}>EV 3 - สีม่วง</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[myStyles.modalButton, { backgroundColor: '#1338CA' }]}
              onPress={() => { setModalVisible(false); navigation.navigate('SignBlue5'); }}
            >
              <Text style={myStyles.modalButtonText}>EV 5 - สีฟ้า</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={myStyles.modalCloseButton}
              onPress={() => setModalVisible(false)}
            >
              <Text style={myStyles.modalCloseText}>ปิด</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      {filteredStops.length > 0 && (
        <View style={myStyles.dropdownContainer}>
          <FlatList
            data={filteredStops}
            renderItem={renderBusStop}
            keyExtractor={(item, index) => index.toString()}
          />
        </View>
      )}

      {/* MapView */}
      <MapView
        ref={mapViewRef}
        style={myStyles.map}
        showsUserLocation={true}
      >
        {/* Render Bus Stop Markers */}
        {busData.map((busLine, index) => (
          busLine['ป้ายรถเมล์'].map(stop => (
            <Marker
              key={`${busLine['สายรถ']}-${stop['ลำดับทาง']}`}
              coordinate={{
                latitude: stop['ที่ตั้งละติจูด'] || stop['พิกัดละติจูด'],
                longitude: stop['ที่ตั้งลองจิจูด'] || stop['พิกัดลองจิจูด']
              }}
              title={stop['ชื่อป้าย']}
            >
              <Image
                source={require('../assets/bus-stop.png')}
                style={{
                  width: selectedStop && selectedStop['ชื่อป้าย'] === stop['ชื่อป้าย'] ? 40 : 20,
                  height: selectedStop && selectedStop['ชื่อป้าย'] === stop['ชื่อป้าย'] ? 40 : 20,
                }}
              />
            </Marker>
          ))
        ))}
      </MapView>
    </View>
  );
}
