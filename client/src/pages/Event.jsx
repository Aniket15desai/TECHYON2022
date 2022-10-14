import Box from "@mui/material/Box";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { eventList } from "../utils/utils";
import "../styles/event.css";

function Event() {
  const [event, setEvent] = useState();
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    let filteredEvent = eventList.filter((eventItem) => eventItem.id == id)[0];
    setEvent({ ...filteredEvent });
  }, [id]);

  if (event)
    return (
      <div className="event-page-container container">
        <div className="d-flex row justify-content-center align-items-center m-0 p-0 my-5">
          <hr className="w-15" />
          <div className="fs-24 w-25 text-center">{event.eventName}</div>
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
              onClick={() => navigate(`/registration/${id}`, { state: {
                id: event.id, 
                eventName: event.eventName,
                team: event.team
              }})}
              className="btn form-btn px-5"
            >
              REGISTER
            </button>
            <h3 className="my-3">Instruction: </h3>
            {Object.keys(event.rules).map((key, index) => {
              return (
                <Box key={index}>
                  <h4 className="rule-title">{key}</h4>
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
  else return <h3>Loading..</h3>;
}

export default Event;
