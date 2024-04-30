import React from 'react';
import './Home.css';
import meta from '../../../assets/img/meta.jpeg';
import { AiOutlineWhatsApp } from 'react-icons/ai';
import Cources from '../Cources/Cources';
import Community from '../Community/Community';
import Plans from '../plans/Plans';

function Home(){
    const handleClick = () =>{
        window.open('https://www.Google.com')
    }
    return( 
        <>
    <section>
        <div className='container'>
            <div className='Home_container'>
                <div className='Home_content'>
                    <h2 className='section-title'>Learn every thing for free..!!</h2>
                    <p>Master Tranding Technology with techflix AI ,invest your time and return skills </p>
                    <div className='home-btns'>

                        <button className='register-btn' onClick={handleClick}>Get Started</button>
                        <button className='register-btn' onClick={handleClick}>Watch Now</button>

                    </div>
                </div>
                <div className='home-img'>
                    <div className='home-img-wrapper'>
                        <div className='Box-01'>
                            <div className='box-img'>
                                <img src={meta} alt='' />

                            </div>
                            <div className='whatsapp-container'>
                                <h5>500 + students</h5>
                                < AiOutlineWhatsApp color='green'/>
                            </div>
                            <div className='support'>
                                <h5>Active Support</h5>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>

    </section>
    <Cources/>
    <Community/>
    <Plans/>
    </>
  )
}

export default Home