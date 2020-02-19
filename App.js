import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Loading from './src/Loading';
import LoginForm from './src/LoginForm';
import Home from './src/Home';
import firebase from 'firebase';

class App extends Component{
  state={
    loggedIn: null
  }

  componentDidMount(){
    firebase.auth().onAuthStateChanged((user) => {
      if(user){
        this.setState({
          loggedIn: true
        })
      }else{
        this.setState({
          loggedIn: false
        })
      }
    })
  }

  renderContent = () =>{
    switch(this.state.loggedIn){
      case false:
        return <LoginForm/>
      case true:
        return <Home/>
      default:
        return <Loading/>
    }
  }

  render(){
    return (
      <View style={styles.container}>
        {this.renderContent()}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent: 'center',
    alignItems:'center'
  }
})


export default App