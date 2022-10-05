import React, { useEffect, useState } from 'react';
import '../styles/hero.css';

function Hero() {
    const [isMobile, setIsMobile] = useState(false);
    useEffect(() => {
        if (window) {
            if (window.matchMedia("(max-width: 500px)").matches) {
              setIsMobile(true);
            } else {
              setIsMobile(false);
            }
        } 
    })
    return (
        <>
            <div className={`${isMobile ? '' : 'vh-100'} hero-bg d-flex row align-items-center m-0 p-0 w-100 mb-5`}>
                <div className={`${isMobile ? 'col-12 mt-5':'col-6 row justify-content-center'} p-0 m-0`}>
                    <div className={`${isMobile ? 'col-12 p-4':'col-6'} p-0 m-0`}>
                        <h1 className={`${isMobile ? 'fs-38' : 'fs-48'} hero-text`}>Our Very Own <span style={{ color: '#ED0E29'}}>Tech Event</span> Is Here !!!!</h1>
                        <h6 className={`${isMobile ? 'fs-18' : 'fs-28'} hero-date mt-4`}>27th OCT - 30th OCT</h6>
                        <button className='btn btn-custom mt-4 py-2 px-3'>Schedule</button>
                    </div>
                </div>
                <div className={`${isMobile ? 'col-12':'col-6'} p-0 m-0`}>
                    <img className={`${isMobile ? 'my-n7' : ''} cursor-pointer hero-img w-100`} src="/assets/images/hero.svg" alt="header_image" />
                    <h3 className={`${isMobile ? 'fs-14':'fs-20'} college-text text-center`}>PCCE GOA ANNUAL TECHNICAL COLLEGE FEST</h3>
                </div>
            </div>
            {isMobile && 
                (
                    <div className="position-relative w-100" style={{height: '106px'}}>
                        <img src="/assets/images/wave2.svg" alt="" className="position-absolute h-100" />
                        <img src="/assets/images/wave.svg" alt="" className="position-absolute pb-3 h-100 opacity-0" />
                    </div>
                )
            }
        </>
    )
}

export default Hero;