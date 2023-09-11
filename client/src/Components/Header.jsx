import React from 'react'
import '../Components/Header.css'
import bell from '../SVGs/bell.svg'
import arrow from '../SVGs/arrow.svg'
import search from '../SVGs/search.svg'

export const Header = (props) => {
  return ( 
        <div className="head">
            <div className="b1">
                <div className="name">Hi {props.name}</div>
                <div className="overview">This is your Freelancer Team {props.overview} overview</div>
            </div>
            <div className="b2 f">
                <input type="text" placeholder='Type to search'/>
                <img src={search} alt="" />
            </div>
            <div className="b3">
                <img src={bell} alt="" />
            </div>
            <div className="b4 f">
                <div className="i1"></div>
                <div className="name2">{props.name}</div>
                <img src={arrow} alt="" />
            </div>
        </div>
    )
}
