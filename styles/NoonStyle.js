import { StyleSheet, Dimensions } from 'react-native'; 

export default NoonStyle = StyleSheet.create({
    container: {
        flex: 1, 
        padding: 15,
    },
    header: {
      fontSize: 20,
      color: 'black',
      fontWeight: 'bold',
      textAlign: 'center',
      marginTop: 40, // เพิ่มระยะห่างจากขอบบน
    },
    rowContainer: {
        flexDirection: 'column',
        justifyContent: 'space-between',
        marginBottom: 125,
        marginTop: 40,
    },
    card: {
        flex: 0,
        padding: 5,
        marginHorizontal: 4,
        backgroundColor: '#fff',
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#ddd',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 5,
        marginTop: 20,
    },
    label: {
        color: '#ff6633',
        fontSize: 12,
        marginBottom: 5,
    },
    textInput: {
        borderWidth: 1,
        borderColor: '#ddd',
        borderRadius: 5,
        padding: 10,
        fontSize: 16,
        color: '#333',
        backgroundColor: '#fff',
        marginTop: 5,
    },
    sectionTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    linear: {
        width: 380,
        height: 12,
    },
    routeButton: {
        position: 'absolute',
        bottom: 30, // ระยะห่างจากด้านล่างของหน้าจอ
        left: Dimensions.get('window').width * 0.1,
        width: Dimensions.get('window').width * 0.8,
        backgroundColor: '#F5A4B3',
        paddingVertical: 15,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        elevation: 5, // เงาให้ปุ่มเด่นขึ้น
    },
    routeButtonText: {
        color: '#fff', // สีข้อความของปุ่ม
        fontSize: 16,
        fontWeight: 'bold',
    },
    dropdownContainer: {
      position: 'absolute',
      top: 80,
      left: 0,
      right: 0,
      backgroundColor: 'white',
      borderRadius: 5,
      borderWidth: 1,
      borderColor: '#ddd',
      maxHeight: 200,
      zIndex: 10,
    },
    dropdownItem: {
      padding: 10,
      borderBottomWidth: 1,
      borderBottomColor: '#ddd',
    },
    dropdownItemText: {
      fontSize: 16,
    },
    
});


