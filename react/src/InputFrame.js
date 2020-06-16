import React from 'react';
import ImageMap from './imageMap'


const countrylist = [{
    name : "USD",
    path: ImageMap.US
  },
  {
    name : "KRW",
    path: ImageMap.kr
  },
  {
    name : "GDP",
    path: ImageMap.en
  },
  {
    name : "CAD",
    path: ImageMap.ca
  },
  {
    name : "TWD",
    path: ImageMap.TW
  },
  {
    name : "HKD",
    path: ImageMap.hk
  },];

class Rejection extends React.Component {
  constructor(props) {
    super(props);
    this.state = { userInputA:"", userInputB:"", country : countrylist };
  }

  render() {
    let countrys = this.state.country
          .map((country, i) => {
            return (
                <li onClick={()=>{}}>
                    <img alt=""  src={country.path}/>
                    <span>{country.name}</span>
                 </li>
            );
          });


    return (  
      <div>
      <div className="t1">
      <p>You're sending exactly</p>
      <input type="text" onChange={(e)=>{this.setState({unserInputA :e.target.value})}} className="userInput"/>
      </div>
      <div className="b1">
      <img alt=""  src={ImageMap.en}/>
      <span>GDP</span>
      <i className="fas fa-chevron-down"></i>
      <ul>{countrys}</ul>
      </div>
      <div className="t2">
      <p>Recipient gets</p>
      <input type="text" onChange={(e)=>{this.setState({unserInputB:e.target.value})}} className="userInput"/>
      <i className="fas fa-unlock"></i>
      </div>
      <div className="b2">
      <img alt=""  src={ImageMap.ca}/>
      <span>CAD</span>
      <i className="fas fa-chevron-down"></i>
      <ul>{countrys}</ul>
      </div> 
      </div>
    );
  }
}

export default Rejection;