import logo from './logo.svg';
import './App.css';
import {Component} from "react";
import Home from "./Components/Home";

class App extends  Component{
 constructor(props) {
   super(props);
   this.state = {
     isLoggedIn : false
   }
 }
 handleLogIn = () => {
   this.setState({isLoggedIn: true})
 }
 handleLogOut = () => {
   this.setState({isLoggedIn : false})
 }
 render() {
   const {isLoggedIn} = this.state
   if(isLoggedIn){
     return (
         <Home onLogOut = {this.handleLogOut}></Home>
     )
   }
   return (
       <div style={{textAlign: 'center'}}>
         <div>
           <h1> Please login</h1>
           <button onClick={this.handleLogIn}>Login</button>
         </div>
       </div>
   )
 }
}

export default App;
