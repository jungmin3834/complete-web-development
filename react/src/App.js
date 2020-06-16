import React from 'react';
import './css/style.css';
import InputFrame from './InputFrame';
import ImageMap from './imageMap';


class App extends React.Component {

    constructor() {
      super();
    }

  
    render() {
      return (
        <div>
        <div>
              <span>SHAWN</span>
                <ul id="gnb">
                    <li className="on">
                        <img src={ImageMap.US} alt="s"/>
                        <a href="#">
                            <i className="fas fa-chevron-down"></i>
                        </a>
                        <ul>  
                            <li><img alt=""  src={ImageMap.US}/><a href="#" >EN</a></li>
                            <li><img alt=""  src={ImageMap.kr}/><a href="#">KR</a></li>
                        </ul>
                    </li>
                    <li><a href="#">Help</a></li>
                    <li><a href="#">Login</a></li>
                    <li><a href="#" className="btn">SIGN UP</a></li>
                </ul>
        </div>
        <div className="text">
              <h2>THE CLEVER NEW WAY<br></br>TO BEAT BANK FEES</h2>
              <p>Banks charge hidden charges when you send money abroad. With<br/></p>
              <div className="clip">
                  <img alt=""  src={ImageMap.ap_resize} alt="img"/>
                  <a href="#">how does transferwise work?</a>
              </div>
        </div>
         <div className="Mbox">
              <div className="Numbox">
                <InputFrame></InputFrame>
                </div>
                <p>Real exchange rate: <b>1.9889</b> Fee: <b>£ 4.98</b></p>
                <p>you re saving <b>£ 44.50</b></p>
                <button className="bt1">SEE HOW</button>
                <button className="bt2">GET STARTED</button>
            </div>
            <div>
            <div className="bg1"></div>
            <div className="bg2"></div>
            <div className="iconBox">
                <div className="icon">
                    <img alt=""  src={ImageMap.Paul} alt=""/>
                    <p>Sir Richard Branson invested in</p>
                       <a href="#">TransferWise - read why</a>  
                </div>
                <div className="icon">
                    <h3>★★★<b>18535</b>★★★</h3>
                    <em>REVIEWS</em>
                    <p>5 star rating on Trustpilot - See why</p>
                        <a href="#">people love TransferWise.</a>
                </div>
                <div className="icon">
                    <i className="fas fa-shield-alt"></i>
                    <p>Fully authorised by the UK Financial <br></br>
                    Conduct Authority (<a href="#">The FCA</a>)
                    </p>
                        
                </div>
                <div className="icon">
                    <i className="fab fa-skype"></i>
                    <p>From the people who<br/>
                        built Skype</p>
                </div>
            </div>
          </div>
    
        </div>
      );
    }
  }
  
  export default App;