import React, {Component} from 'react';

class ForgotPW extends Component {
  render() {
    return (
      <div>
        <form>
          <label>Enter the email you registered with:
            <input type='email'></input>
          </label>
          <button type='submit'>Submit</button>
        </form>
        <div>
          <p>
            Thank you. You will be emailed a temporary password. Please log in with the temporary password. You will be prompted to change your password when you log in.
          </p>
        </div>
      </div>
    );
  }
}

export default ForgotPW;