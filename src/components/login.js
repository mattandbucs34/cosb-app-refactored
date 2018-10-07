import React, {Component} from 'react';

class Login extends Component {
  render() {
    return (
      <form>
        <label>Email:<input type='email'></input></label>
        <label>Password:<input type='password'></input></label> 
        <div>
          First time here?<a href='#'>Register Here</a>
        </div>
        <div>
          <a href='#'>Forgot Password?</a>
        </div>
        <button type='submit'>Log In</button>
      </form>

    );
  }
}

export default Login;