import { StyleSheet, Dimensions } from 'react-native';

export default KreemStyle = StyleSheet.create({
  container: {
    flex: 1,
  },
  background: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  redheaderBar: {
    position: 'absolute', // ทำให้แถบอยู่ในตำแหน่งที่แน่นอน
    top: 0, // ชิดด้านบนสุดของหน้าจอ
    left: 0, // เริ่มที่ตำแหน่งซ้ายสุด
    right: 0, // ยืดเต็มความกว้างหน้าจอ
    backgroundColor: 'red', // สีแดง
    height: 80, // ความสูงของแถบ
    justifyContent: 'center', // จัดข้อความให้อยู่ตรงกลางในแนวตั้ง
    alignItems: 'center', // จัดข้อความให้อยู่ตรงกลางในแนวนอน
    zIndex: 1, // ให้แถบอยู่เหนือเนื้อหาอื่น
  },
  headerText: {
      color: 'white', // สีข้อความ
      fontSize: 24, // ขนาดข้อความ
      fontWeight: 'bold', // น้ำหนักข้อความ
  },
  back: {
    position: 'absolute',
    left: 30,
    top: 30,
    width: 13,
    height: 26,
  },

  redbiglineIcon: {
    position: 'absolute',
    left: 43,
    top: 110,
    height: 745,
  },

  containerIcon: {
    position: 'absolute',
    flexDirection: 'column', // จัดเรียงในแนวตั้ง
    alignItems: 'flex-start', // จัดตำแหน่งแนวซ้าย
    left: 30,
    top: 100,
  },
  carIcon: {
    width: 45,
    height: 45,
  },
  boxIcon: {
    width: 130,
    height: 32,
  },
  textInbox: {
    position: 'absolute',
    left: 78,
    fontSize: 19,
  },

  containerInfo: {
    position: 'absolute',
    flexDirection: 'column', // จัดเรียงในแนวตั้ง
    alignItems: 'flex-start', // จัดตำแหน่งแนวซ้าย
    left: 20,
    top: 60,
  },
  row: {
    flexDirection: 'row', // จัดเรียงในแนวนอนสำหรับแต่ละชุด
    alignItems: 'center', // จัดให้อยู่กึ่งกลางในแนวตั้ง
    marginBottom: 10, // เพิ่มระยะห่างระหว่างแถว
  },
  line: {
      marginRight: 10, // เพิ่มช่องว่างระหว่างรูปกับข้อความ
  },
  textInfo: {
      fontSize: 16, // ขนาดตัวอักษร
  },


  yellowheaderBar: {
    position: 'absolute', // ทำให้แถบอยู่ในตำแหน่งที่แน่นอน
    top: 0, // ชิดด้านบนสุดของหน้าจอ
    left: 0, // เริ่มที่ตำแหน่งซ้ายสุด
    right: 0, // ยืดเต็มความกว้างหน้าจอ
    backgroundColor: '#FFB23D', 
    height: 80, // ความสูงของแถบ
    justifyContent: 'center', // จัดข้อความให้อยู่ตรงกลางในแนวตั้ง
    alignItems: 'center', // จัดข้อความให้อยู่ตรงกลางในแนวนอน
    zIndex: 1, // ให้แถบอยู่เหนือเนื้อหาอื่น
  },
  yellowbiglineIcon: {
    position: 'absolute',
    left: 43,
    top: 110,
    height: 700,
  },

  greenheaderBar: {
    position: 'absolute', // ทำให้แถบอยู่ในตำแหน่งที่แน่นอน
    top: 0, // ชิดด้านบนสุดของหน้าจอ
    left: 0, // เริ่มที่ตำแหน่งซ้ายสุด
    right: 0, // ยืดเต็มความกว้างหน้าจอ
    backgroundColor: '#30A077', 
    height: 80, // ความสูงของแถบ
    justifyContent: 'center', // จัดข้อความให้อยู่ตรงกลางในแนวตั้ง
    alignItems: 'center', // จัดข้อความให้อยู่ตรงกลางในแนวนอน
    zIndex: 1, // ให้แถบอยู่เหนือเนื้อหาอื่น
  },
  greenbiglineIcon: {
    position: 'absolute',
    left: 43,
    top: 110,
    height: 500,
  },

  purpleheaderBar: {
    position: 'absolute', // ทำให้แถบอยู่ในตำแหน่งที่แน่นอน
    top: 0, // ชิดด้านบนสุดของหน้าจอ
    left: 0, // เริ่มที่ตำแหน่งซ้ายสุด
    right: 0, // ยืดเต็มความกว้างหน้าจอ
    backgroundColor: '#8518B0', 
    height: 80, // ความสูงของแถบ
    justifyContent: 'center', // จัดข้อความให้อยู่ตรงกลางในแนวตั้ง
    alignItems: 'center', // จัดข้อความให้อยู่ตรงกลางในแนวนอน
    zIndex: 1, // ให้แถบอยู่เหนือเนื้อหาอื่น
  },
  purplebiglineIcon: {
    position: 'absolute',
    left: 43,
    top: 110,
    height: 700,
  },

  blueheaderBar: {
    position: 'absolute', // ทำให้แถบอยู่ในตำแหน่งที่แน่นอน
    top: 0, // ชิดด้านบนสุดของหน้าจอ
    left: 0, // เริ่มที่ตำแหน่งซ้ายสุด
    right: 0, // ยืดเต็มความกว้างหน้าจอ
    backgroundColor: '#1338CA', 
    height: 80, // ความสูงของแถบ
    justifyContent: 'center', // จัดข้อความให้อยู่ตรงกลางในแนวตั้ง
    alignItems: 'center', // จัดข้อความให้อยู่ตรงกลางในแนวนอน
    zIndex: 1, // ให้แถบอยู่เหนือเนื้อหาอื่น
  },
  bluebiglineIcon: {
    position: 'absolute',
    left: 43,
    top: 110,
    height: 500,
  },
});
