import React, { Component } from 'react'

class Login extends Component {
  render() {
  return (
    <form className="login">
      <h2>Login</h2>
      <div className="field">
        <label htmlFor="email">Email *</label>
        <input type="text" name="email" id="email" required/>
      </div>
      <div className="field">
        <label className="field" htmlFor="password">Password *</label>
        <input type="password" name="password" id="password" required/>
      </div>
      <button className="submit-btn">Submit</button>
    </form>
  )
  }
}

export default Login
