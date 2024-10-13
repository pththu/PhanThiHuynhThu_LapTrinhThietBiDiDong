import React, { useState } from 'react';
import { View, Text, TextInput, Button, Image, StyleSheet, TouchableOpacity, SafeAreaView } from 'react-native';

const CartScreen = () => {
  const unitPrice = 141800; // Đơn giá cho một sản phẩm
  const [quantity, setQuantity] = useState(1);
  const [promoCode, setPromoCode] = useState('');

  // Tính thành tiền dựa trên số lượng
  const totalPrice = unitPrice * quantity;

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <View style={styles.itemContainer}>
          <Image 
            source={require('./assets/book.png')} 
            style={styles.bookImage}
          />
          <View style={styles.detailsContainer}>
            <Text style={styles.bookTitle}>Nguyên hàm tích phân và ứng dụng</Text>
            <Text style={styles.sellerText}>Cung cấp bởi Tiki Trading</Text>
            <Text style={styles.priceText}>{unitPrice.toLocaleString()} ₫</Text>
            <Text style={{fontSize: 12, color: 'grey', textDecorationLine: 'line-through'}}>141.000 đ</Text>
            <View style={styles.quantityContainer}>
              <TouchableOpacity style={styles.quantityButton} onPress={decreaseQuantity}>
                <Text style={styles.quantityButtonText}>-</Text>
              </TouchableOpacity>
              <Text style={styles.quantityText}>{quantity}</Text>
              <TouchableOpacity style={styles.quantityButton} onPress={increaseQuantity}>
                <Text style={styles.quantityButtonText}>+</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View style={styles.promoContainer}>
          <TouchableOpacity style={{
              padding: 10, 
              borderWidth: 1, 
              borderRadius: 4,
              borderColor: 'gray',
              width: '50%',
            }}>
            <Text style={{textAlign: 'center', fontSize: 17}}>Mã giảm giá</Text>
          </TouchableOpacity>
          <Button title="Áp dụng"/>
        </View>
        <View style={{flexDirection: 'row', justifyContent: 'center'}}>
          <Text>Bạn có phiếu quà tặng Tiki/Got it/ Urbox?</Text>
          <Text style={{color: 'blue'}}>Nhập tại đây?</Text>
        </View>
        <View style={styles.summaryContainer}>
          <Text style={styles.summaryText}>Tạm tính</Text>
          <Text style={styles.priceText}>{totalPrice.toLocaleString()} ₫</Text>
        </View>
      </View>
      <View>
        <View style={styles.summaryContainer}>
            <Text style={styles.summaryText}>Thành tiền</Text>
            <Text style={styles.priceText}>{totalPrice.toLocaleString()} ₫</Text>
          </View>
        <TouchableOpacity style={styles.checkoutButton}>
          <Text style={styles.checkoutButtonText}>TIẾN HÀNH ĐẶT HÀNG</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
    padding: 16,
    justifyContent: 'space-around',
    backgroundColor: '#fff',
  },
  itemContainer: {
    flexDirection: 'row',
    marginBottom: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    paddingBottom: 16,
  },
  bookImage: {
    width: 80,
    height: 100,
    marginRight: 16,
  },
  detailsContainer: {
    flex: 1,
  },
  bookTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  sellerText: {
    fontSize: 14,
    color: '#888',
    marginBottom: 8,
  },
  priceText: {
    marginTop: 10,
    fontSize: 25,
    color: '#d32f2f',
  },
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 8,
  },
  quantityButton: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: '#f0f0f0',
    justifyContent: 'center',
    alignItems: 'center',
  },
  quantityButtonText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  quantityText: {
    fontSize: 16,
    marginHorizontal: 12,
  },
  promoContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  summaryContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  summaryText: {
    marginTop: 10,
    fontSize: 25,
    color: 'red',
  },
  checkoutButton: {
    backgroundColor: '#d32f2f',
    paddingVertical: 16,
    alignItems: 'center',
    borderRadius: 4,
  },
  checkoutButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default CartScreen;
