import React, { Component, Fragment } from 'react'

class profile extends Component{
    render(){
        return(
            <Fragment>
                <div className="datadiri">
                    <h1>ABOUT ME</h1>
                    <hr/>
                    <div className="data">
                        <p>Name</p>
                        <p>I Made Indra Mahaarta</p>
                    </div>
                    <div className="data">
                        <p>Date of Birth</p>
                        <p>July 22th, 2001</p>
                    </div>
                    <div className="data">
                        <p>Phone</p>
                        <p>082147474931</p>
                    </div>
                    <div className="data">
                        <p>Email</p>
                        <p>official.indramahaarta@gmail.com</p>
                    </div>
                    <div className="data">
                        <p>Web</p>
                        <p>indramahaarta.com</p>
                    </div>
                    <div className="data">
                        <p>Address</p>
                        <p>Amlapura, Bali, Indonesia</p>
                    </div>
                </div>
                <br/>
                <div className="Education">
                    <h1>EDUCATION</h1>
                    <hr/>
                    <div className="data">
                        <p>2006- 2007</p>
                        <p>TK Lila Kumara</p>
                    </div>
                    <div className="data">
                        <p>2007- 2013</p>
                        <p>SD Negeri 7 Subagan</p>
                    </div>
                    <div className="data">
                        <p>2013- 2016</p>
                        <p>SMP Negeri 2 Amlapura</p>
                    </div>
                    <div className="data">
                        <p>2016- 2019</p>
                        <p>SMA Negeri 2 Amlapura</p>
                    </div>
                    <div className="data">
                        <p>2020- now</p>
                        <p>Universitas Indonesia</p>
                    </div>
                </div>
                <div className="pengalaman">
                    <h3>EXPERIENCE</h3>
                    <hr/>
                    <div className="kolom1">
                        <div className="left">
                            <div className="kotak">
                                <div className='tl'>
                                    <p>Secretary of MPK</p>
                            </div>
                                <div className='tu'>
                                    <p>OSIS&MPK Smandapura 2017</p>
                                </div>    
                            </div>           
                        </div>
                        <div className="left">
                            <div className="kotak">
                                <div className='tl'>
                                    <p>Vice Chairman of OSIS</p>
                            </div>
                                <div className='tu'>
                                    <p>OSIS&MPK Smandapura 2018</p>
                                </div>  
                            </div> 
                        </div>
                        <div className="left">
                            <div className="kotak">
                                <div className='tl'>
                                    <p>Member</p>
                            </div>
                                <div className='tu'>
                                    <p>Sejebag Karangasem 2019</p>
                                </div>  
                            </div> 
                        </div>
                    </div>
                    <div className="kolom2">
                        <div className="left">
                            <div className="kotak">
                                <div className='tl'>
                                    <p>Member</p>
                            </div>
                                <div className='tu'>
                                    <p>Purna Paskibraka Indonesia</p>
                                </div>  
                            </div>                
                        </div>
                        <div className="left">
                            <div className="kotak">
                                <div className='tl'>
                                    <p>Coordinator of Public Relation</p>
                            </div>
                                <div className='tu'>
                                    <p>TOS UI BALI 2021</p>
                                </div>  
                            </div> 
                        </div>
                        <div className="left">
                            <div className="kotak">
                                <p>Staff of Humpub</p>
                                <p>Open House Fasilkom UI 2020</p>
                            </div> 
                        </div>
                    </div>
                </div>
            </Fragment>
        )
    }
}

export default profile