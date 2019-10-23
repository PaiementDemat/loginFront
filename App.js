import React from 'react';
import { StyleSheet, Text, View , TextInput,Dimensions,TouchableOpacity} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';



const { width: WIDTH} = Dimensions.get('window')

export default class App extends React.Component {

 constructor() {
  super();
  this.state={
    showPass:true,
    press:false
  }
}

showPass= () =>{
  if(this.state.press==false){
    this.setState({showPass:false,press:true})
  }
  else
  {
    this.setState({showPass:true,press:false})
  }
}



render() {
  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <Icon name={'ios-person'} size={28} color={'rgba(255,255,255,0.7'} style={styles.inputIcon}/>
        <TextInput style={styles.input}
                   placeholder={'Login'}
                   placeholderTextColor={'rgba(255,255,255,0.7)'}
                   underlineColorIphone='transparent'
        />
      </View>
      <View>
       <Icon name={'ios-lock'} size={28} color={'rgba(255,255,255,0.7'} style={styles.inputIcon}/>
        <TextInput style={styles.input}
                   placeholder={'Password'}
                   secureTextEntry={this.state.showPass}
                   placeholderTextColor={'rgba(255,255,255,0.7)'}
                   underlineColorIphone='transparent'
        />
        <TouchableOpacity style={styles.btnEye} onPress={this.showPass.bind(this)}>
           <Icon name={this.state.press==false ? 'ios-eye':'ios-eye-off'} size={26} color={'rgba(255,255,255,0.7)'} 
           />
        </TouchableOpacity>
      </View>
       <TouchableOpacity style={styles.btnLogin}>
           <Text style={styles.text} >Login</Text> 
           
        </TouchableOpacity>
    </View>
  );
}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#A0DFDC',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    width: WIDTH - 55,
    height:45 , 
    borderRadius:25,
    fontSize:16,
    paddingLeft:45,
    backgroundColor: 'rgba(0,0,0,0.35)',
    color:'rgba(255,255,255,0.7)',
    marginHorizontal:25
  },
  inputContainer:{
    marginBottom:10
  },
  inputIcon: {
    position:'absolute',
    top:10,
    left:37
  },
  btnEye:{
    position:'absolute' ,
    top:8,
    right:37
  },
  btnLogin:{
      width: WIDTH - 55,
    height:45 , 
    borderRadius:25,
    backgroundColor:'#432577',
    justifyContent:'center',
    marginTop:20
  },
  text:{
    color:'rgba(255,255,255,0.7)',
    fontSize:16,
    textAlign:'center'
  }
});
