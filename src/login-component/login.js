import React, { Component } from 'react';
import '../App.css';
import axios from 'axios'


const api = axios.create({
  baseURL: 'http://localhost:3000/users'
})

class Login extends Component {

    componentDidMount(){
        this.getUsers();
      }
  
    state = {
        users: []
      }

    getUsers = async () => {
        let data = await api.get('/').then(({data}) => data);
        this.setState({ users: data });
    }
    verifyUser(param) {
        let loginValidated;
        this.state.users.map(item => (item.userName === param ? loginValidated = true : ''));
        if(loginValidated){
            alert(`User ${param} has been logged in.`)
            this.props.history.push('/shopping')
        }
        else {
            alert('You cannot log-in.')
        }
    }

    render() {
  
        return (
            <div className="App">
                <header className="App-header">
                   <h1>Shopping List App</h1>
                    <form id="login-form" onSubmit={(event) => this.verifyUser(event.target.firstChild.value)}>
                        <input id="login-input" type='text' placeholder='Enter username to log-in'/>
                        <br />
                        <button type="submit">Log-In</button>
                    </form>
                </header>
            </div>
        );
    }

}

export default Login;
