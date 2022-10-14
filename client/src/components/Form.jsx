import React, { useState, useEffect } from "react";
import axios from "axios";
import "../styles/form.css";

const Form = ({ isMobile, eventDetails }) => {
  const [isTeam, setIsTeam] = useState(eventDetails.team);
  const [isMember, setIsMember] = useState(1);
  const [nameI, setName] = useState("");
  const [emailI, setEmail] = useState("");
  const [phoneI, setPhone] = useState("");
  const [collegeI, setCollege] = useState("");

  // const [formData, setFormData] = useState({
  //     name: '',
  //     phone_no: null,
  //     email: '',
  //     eventName: eventDetails.eventName
  // });

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
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isTeam) {
      console.log({
        name: nameI,
        phone_no: phoneI,
        email: emailI,
        college: collegeI,
        eventName: eventDetails.eventName,
      });
      axios
        .post("http://localhost:8000/singleParticipant/", {
          name: nameI,
          phone_no: phoneI,
          email: emailI,
          college: collegeI,
          eventName: eventDetails.eventName,
        })
        .then((res) => {
          console.log("registered");
          setName("");
          setEmail("");
          setPhone();
          setCollege();
        })
        .catch((err) => {
          console.log(err.message);
        });
    }
  };

  return (
    <div className="d-flex row justify-content-between h-auto">
      <div className={`${isMobile ? "col-12" : "col-6"} px-5 mt-5`}>
        {isTeam === false && (
          <form
            onSubmit={handleSubmit}
            className="d-flex row justify-content-center"
          >
            <input
              type="text"
              className="w-100 form-input pl-3 mt-4"
              id="eventName"
              value={eventDetails.eventName}
              disabled
            />
            <input
              type="text"
              className="w-100 form-input pl-3 mt-4"
              id="name"
              placeholder="Name:"
              onChange={e => setName(e.target.value)}
            />
            <input
              type="email"
              className="w-100 form-input pl-3 mt-4"
              id="email"
              placeholder="Email:"
              onChange={e => setEmail(e.target.value)}
            />
            <input
              type="text"
              className="w-100 form-input pl-3 mt-4"
              id="roll_no"
              placeholder="Roll no.:"
            />
            <input
              type="phone"
              className="w-100 form-input pl-3 mt-4"
              id="phone_no"
              placeholder="Phone no.:"
              onChange={e => setPhone(e.target.value)}
            />
            <input
              type="text"
              className="w-100 form-input pl-3 mt-4"
              id="college"
              placeholder="College:"
              onChange={e => setCollege(e.target.value)}
            />
            <button className="btn form-btn mt-5" type="submit">
              Submit
            </button>
          </form>
        )}
        {isTeam === true && (
          <form action="" className="d-flex row justify-content-center">
            <input
              type="text"
              className="w-100 form-input pl-3 mt-4"
              id="eventName"
              value={eventDetails.eventName}
              disabled
            />
            <input
              type="text"
              className="w-100 form-input pl-3 mt-4"
              id="name"
              placeholder="Team Name:"
            />
            <select
              name="teamMember"
              id="teamMember"
              className="form-input w-100 mt-4 px-3"
              onChange={(e) => onChange(e)}
            >
              <option className="bg-black" value="" disabled>
                Select number of Members
              </option>
              {memberType.map((index) => {
                return (
                  <option
                    value={index.id}
                    className="bg-black p-3"
                    key={index.id + index.value}
                  >
                    {index.value}
                  </option>
                );
              })}
            </select>
            {isMember > 0 && (
              <>
                <label htmlFor="member1" className="fs-14 mt-5 mb-2">
                  Member 1
                </label>
                <input
                  type="text"
                  className="w-100 form-input pl-3"
                  id="name"
                  placeholder="Name:"
                />
                <input
                  type="email"
                  className="w-100 form-input pl-3 mt-4"
                  id="email"
                  placeholder="Email:"
                />
                <input
                  type="phone"
                  className="w-100 form-input pl-3 mt-4"
                  id="phone_no"
                  placeholder="Phone no.:"
                />
              </>
            )}
            {isMember > 1 && (
              <>
                <label htmlFor="member1" className="fs-14 mt-5 mb-2">
                  Member 2
                </label>
                <input
                  type="text"
                  className="w-100 form-input pl-3"
                  id="name"
                  placeholder="Name:"
                />
                <input
                  type="email"
                  className="w-100 form-input pl-3 mt-4"
                  id="email"
                  placeholder="Email:"
                />
                <input
                  type="phone"
                  className="w-100 form-input pl-3 mt-4"
                  id="phone_no"
                  placeholder="Phone no.:"
                />
              </>
            )}
            {isMember > 2 && (
              <>
                <label htmlFor="member1" className="fs-14 mt-5 mb-2">
                  Member 3
                </label>
                <input
                  type="text"
                  className="w-100 form-input pl-3"
                  id="name"
                  placeholder="Name:"
                />
                <input
                  type="email"
                  className="w-100 form-input pl-3 mt-4"
                  id="email"
                  placeholder="Email:"
                />
                <input
                  type="phone"
                  className="w-100 form-input pl-3 mt-4"
                  id="phone_no"
                  placeholder="Phone no.:"
                />
              </>
            )}
            <input
              type="text"
              className="w-100 form-input pl-3 mt-4"
              id="college"
              placeholder="College:"
            />
            <button className="btn form-btn mt-5" type="submit">
              Submit
            </button>
          </form>
        )}
      </div>
      {!isMobile && (
        <img
          src="/assets/images/form.png"
          className="col-6 position-absolute"
          style={{ right: "0", top: "200px" }}
          alt="form_IMG"
        />
      )}
    </div>
  );
};

export default Form;
