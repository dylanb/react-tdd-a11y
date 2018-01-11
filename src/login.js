import React, { Component } from 'react'

class Login extends Component {
  render() {
  return (
    <div className="login">
      <h2>Login</h2>
      <div className="field">
        <label for="email">Email *</label>
        <input type="text" name="email" id="email"/>
      </div>
      <div className="field">
        <label className="field" for="password">Password *</label>
        <input type="password" name="password" id="password"/>
      </div>
      <button className="submit-btn">Submit</button>
    </div>
  )
  }
}

export default Login
