import React from 'react'
import '../styles/about.css';

function About() {
    return (
        <div className='d-flex row justify-content-center position-relative mt-5 py-2'>
            {/* team info and FAQ will go here */}
            <div className='ellipse w-100'>
                <div className="d-flex row justify-content-center align-items-center m-0 p-0 my-4">
                    <hr className='w-15' />
                    <div className="fs-24 w-25 text-center">
                        TEAM
                    </div>
                    <hr className='w-15' />
                </div>
            </div>
            <div className='position-relative text-center w-100'><div className="d-flex row justify-content-center align-items-center m-0 p-0 my-5">
                <hr className='w-15' />
                <div className="fs-24 w-25 text-center">
                    Developer
                </div>
                <hr className='w-15' />
            </div></div>
            <div className='position-relative text-center w-100'><div className="d-flex row justify-content-center align-items-center m-0 p-0 my-5">
                <hr className='w-15' />
                <div className="fs-24 w-25 text-center">
                    Developer
                </div>
                <hr className='w-15' />
            </div></div>
            <div className='position-relative text-center w-100'><div className="d-flex row justify-content-center align-items-center m-0 p-0 my-5">
                <hr className='w-15' />
                <div className="fs-24 w-25 text-center">
                    Developer
                </div>
                <hr className='w-15' />
            </div></div>

        </div>
    )
}

export default About
