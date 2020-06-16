import React from 'react';
import ImageMap from './imageMap'


const countrylist = {
  USD:{
    name : "USD",
    path: ImageMap.US
  },
  KRW:{
    name : "KRW",
    path: ImageMap.kr
  },
  GDP:{
    name : "GDP",
    path: ImageMap.en
  },
  CAD:{
    name : "CAD",
    path: ImageMap.ca
  },
  TWD:{
    name : "TWD",
    path: ImageMap.TW
  },
  HKD:{
    name : "HKD",
    path: ImageMap.hk
  },};

class Rejection extends React.Component {
  constructor(props) {
    super(props);
    var currnetDataA = { name: countrylist.USD.name, path:countrylist.USD.path};
    var currnetDataB = { name: countrylist.KRW.name, path:countrylist.KRW.path};
    this.state = {currnetDataA:currnetDataA, currnetDataB: currnetDataB ,userInputA:"",userInputB:"", country : countrylist};
  }

   changeDataA = (name) =>{ this.setState({currnetDataA: { name: countrylist[name].name, path:countrylist[name].path} }); }

   changeDataB = (name) =>{ this.setState({currnetDataB: { name: countrylist[name].name, path:countrylist[name].path} }); }

  getCountryList = (event) =>{
    var data = [];
    Object.keys(countrylist).forEach(function(key) {
      var country = countrylist[key];
      data.push(
      <li onClick={()=>{event(country.name)}}>
        <img alt=""  src={country.path}/>
        <span>{country.name}</span>
      </li>
      );
    });
    return data;
  }

  render() {
    return (  
      <div>
      <div className="t1">
      <p>You're sending exactly</p>
      <input type="text" onChange={(e)=>{this.setState({userInputA :e.target.value});}} className="userInput"/>
      </div>
      <div className="b1">
        <img alt=""  src={this.state.currnetDataA.path}/>
        <span >{this.state.currnetDataA.name}</span>
        <i className="fas fa-chevron-down"></i>
        <ul>{this.getCountryList(this.changeDataA)}</ul>
      </div>
      <div className="t2">
      <p>Recipient gets</p>
      <input type="text" onChange={(e)=>{this.setState({userInputA:e.target.value})}} className="userInput"/>
      <i className="fas fa-unlock"></i>
      </div>
      <div className="b2">
        <img alt=""  src={this.state.currnetDataB.path}/>
        <span>{this.state.currnetDataB.name }</span>
      <i className="fas fa-chevron-down"></i>
      <ul>{this.getCountryList(this.changeDataB)}</ul>
      </div> 
      </div>
    );
  }
}

export default Rejection;