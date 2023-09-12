import React from 'react'
import '../Components/DashBody.css';
import '../Components/Projects.css';
import money from '../SVGs/money.svg';
import bike from '../SVGs/bike.svg';
import tick from '../SVGs/tick.svg';
import timer from '../SVGs/timer.svg';
import timer2 from '../SVGs/timer2.svg';
import abc from '../SVGs/abc.webp'
import img1 from '../SVGs/img1.png'
import img2 from '../SVGs/img2.png'
import wiki from '../SVGs/wiki.png'


export const DashBody = () => {
  return (
    
    <div className='dash'>
        <div className="f d1">
            <div className="f cd1">
                <div className="f logo1">
                <img src={money} alt="" />
                </div>
                <div className="txt1">
                    <div className="tx1">13,343</div>
                    <div className="tx2">This month revenue</div>
                </div>
                <div className="perG">
                    +1.5%
                </div>
            </div>
            <div className="f cd1">
                <div className="f logo1">
                    <img src={tick} alt="" />
                </div>
                <div className="txt1">
                    <div className="tx1">+ 24</div>
                    <div className="tx2">Projects Accepted</div>
                </div>
                <div className="perG perR">
                    -2.4%
                </div>
            </div><div className="f cd1">
                <div className="f logo1">
                    <img src={bike} alt="" />
                </div>
                <div className="txt1">
                    <div className="tx1">95.4%</div>
                    <div className="tx2">Delivered On Time</div>
                </div>
                <div className="perG">
                    +30.5%
                </div>
            </div><div className="f cd1">
                <div className="f logo1">
                    <img src={timer} alt="" />
                </div>
                <div className="txt1">
                    <div className="tx1">4h 3m</div>
                    <div className="tx2">Responded On Time</div>
                </div>
                <div className="perG">
                    -1.5%
                </div>
            </div>
        </div>
        <div className="f bd">
            <div className="f bd2">
                <div className="prHead">Active Projects</div>
                <div className="prs">
                    <div className="f pr">
                        <div className="logo2">
                            <img src={abc} alt="" className='imgInn' />
                        </div>
                        <div className="f tt">
                            <div className="tt1">Homio Website</div>
                            <div className="tt2">5 Tasks</div>
                        </div>
                        <div className="f days">
                            <img src={timer2} alt="" />
                             <div className="indays">3 days</div>
                        </div>
                    </div>
                    <div className="f pr">
                        <div className="logo2">
                            <img src={img1} alt="" className='imgInn' />
                        </div>
                        <div className="f tt">
                            <div className="tt1">Abc Web Backend</div>
                            <div className="tt2">3 Tasks</div>
                        </div>
                        <div className="f days">
                            <img src={timer2} alt="" />
                             <div className="indays">14 days</div>
                        </div>
                    </div>
                    <div className="f pr">
                        <div className="logo2">
                        <img src={img2} alt="" className='imgInn' />

                        </div>
                        <div className="f tt">
                            <div className="tt1">Alpha Website</div>
                            <div className="tt2">5 Tasks</div>
                        </div>
                        <div className="f days">
                            <img src={timer2} alt="" />
                             <div className="indays">34 days</div>
                        </div>
                    </div>
                    <div className="f pr">
                        <div className="logo2">
                        <img src={wiki} alt="" className="imgInn"/>
                        </div>
                        <div className="f tt">
                            <div className="tt1">Wiki Toggles</div>
                            <div className="tt2">5 Tasks</div>
                        </div>
                        <div className="f days">
                            <img src={timer2} alt="" />
                             <div className="indays">4 days</div>
                        </div>
                    </div>
                    <div className="f pr">
                        <div className="logo2">
                        <img src={abc} alt="" className="imgInn"/>
                        </div>
                        <div className="f tt">
                            <div className="tt1">Homio Website</div>
                            <div className="tt2">5 Tasks</div>
                        </div>
                        <div className="f days">
                            <img src={timer2} alt="" />
                             <div className="indays">4 days</div>
                        </div>
                    </div>
                    <div className="f pr">
                        <div className="logo2">
                        <img src={abc} alt="" className="imgInn"/>
                        </div>
                        <div className="f tt">
                            <div className="tt1">LanWan Website</div>
                            <div className="tt2">5 Tasks</div>
                        </div>
                        <div className="f days">
                            <img src={timer2} alt="" />
                             <div className="indays">4 days</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="f bd1">Space for graph</div>
        </div>
    </div>
  )
}
