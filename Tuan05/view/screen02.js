import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, Image} from 'react-native';

const Screen2 = ({ navigation }) => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.subContainer}>
        <View style={styles.inforProduct}>
          <Image 
            source={require('../assets/blue.png')} 
            style={styles.imageMain02}/>
          <Text>Điện Thoại Vsmart Joy 3 Hàng chính hãng</Text>
        </View>
        <View>
          <Text>Chọn một màu bên dưới:</Text>
          <TouchableOpacity style={{
            marginVertical: 5,
            alignSelf: 'center',
            width: 85,
            height: 80,
            backgroundColor: '#C5F1FB',
          }}>
          </TouchableOpacity>
          <TouchableOpacity style={{
            marginVertical: 5,
            alignSelf: 'center',
            width: 85,
            height: 80,
            backgroundColor: '#F30D0D',
          }}>
          </TouchableOpacity>
          <TouchableOpacity style={{
            marginVertical: 5,
            alignSelf: 'center',
            width: 85,
            height: 80,
            backgroundColor: '#000000',
          }}>
          </TouchableOpacity>
          <TouchableOpacity style={{
            marginVertical: 5,
            alignSelf: 'center',
            width: 85,
            height: 80,
            backgroundColor: '#234896',
          }}>
          </TouchableOpacity>
        </View>
        <View style={styles.viewBtnChoosePurchase}>
          <TouchableOpacity style={styles.btnChoosePurchase}>
            <Text style={{
              fontSize: 20,
              color: '#fff',
            }}>CHỌN MUA</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}

export default Screen2;

const styles = StyleSheet.create({
  // view
  container: {
    padding: 10,
    flex: 1,
    justifyContent: 'center',
  },
  subContainer: {
    justifyContent: 'center',
    gap: 60,
  },
  btnChoosePurchase: {
    backgroundColor: 'red',
    marginHorizontal: 20,
    alignItems: 'center',
    paddingVertical: 20,
    borderRadius: 5,
  },
  // screen 02
  // view
  inforProduct: {
    flex: 1,
    flexDirection: 'row',
  },
  // image
  imageMain02: {
    width: 112,
    height: 132,
  }
});