import React, {Component} from 'react';

class Registration extends Component {
  constructor(props) {
    super(props);

    this.state = {
      stateArray: ["AK - Alaska", 
      "AL - Alabama", 
      "AR - Arkansas", 
      "AS - American Samoa", 
      "AZ - Arizona", 
      "CA - California", 
      "CO - Colorado", 
      "CT - Connecticut", 
      "DC - District of Columbia", 
      "DE - Delaware", 
      "FL - Florida", 
      "GA - Georgia", 
      "GU - Guam", 
      "HI - Hawaii", 
      "IA - Iowa", 
      "ID - Idaho", 
      "IL - Illinois", 
      "IN - Indiana", 
      "KS - Kansas", 
      "KY - Kentucky", 
      "LA - Louisiana", 
      "MA - Massachusetts", 
      "MD - Maryland", 
      "ME - Maine", 
      "MI - Michigan", 
      "MN - Minnesota", 
      "MO - Missouri", 
      "MS - Mississippi", 
      "MT - Montana", 
      "NC - North Carolina", 
      "ND - North Dakota", 
      "NE - Nebraska", 
      "NH - New Hampshire", 
      "NJ - New Jersey", 
      "NM - New Mexico", 
      "NV - Nevada", 
      "NY - New York", 
      "OH - Ohio", 
      "OK - Oklahoma", 
      "OR - Oregon", 
      "PA - Pennsylvania", 
      "PR - Puerto Rico", 
      "RI - Rhode Island", 
      "SC - South Carolina", 
      "SD - South Dakota", 
      "TN - Tennessee", 
      "TX - Texas", 
      "UT - Utah", 
      "VA - Virginia", 
      "VI - Virgin Islands", 
      "VT - Vermont", 
      "WA - Washington", 
      "WI - Wisconsin", 
      "WV - West Virginia", 
      "WY - Wyoming"]
    }
  }


  render() {
    return(
      <form>
        <label>First Name:<input type='text'></input></label>
        <label>Last Name:<input type='text'></input></label>
        <label>Email:<input type='text'></input></label>
        <label>Address 1:<input type='text'></input></label>
        <label>Address 2:<input type='text'></input></label>
        <label>City:<input type='text'></input></label>
        <label>State:<select id='stateSelect'>
          {this.state.stateArray.map( (stateName, index) =>
            <option key={index} value={index}>{stateName}</option>
            )}
        </select></label>
        <label>Zip:<input type='number'></input></label>
        <label>Phone #:<input type='number'></input></label>
        <label>Date of Birth:<input type='date'></input></label>
        <label>Gender:<input type='radio' name='gender' value='male' />Male
                      <input type='radio' name='gender'value='female' />Female
                      </label>
        <label>Select Game Type:
          <input type='checkbox' name='fastpitch' value='fast' />Fast Pitch
          <input type='checkbox' name='slowpitch' value='slow' />Slow Pitch
        </label>
        <button type='submit'>Submit</button>
      </form>

    );
  }
}

export default Registration;