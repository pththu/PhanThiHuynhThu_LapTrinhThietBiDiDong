import { Text, SafeAreaView, StyleSheet, View, Image, TouchableOpacity, TextInput } from 'react-native';
import { RadioButton } from 'react-native-paper';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.register}>REGISTER</Text>
      <View style={{
        marginHorizontal: 15,
        gap: 15,
      }}>
        <View style={styles.vinput}>
          <TextInput 
            placeholder="Name"
          />
        </View>
        <View style={styles.vinput}>
          <TextInput 
            placeholder="Phone"
          />
        </View>
        <View style={styles.vinput}>
          <TextInput 
            placeholder="Email"
          />
        </View>
        <View style={styles.vinput}>
          <TextInput 
            placeholder="Password"
          />
          <Image source={require('./assets/eye.png')} />
        </View>
        <View style={styles.vinput}>
          <TextInput 
            placeholder="Birthday"
          />
        </View>
        <View style={styles.gender}>
           <RadioButton.Group onValueChange={() => {}} value="male">
            <View style={styles.radioItem}>
              <Text>Male</Text>
              <RadioButton value="male" />
            </View>
            <View style={styles.radioItem}>
              <Text>Female</Text>
              <RadioButton value="female" />
            </View>
          </RadioButton.Group>
        </View>
        <TouchableOpacity>
          <Text style={[{
              color: '#fff', 
              backgroundColor: '#E53935',
              borderRadius: 4,
              padding: 10,
            }, styles.register]}>REGISTER</Text>
        </TouchableOpacity>
        <Text style={{textAlign: 'center'}}>When you agree to terms and conditions</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  vinput: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    paddingVertical: 10,
    backgroundColor: '#C4C4C44D',
  },
  register: {
    textAlign: 'center',
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  gender: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  radioItem: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
