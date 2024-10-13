import { Text, SafeAreaView, StyleSheet,
TouchableOpacity, FlatList, View, Image, StatusBar, ScrollView } from 'react-native';

const DATA = [
  {
    "id": 1,
    "product_name": "Ca nấu lẩu, nấu mì mini",
    "shop": "Shop Devang",
    "action": "Chat",
    "image": require('./assets/ca_nau_lau.png')
  },
  {
    "id": 2,
    "product_name": "1KG KHÔ GÀ BƠ TỎI",
    "shop": "Shop LTD Food",
    "action": "Chat",
    "image": require('./assets/ga_bo_toi.png')
  },
  {
    "id": 3,
    "product_name": "Xe cần cẩu đa năng",
    "shop": "Shop Thế giới đồ chơi",
    "action": "Chat",
    "image": require('./assets/xa_can_cau.png')
  },
  {
    "id": 4,
    "product_name": "Đồ chơi dạng mô hình",
    "shop": "Shop Thế giới đồ chơi",
    "action": "Chat",
    "image": require('./assets/do_choi_dang_mo_hinh.png')
  },
  {
    "id": 5,
    "product_name": "Lãnh đạo giản đơn",
    "shop": "Shop Minh Long Book",
    "action": "Chat",
    "image": require('./assets/lanh_dao_gian_don.png')
  },
  {
    "id": 6,
    "product_name": "Hiểu lòng con trẻ",
    "shop": "Shop Minh Long Book",
    "action": "Chat",
    "image": require('./assets/hieu_long_con_tre.png')
  },
];

const Item = ({obj}) => {
  return (
    <View style={styles.product}>
      <Image style={styles.img} source={obj.image}/>
      <View>
        <Text>{obj.product_name}</Text>
        <Text>{obj.shop}</Text>
      </View>
      <TouchableOpacity
        style={styles.chats}>
        <Text>{obj.action}</Text>
      </TouchableOpacity>
    </View>
  )
};

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Image style={{marginHorizontal: 5}} source={require('./assets/ant-design_arrow-left-outlined.png')}/>
        <Text style={{color: '#fff', textAlign: 'center'}}>Chat</Text>
        <Image style={{marginHorizontal: 5}} source={require('./assets/bi_cart-check.png')}/>
      </View>
      <View>
        <Text style={{margin: 10, }}>Bạn có thắc mắc với sản phẩm vừa xem đừng ngại chát với shop!</Text>
      </View>
      <ScrollView>
        <FlatList 
          data={DATA}
          renderItem={({item}) => <Item obj={item} />}
          keyExtractor={item => item.id}
        />
      </ScrollView>
     
      <View style={styles.menu}>
        <Image style={{marginHorizontal: 5}} source={require('./assets/Group10.png')}/>
        <Image source={require('./assets/Vector(Stroke).png')}/>
        <Image style={{marginHorizontal: 5}} source={require('./assets/Vector1(Stroke).png')}/>
      </View>
    </SafeAreaView>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
  },
  header: {
    paddingVertical: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#1BA9FF'
  },
  menu: {
    paddingVertical: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#1BA9FF'
  },
  product: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 10,
  },
  img: {
    width: 80,
    height: 80,
  }, 
  chats: {
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
    width: 70,
    height: 40,
  }
});
