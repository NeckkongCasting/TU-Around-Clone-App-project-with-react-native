import { StyleSheet, Dimensions } from 'react-native';

export default myStyle = StyleSheet.create({
  container: {
    flex: 1,
  },
  background: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    fontSize: 30,
    color: 'white',
    fontWeight: 'bold',
  },
  content: {
    fontSize: 15,
    color: '#fff',
  },
  logo: {
    width: 100,
    height: 100,
  },
  map: {
    flex: 1,
  },
  searchContainer: {
    position: 'absolute',
    top: 55,
    width: '85%',
    alignSelf: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    zIndex: 1,
  },
  searchInput: {
    height: 40,
    flex: 1,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    backgroundColor: 'white',
  },
  arrowButton: {
    marginLeft: 10,
    backgroundColor: '#fff',
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 9,
    width: 40,
    height: 40,
  },

  arrowIcon: {
    width: 20,
    height: 20,
  },

  // ใหม่: Styles สำหรับปุ่มเพิ่มเติม
  additionalButtonsContainer: {
    position: 'absolute',
    top: 104,
    right: 28.75,
    flexDirection: 'column',
    alignItems: 'center',
    zIndex: 2,
  },

  additionalButton: {
    marginBottom: 10,
    backgroundColor: '#fff',
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 9,
    width: 40,
    height: 40,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 3,
  },


  additionalButtonIcon: {
    width: 20,
    height: 20,
  },
  buttonText: {
    fontSize: 12,
    color: '#000',
    textAlign: 'center',
    marginTop: 5, // เพิ่มระยะห่างระหว่างไอคอนกับข้อความ
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    width: '80%',
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  modalButton: {
    padding: 10,
    marginVertical: 5,
    borderRadius: 5,
    alignItems: 'center',
  },
  modalButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  modalCloseButton: {
    marginTop: 10,
    padding: 10,
    backgroundColor: '#CCC',
    borderRadius: 5,
    alignItems: 'center',
  },
  modalCloseText: {
    fontWeight: 'bold',
  },
  dropdownContainer: {
    position: 'absolute',
    top: 100,
    width: '85%',
    alignSelf: 'center',
    backgroundColor: 'white',
    borderRadius: 5,
    borderWidth: 1,
    zIndex: 1,
    maxHeight: 200,
    overflow: 'hidden', // ซ่อนส่วนที่เกิน
  },
  dropdownItem: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  dropdownItemText: {
    fontSize: 16,
    color: '#000',
  },  
  navigateButton: {
    backgroundColor: '#FF8C00',
    padding: 15,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  navigateButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  buttonContainer: {
    position: 'absolute',
    bottom: 30,
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 5,
    elevation: 3,
    width: Dimensions.get('window').width * 0.8,
  },
});
