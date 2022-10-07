import Box from "@mui/material/Box";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { eventList } from "../utils/utils";
import "../styles/event.css";

function Event() {
  const [event, setEvent] = useState({
    id: 1,
    event: "Decrypt",
    department: "Computer Department",
    categories: ["NATIONAL", "COMP"],
    type: "Intra",
    location: "Online",
    date: "7th OCT",
    time: "11 AM",
    event_coordinators: [
      {
        name: "Vishrut Mangoli",
        phone: "9766055610",
      },
      {
        name: "K L Rithika",
        phone: "8390629943",
      },
    ],
    rules: {
      Rules: [
        "The contest shall consist of solving a series of challenges to reach the goal.",
        "The contest will mainly deal with computer-based puzzles and tasks. Your knowledge of Computers, the internet (latest happenings around the world) and related technical and Non-technical stuff will be put to the test.",
      ],
      round1_rules: [
        "1 Student/participant.",
        "25 MCQ/Questions to be answered in 60min.",
        "The first one to successfully reach the goal, completing all challenges will qualify for round 2.",
        "Internet access is allowed.",
      ],
      round2_rules: [
        "1 Student/participant.",
        "15 Questions to be answered in 45min.",
        "The first one to successfully reach the goal, completing all challenges will be declared the winner.- In case of a Tie there will be a Tie breaker Question.",
        "Internet access is allowed.",
        "Platform- Google Forms",
      ],
      FAQs: [
        "1. Who can participate? <br/> Ans - Any student from Padre Conceicao College of Engineering irrespective of their department can participate. ",
        "2. Is there a registration fee? <br/> Ans - No registration fee",
        "3. What should you have? <br/> Ans - A PC/Laptop with internet access and preferably Google Chrome browser installed.",
        "Decision taken by Co-Ordinators will be final in case any discrepancies!",
      ],
    },
    prize: [1500, 500],
    form: "https://forms.gle/NpJYvGRYX2mfiPPv5",
    poster: "/assets/images/thumbnail/rpa.png",
    rulebook: "../rulebook/COMP/decrypt.pdf",
    image: "/assets/images/thumbnail/rpa.png",
  });
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    let filteredEvent = eventList.filter((eventItem) => eventItem.id == id)[0];
    setEvent({ ...filteredEvent });
  }, [id]);

  return (
    <div className="event-page-container container">
      <div className="d-flex row justify-content-center align-items-center m-0 p-0 my-5">
        <hr className="w-15" />
        <div className="fs-24 w-25 text-center">{event.event}</div>
        <hr className="w-15" />
      </div>
      <Box
        sx={{ display: { md: "flex" }, gap: " 5vw" }}
        className="event-container"
      >
        <Box sx={{ maxWidth: { md: "40%" } }} className="poster-container">
          <img src={event.poster} alt="" />
        </Box>
        <Box className="details-container">
          <p>Department: {event.department}</p>
          <p>Type: {event.type}</p>
          <p>Date: {event.date}</p>
          <p>Time: {event.time}</p>
          <p>Location: {event.location}</p>
          <button
            onClick={() => navigate(`/registration/${id}`)}
            className="btn form-btn px-5"
          >
            REGISTER
          </button>
          <h3 className="my-3">Instruction: </h3>
          {Object.keys(event.rules).map((key, index) => {
            return (
              <Box key={index}>
                <h4>{key}</h4>
                <ul className="rule-list">
                  {event.rules[key].map((rule, keyIndex) => (
                    <li key={keyIndex}>{rule}</li>
                  ))}
                </ul>
              </Box>
            );
          })}
        </Box>
      </Box>
    </div>
  );
}

export default Event;
