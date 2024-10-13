
import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity, Image } from 'react-native';

const LoginScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>LOGIN</Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
        keyboardType="email-address"
      />
      <View style={[{
          flexDirection: 'row',
          justifyContent: 'space-between',
        }, styles.input]}>
        <TextInput
        placeholder="Password"
        secureTextEntry
      />
      <Image source={require('./assets/eye.png')} />
      </View>
      
      <TouchableOpacity style={styles.button} >
        <Text style={{
          textAlign: 'center',
          color:'#fff',
        }}>LOGIN</Text>
      </TouchableOpacity>

      <Text style={styles.terms}>When you agree to terms and conditions</Text>
      <Text style={styles.forgotPassword}>Forgot your password?</Text>
      <Text style={styles.or}>Or login with</Text>
      <View style={styles.socialLogin}>
        <TouchableOpacity style={[{
            backgroundColor: '#3D85C6'
            }, styles.socialbtn]}>
          <Image source={require('./assets/fb.png')}
            style={{fontSize: 17,}} />
        </TouchableOpacity>
         <TouchableOpacity  style={[{
              backgroundColor: '#41A0D7',
            }, styles.socialbtn]}>
          <Image source={require('./assets/zalo.png')}
             style={{fontSize: 17,}} />
        </TouchableOpacity>
         <TouchableOpacity style={[{
              borderWidth: 1,
              borderColor: '#0680F1',
              borderRadius: 4,
            }, styles.socialbtn]}>
          <Image source={require('./assets/gg.png')} 
             style={{fontSize: 17,}} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#E0F2F1',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
    width: '80%',
  },
  button: {
    marginTop: 20,
    paddingVertical: 10,
    width: '80%',
    backgroundColor: 'red',
  },
  terms: {
    marginTop: 10,
    color: 'gray',
  },
  forgotPassword: {
    marginTop: 5,
    color: 'blue',
  },
  socialLogin: {
    flexDirection: 'row',
    marginTop: 20,
  },
  or: {
    marginHorizontal: 10,
  },
  socialbtn: {
    paddingHorizontal: 30,
    paddingVertical: 10,
  },
});

export default LoginScreen;