import React, { useState, useEffect } from "react";
import axios from "axios";
import "../styles/form.css";

const Form = ({ isMobile, eventDetails }) => {
  const [isTeam, setIsTeam] = useState(eventDetails.team);
  const [isMember, setIsMember] = useState(2);
  const [nameI, setName] = useState("");
  const [emailI, setEmail] = useState("");
  const [phoneI, setPhone] = useState("");
  const [collegeI, setCollege] = useState("");
  const [teamName, setTeamName] = useState("");

  let member = [
    {
      member_name: "",
      phone_no: "",
      member_email: "",
      college: "",
    },
    {
      member_name: "",
      phone_no: "",
      member_email: "",
      college: "",
    },
    {
      member_name: "",
      phone_no: "",
      member_email: "",
      college: "",
    },
  ];

  // const [formData, setFormData] = useState({
  //     name: '',
  //     phone_no: null,
  //     email: '',
  //     eventName: eventDetails.eventName
  // });

  const memberType = [
    { id: 2, value: "2" },
    { id: 3, value: "3" },
  ];

  const onChange = (e) => {
    const element = e.target.value;
    if (element == 3) {
      setIsMember(3);
    } else {
      setIsMember(2);
    }
  };

  const handleTeamSubmit = (e) => {
    e.preventDefault();
    if (isTeam) {
      console.log({
        eventName: eventDetails.eventName,
        teamName: teamName,
        mem1_Name: member[0].member_name,
        mem1_Contact: member[0].phone_no,
        mem1_email: member[0].member_email,
        mem1_college: member[0].college,
        mem2_Name: member[1].member_name,
        mem2_Contact: member[1].phone_no,
        mem2_email: member[1].member_email,
        mem2_college: member[1].college,
        mem3_Name: member[2].member_name,
        mem3_Contact: member[2].phone_no,
        mem3_email: member[2].member_email,
        mem3_college: member[2].college,
      });
      axios
        .post("http://localhost:8000/teamEvent/", {
          eventName: eventDetails.eventName,
          teamName: teamName,
          mem1_Name: member[0].member_name,
          mem1_Contact: member[0].phone_no,
          mem1_email: member[0].member_email,
          mem1_college: member[0].college,
          mem2_Name: member[1].member_name,
          mem2_Contact: member[1].phone_no,
          mem2_email: member[1].member_email,
          mem2_college: member[1].college,
          mem3_Name: member[2].member_name,
          mem3_Contact: member[2].phone_no,
          mem3_email: member[2].member_email,
          mem3_college: member[2].college,
        })
        .then((res) => {
          console.log("Registered");
          setTeamName("");
        })
        .catch((err) => {
          console.log(err.message);
        });
    }
  }

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
          <form onSubmit={handleTeamSubmit} className="d-flex row justify-content-center">
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
              onChange={(e) => {
                setTeamName(e.target.value)
              }}
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
                  id="mem1_name"
                  placeholder="Name:"
                  onChange={(e) => {
                    // member1.name = e.target.value;
                    member[0].member_name= e.target.value;
                  }}
                />
                <input
                  type="email"
                  className="w-100 form-input pl-3 mt-4"
                  id="mem1_email"
                  placeholder="Email:"
                  onChange={(e) => {
                    member[0].member_email = e.target.value;
                  }}
                />
                <input
                  type="phone"
                  className="w-100 form-input pl-3 mt-4"
                  id="mem1_phone_no"
                  placeholder="Phone no.:"
                  onChange={(e) => {
                    member[0].phone_no = e.target.value;
                  }}
                />
                <input 
                  type="text"
                  className="w-100 form-input pl-3 mt-4"
                  id="mem1_college"
                  placeholder="College:"
                  onChange={(e) => {
                    member[0].college = e.target.value;
                  }}
                />
              </>
            )}
            {isMember > 1 && (
              <>
                <label htmlFor="member2" className="fs-14 mt-5 mb-2">
                  Member 2
                </label>
                <input
                  type="text"
                  className="w-100 form-input pl-3"
                  id="mem2_name"
                  placeholder="Name:"
                  onChange={(e) => {
                    // member1.name = e.target.value;
                    member[1].member_name = e.target.value;
                  }}
                />
                <input
                  type="email"
                  className="w-100 form-input pl-3 mt-4"
                  id="mem2_email"
                  placeholder="Email:"
                  onChange={(e) => {
                    member[1].member_email = e.target.value;
                  }}
                />
                <input
                  type="phone"
                  className="w-100 form-input pl-3 mt-4"
                  id="mem2_phone_no"
                  placeholder="Phone no.:"
                  onChange={(e) => {
                    member[1].phone_no = e.target.value;
                  }}
                />
                <input 
                  type="text"
                  className="w-100 form-input pl-3 mt-4"
                  id="mem2_college"
                  placeholder="College:"
                  onChange={(e) => {
                    member[1].college = e.target.value;
                  }}
                />
              </>
            )}
            {isMember > 2 && (
              <>
                <label htmlFor="member3" className="fs-14 mt-5 mb-2">
                  Member 3
                </label>
                <input
                  type="text"
                  className="w-100 form-input pl-3"
                  id="mem3_name"
                  placeholder="Name:"
                  onChange={(e) => {
                    // member1.name = e.target.value;
                    member[2].member_name = e.target.value;
                  }}
                />
                <input
                  type="email"
                  className="w-100 form-input pl-3 mt-4"
                  id="mem3_email"
                  placeholder="Email:"
                  onChange={(e) => {
                    member[2].member_email = e.target.value;
                  }}
                />
                <input
                  type="phone"
                  className="w-100 form-input pl-3 mt-4"
                  id="mem3_phone_no"
                  placeholder="Phone no.:"
                  onChange={(e) => {
                    member[2].phone_no = e.target.value;
                  }}
                />
                <input 
                  type="text"
                  className="w-100 form-input pl-3 mt-4"
                  id="me31_college"
                  placeholder="College:"
                  onChange={(e) => {
                    member[2].college = e.target.value;
                  }}
                />
              </>
            )}

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
