import React, {Component} from 'react';
import {
  StyleSheet,
  TouchableOpacity, 
  Text, 
  TextInput,
  View, 
  Image
} from 'react-native';

export default class All extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userValue: '',
      passwordValue: '',
      message: '',
      count: 0,
    }
  }

  changeTextUserInput = text => {
    this.setState({userValue: text});
  };
  changeTextPasswordInput = text => {
    this.setState({passwordValue: text});
  };

  onPress = () => {
    this.setState({message:''})
    if (this.state.userValue=="jhon" && this.state.passwordValue=="marca"){
      this.textUser.clear()
      this.textPassword.clear()
      this.props.navigation.navigate('Listado')
    } else {
      this.setState({message: "Error en las credenciales. Vuelva a intentar"})
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <Image style={styles.image}/>
        <Text style={styles.text}>
          Usuario:
        </Text>
        <TextInput
          ref={input => { this.textUser = input }}
          style={{height: 40, borderColor: 'gray', borderWidth: 1}}
          onChangeText={text=>this.changeTextUserInput(text)}
        />
        <Text style={styles.text}>
          Contraseña:
        </Text>
        <TextInput
          ref={input => { this.textPassword = input }}
          secureTextEntry={true}
          style={{height: 40, borderColor: 'gray', borderWidth: 1}}
          onChangeText={text=>this.changeTextPasswordInput(text)}
        />

        <TouchableOpacity style={styles.button} onPress={this.onPress}>
          <Text> Ingresar </Text>
        </TouchableOpacity>

        <Text style={styles.alert}>{this.state.message}</Text>

        <Text style={styles.text}>
          {this.state.newUserValue}
        </Text>
        <Text style={styles.text}>
          {this.state.newPasswordValue}
        </Text>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 10,
  },
  text: {
    alignItems: 'center',
    padding: 10,
  },
  button: {
    top: 10,
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
  },
  countContainer: {
    alignItems: 'center',
    padding: 10,
  },
  countText: {
    color: '#FF00FF'
  },
  image: {
    width: 340,
    resizeMode: 'contain'
  },
  alert: {
    color: 'red',
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 20,
  }
})