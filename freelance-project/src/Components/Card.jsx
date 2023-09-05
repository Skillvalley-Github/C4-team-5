import React from 'react';
import "./Card.css";
import like from "../assets/like.svg";
import love from "../assets/love.svg";

const Card = () => {
    return (
        <div className='container'>
            <div className='title_container'>
                <h2 className='card_title'>Figma to HTML/Tailwind/Versoly</h2>
                <div className='button_container'>
                    <button className='btn'>
                        <img src={like} alt="" srcset="" className='button_img'/>
                    </button>
                    <button className='btn'>
                        <img src={love} alt="" srcset="" className='button_img'/>
                    </button>
                </div>
            </div>

            <div className='time'>Hourly: $5-$20 - Intermediate - Est. Time: More than 6 months, 30+ hrs/week - Posted 1 hour ago</div>
            <p>The goal is to replicate the image below and more sites to https://versoly.com/ as a free template. Versoly is a Tailwind CSS website builder with extra classes to make maintaining websites easier, very similar to Bootstrap but easier to extend. What you will do for the first paid project - Replicate home page (i will send link once job is given) - 2 to 5 hours t</p>
            <div className='skills'>
                <a href="">HTMl</a>
                <a href="">Bootstrap</a>
                <a href="">Skill</a>
            </div>

    
             <p>proposals : <span className='proposal'>15</span> to <span className='proposal'>20</span></p>
            
        </div>
    )
}

export default Card