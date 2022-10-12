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
            <div className={`${isMobile ? '' : 'vh-100'} hero-bg d-flex row align-items-center m-0 p-0 w-100 mb-4`}>
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
            {/* <svg width="100%" height="115" preserveAspectRatio="none" viewBox="0 0 427 115" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 29.9574C0 107.496 369.664 55.4702 427 115H104.871H0C0 115 0 -47.5814 0 29.9574Z" fill="url(#paint0_linear_0_1)"/>
                <path d="M0 20.9574C0 98.4963 369.664 46.4701 427 106H104.871H0C0 106 0 -56.5814 0 20.9574Z" fill="url(#paint1_linear_0_1)"/>
                <defs>
                    <linearGradient id="paint0_linear_0_1" x1="213.5" y1="9.00003" x2="213.5" y2="115" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#ED0E29"/>
                        <stop offset="1" stop-color="#ED0E29" stop-opacity="0"/>
                    </linearGradient>
                    <linearGradient id="paint1_linear_0_1" x1="213.5" y1="0" x2="213.5" y2="106" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#ED0E29"/>
                        <stop offset="1" stop-color="#ED0E29" stop-opacity="0"/>
                    </linearGradient>
                </defs>
            </svg> */}
        </>
    )
}

export default Hero;