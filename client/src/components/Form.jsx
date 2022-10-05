import React, { useState } from "react";
import '../styles/form.css';

const Form = (props) => {

    const [isEvent, setIsEvent] = useState('singleEvent')
    const [isMember, setIsMember] = useState(1);
    const memberType = [
        { id: 1, value: "1" },
        { id: 2, value: "2" },
        { id: 3, value: "3" },
    ];
    

    const onChange = (e) => {
        const element = e.target.value;
        if (element == 2) {
            setIsMember(2);
        } else if (element == 3) {
            setIsMember(3);
        } else {
            setIsMember(1);
        }
    }

    return (
        <div className="d-flex row justify-content-between h-auto">
            <div className={`${props.isMobile ? 'col-12': 'col-6'} px-5 mt-5`}>
                {isEvent === 'singleEvent' && 
                    <form action="" className="d-flex row justify-content-center">
                        <input type="text" className="w-100 form-input pl-3 mt-4" id="name" placeholder="Name:" />
                        <input type="email" className="w-100 form-input pl-3 mt-4" id="email" placeholder="Email:" />
                        <input type="text" className="w-100 form-input pl-3 mt-4" id="roll_no" placeholder="Roll no.:" />
                        <input type="phone" className="w-100 form-input pl-3 mt-4" id="phone_no" placeholder="Phone no.:" />
                        <input type="text" className="w-100 form-input pl-3 mt-4" id="college" placeholder="College:" />
                        <button className="btn form-btn mt-5" type="submit">Submit</button>
                    </form>
                }
                {isEvent === 'teamEvent' && 
                    <form action="" className="d-flex row justify-content-center">
                        <input type="text" className="w-100 form-input pl-3 mt-4" id="name" placeholder="Team Name:" />
                        
                        <select name="teamMember" id="teamMember" className="form-input w-100 mt-4 pl-3" onChange={e => onChange(e)}>
                            <option className="bg-black" value="" disabled>Select number of Members</option>
                            {memberType.map((index) => {
                                return (
                                    <option value={index.id} className="bg-black p-3" key={index.id + index.value}>{index.value}</option>
                                )
                            })}
                        </select>
                        {isMember > 0 &&
                            <>
                                <label htmlFor="member1" className="fs-14 mt-5 mb-2">Member 1</label>
                                <input type="text" className="w-100 form-input pl-3" id="name" placeholder="Name:" /> 
                                <input type="email" className="w-100 form-input pl-3 mt-4" id="email" placeholder="Email:" />
                                <input type="phone" className="w-100 form-input pl-3 mt-4" id="phone_no" placeholder="Phone no.:" />
                            </>
                        }
                        {isMember > 1 &&
                            <>
                                <label htmlFor="member1" className="fs-14 mt-5 mb-2">Member 2</label>
                                <input type="text" className="w-100 form-input pl-3" id="name" placeholder="Name:" /> 
                                <input type="email" className="w-100 form-input pl-3 mt-4" id="email" placeholder="Email:" />
                                <input type="phone" className="w-100 form-input pl-3 mt-4" id="phone_no" placeholder="Phone no.:" />
                            </>
                        }
                        {isMember > 2 &&
                            <>
                                <label htmlFor="member1" className="fs-14 mt-5 mb-2">Member 3</label>
                                <input type="text" className="w-100 form-input pl-3" id="name" placeholder="Name:" /> 
                                <input type="email" className="w-100 form-input pl-3 mt-4" id="email" placeholder="Email:" />
                                <input type="phone" className="w-100 form-input pl-3 mt-4" id="phone_no" placeholder="Phone no.:" />
                            </>
                        }
                        <input type="text" className="w-100 form-input pl-3 mt-4" id="college" placeholder="College:" />
                        <button className="btn form-btn mt-5" type="submit">Submit</button>
                    </form>
                }
            </div>
            {!props.isMobile &&
                <img src="/assets/images/form.png" className="col-6 position-absolute" style={{ right: '0', top: '200px' }} alt="form_IMG" />
            }
        </div>
    )
}

export default Form;
