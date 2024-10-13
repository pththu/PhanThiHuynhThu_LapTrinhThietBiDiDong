import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, ScrollView  } from 'react-native';

const Screen1 = ({ navigation }) => {
  return (
   <ScrollView style={styles.container}>
      <View style={styles.subContainer}>
        <View style={styles.viewImage}>
          <Image 
            source={require('../assets/blue.png')}
            style={styles.imageMain}
          />
        </View>
        <View style={styles.viewDetail}>
          <Text>Điện Thoại Vsmart Joy 3 - Hàng chính hãng</Text>
          <View style={styles.viewDetailLine2}>
            <View style={styles.viewStar}>
              <Image 
                source={require('../assets/star.png')}
                style={styles.imageStar}
              />
              <Image 
                source={require('../assets/star.png')}
                style={styles.imageStar}
              />
              <Image 
                source={require('../assets/star.png')}
                style={styles.imageStar}
              />
              <Image 
                source={require('../assets/star.png')}
                style={styles.imageStar}
              />
              <Image 
                source={require('../assets/star.png')}
                style={styles.imageStar}
              />
            </View>
            <Text>(Xem 828 đánh giá)</Text>
          </View>
          <View style={styles.viewDetaiPrice}>
            <Text style={{
              flex: 1,
              fontSize: 18,
              fontWeight: 'bold',
            }}>1.790.000 đ</Text>
            <Text style={{
              flex: 1,
              fontSize: 15,
              color: 'gray',
              textDecorationLine: 'line-through',
            }}>1.790.000 đ</Text>
          </View>
          <View style={styles.viewDetalFinal}>
            <Text style={{
              color: 'red',
              fontWeight: 'bold',
            }}>Ở ĐÂU RẺ HƠN HOÀN TIỀN</Text>
            <Image source={require('../assets/question.png')}
              style={styles.imageQuest}
            />
          </View>
          <TouchableOpacity 
            onPress={() => navigation.navigate('Screen2')}
            style={styles.btnChooseColor}>
            <Text style={{
              top: 1,
              alignSelf: 'center',
              marginLeft: '25%',
            }}>4 MÀU-CHỌN LOẠI</Text>
            <Image source={require('../assets/Vector.png')}/>
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

export default Screen1;

const styles = StyleSheet.create({
  // view
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  subContainer: {
    justifyContent: 'center',
    gap: 60,
  },
  viewImage: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  viewDetail: {
    marginHorizontal: 22,
    justifyContent: 'center',
    gap: 10,
  },
  viewDetailLine2: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  viewStar: {
    flexDirection: 'row',
    gap: 5,
  },
  viewDetaiPrice: {
    flexDirection: 'row',
  },
  viewDetalFinal: {
    flexDirection: 'row',
  },
  viewBtnChoosePurchase: {
  },
  //image
  imageMain: {
    width: 265,
    height: 324,
  },
  imageStar: {
    width: 23,
    height: 25,
  },
  imageQuest: {
    marginHorizontal: 5,
  },
  // btn
  btnChooseColor: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    borderWidth: 1,
    borderRadius: 5,
    paddingVertical: 10,
    borderColor: 'grey',
  },
  btnChoosePurchase: {
    backgroundColor: 'red',
    marginHorizontal: 20,
    alignItems: 'center',
    paddingVertical: 20,
    borderRadius: 5,
  },

});
