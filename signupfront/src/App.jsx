import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css"
import axios from 'axios'
import "./CSS/style.css"
import AccountCircle from '@mui/icons-material/AccountCircle';


class App extends Component {

  constructor() {
    super()

    this.state = {
      fullName: '',
      userName: '',
      email: '',
      password: ''
    }

    this.changeFullName = this.changeFullName.bind(this)
    this.changeUsername = this.changeUsername.bind(this)
    this.changeEmail = this.changeEmail.bind(this)
    this.changePassword = this.changePassword.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
  }

  changeFullName(event) {
    this.setState({
      fullName: event.target.value
    })
  }
  changeUsername(event) {
    this.setState({
      userName: event.target.value
    })
  }
  changeEmail(event) {
    this.setState({
      email: event.target.value
    })
  }
  changePassword(event) {
    this.setState({
      password: event.target.value
    })
  }


  onSubmit(event) {
    event.preventDefault()

    const registered = {
      fullName: this.state.fullName,
      userName: this.state.userName,
      email: this.state.email,
      password: this.state.password
    }

    axios.post('http://localhost:5090/app/signup', registered).then(response => console.log(response.data))

    this.setState({
      fullName: '',
      userName: '',
      email: '',
      password: ''
    })
  }


  render() {
    return (
      <div>
        <div className="container">

          <div className="form-div">
            <div className="profile">
              <AccountCircle style={{ width: 80, height: 80, }} />
              <h2>Sign Up</h2>
            </div>

            <form onSubmit={this.onSubmit}>
              <input type="text"
                placeholder='Full name'
                onChange={this.changeFullName}
                value={this.state.fullName}
                className='form-control form-group' />

              <input type="text"
                placeholder='Username'
                onChange={this.changeUsername}
                value={this.state.userName}
                className='form-control form-group' />

              <input type="text"
                placeholder='email'
                onChange={this.changeEmail}
                value={this.state.email}
                className='form-control form-group' />


              <input type="password"
                placeholder='password'
                onChange={this.changePassword}
                value={this.state.password}
                className='form-control form-group' />

              <p>Already have an account? <a href=""><u>Log In</u></a>
                <br />
                <br />
                <a href="" className="pwd-recovery"> <u>Forgot Password?</u></a></p>
              <input type="submit" className='btn btn-danger btn-block ' value='Submit' />
            </form>


          </div>
        </div>
      </div>
    )
  }
}

export default App;