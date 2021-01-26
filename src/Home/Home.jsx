import React, { Component} from 'react';
import {BrowserRouter, Route, Link} from 'react-router-dom';
import contact from '../Menu/contact';
import opening from '../Menu/opening';
import portofolio from '../Menu/portofolio';
import profile from '../Menu/profile';
import skills from '../Menu/skills';
import './Home.css';

class Home extends Component{
    render(){
        return(
            <BrowserRouter>
                <div className="body">
                    <div className="box">
                        <div className="left-content">
                            <div className="fotoprofile"></div>
                            <div className="medsos">
                                <div className="sosmed">
                                   <ul>
                                       <a className='ig' href='https://www.instagram.com/indramahaarta/'><img src='https://i.ibb.co/XsQ7k4B/580b57fcd9996e24bc43c521.png' alt="instagram"></img></a>
                                       <a href="https://twitter.com/Indramahaarta_"><img src='https://i.postimg.cc/zXKNg5MS/5a2fe3efcc45e43754640848.png' alt="twitter"></img></a>
                                       <a href='https://web.facebook.com/indra.mahaarta/'><img src='https://i.postimg.cc/DwngPdCp/584ac2d03ac3a570f94a666d.png' alt="facebook"></img>
                                       </a>
                                       <a href='https://api.whatsapp.com/send?phone=6282147474931'><img src='https://i.postimg.cc/M6gr9Ctw/580b57fcd9996e24bc43c543.png' alt="whatsapp"></img>
                                       </a>
                                    </ul> 
                                </div>
                            </div>
                        </div>
                        <div className="right-content">
                            <div className="header">
                                <ul>
                                    <li><Link to="/">HOME</Link></li>
                                    <li><Link to="/Profile">PROFILE</Link></li>
                                    <li><Link to="/Skill">SKILL</Link></li>
                                    <li><Link to="/Portofolio">PORTOFOLIO</Link></li>
                                    <li><Link to="/Contact">CONTACT</Link></li>
                                </ul>
                            </div>
                            <div className="contentku">
                                <div className="dalemkonten">
                                    <Route path='/' exact component={opening}/>
                                    <Route path='/Profile' component={profile}/>
                                    <Route path='/Skill' component={skills}/>
                                    <Route path='/Portofolio' component={portofolio} />
                                    <Route path='/Contact' component={contact} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </BrowserRouter>
        )
    }
}

export default Home