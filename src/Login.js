import React from 'react';
import fire from './config/fire';
import Menu from './Menu.js';
export default class Login extends React.Component {
    constructor(props)
    {
        super(props);
        this.state={
            user:{},
        };
    }
    componentDidMount()
    {
        this.authListener(); 
    }
    authListener()
    {
        fire.auth().onAuthStateChanged((user)=>{
            console.log(user);
            if(user){
                this.setState({user});
                //localStorage.setItem('user',user.uid);
            }
            else{
                this.setState({user:null});
               // localStorage.removeItem('user');
            }
        });
    }
    render()
    {  
        return (<div>
            {this.state.user ? <Login /> : <Login />}
        </div>)
    }
}
