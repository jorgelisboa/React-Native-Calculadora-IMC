import * as React from 'react';
import {Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';

// or any pure javascript modules available in npm
import {Button, TextInput } from 'react-native-paper';

export default class App extends React.Component {
  //Variáveis globais ou states
  state = {
    peso: 0,
    altura: 0,
    imc: 0,
    legenda: "Indeterminado",
    cor: '#95afc0'
  };
  
  calcularIMC = () =>{

    const resultadoIMC = 
        this.state.peso / (this.state.altura*this.state.altura);
    
    this.setState({
      imc: Math.ceil(resultadoIMC)
    });

  if (resultadoIMC < 18.5) {
    this.setState({legenda: "Magreza", cor: "#535c68"});
  }
  else if(resultadoIMC >= 18.5 && resultadoIMC <= 24.5){
    this.setState({legenda: "Normal", cor: "#badc58"});
  }
  else if(resultadoIMC > 25.0 && resultadoIMC <= 29.9){
    this.setState({legenda: "Sobrepeso", cor: "#f9ca24"});
  }  
  else if(resultadoIMC > 30.0 && resultadoIMC <= 39.9){
  this.setState({legenda: "Obesidade", cor: "#f0932b"});
  }  
  else if(resultadoIMC > 40.0){
  this.setState({legenda: "Obesidade grave", cor: "#eb4d4b"});
  }
  }
  
  render(){
    //imc = peso/altura²
  return (
    <View style={styles.appIMC}>
      <Text style={styles.titulo}>Seu IMC</Text>
      
      <View style={[styles.painelResultado,{ backgroundColor: this.state.cor}]}>
        <Text style = {styles.resultado}>{this.state.imc}</Text>
        <Text style = {styles.campoPrognostico}>{this.state.legenda}</Text>
      </View>

      <View>
        <TextInput 
          style= {styles.campoPeso} 
            label= 'Peso'
            onChangeText = {valor => {
            this.setState({peso: valor.replace("," , ".")});
          }}
        />

        <TextInput 
          style= {styles.campoAltura} 
            label= 'Altura'
            onChangeText = {valor => {
            this.setState({altura: valor.replace("," , ".")});
            }}
        />
        <Button mode= 'contained' onPress={this.calcularIMC} style= {styles.botaoCalculo}>
          Calcular
        </Button>
      </View>
    </View>
  );
}
}

const styles = StyleSheet.create({
  appIMC: {
    padding: 10,

  },
  titulo: {
    textAlign: 'center',
    fontWeight: "bold",

  },
  painelResultado: {
    borderRadius: 5,
    width: 160,
    padding: 10,
    alignSelf: "center",
    marginVertical: 5,
    marginHorizontal: 10,
  },
  resultado: {
    textAlign: 'center',
    fontSize: 22,
    fontWeight: "bold",

  },
  campoPrognostico: {
    textAlign: 'center',
    fontSize: 20,
  },
  campoPeso: {
    marginVertical: 10,
  },
    campoAltura: {
    marginVertical: 10,
  },
  botaoCalculo:{

  }
});
