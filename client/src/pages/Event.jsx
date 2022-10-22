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
      <div className="background-pattern">
        <div className="event-page-container container">
          <div className="d-flex row justify-content-center align-items-center m-0 p-0 my-5">
            <hr className="w-15" />
            <div className="fs-24 w-25 text-center w-wrap">{event.eventName}</div>
            <hr className="w-15" />
          </div>
          <Box
            sx={{ display: { md: "flex" }, gap: " 5vw", py: "2rem" }}
            className="event-container"
          >
            <Box sx={{ maxWidth: { md: "40%" } }} className="poster-container">
              <img src={event.poster} alt="" />
            </Box>
            <Box className="details-container mt-4">
              <p><span className="heading">Department</span>: {event.department}</p>
              <p><span className="heading">Type</span>: {event.type}</p>
              <p><span className="heading">Date</span>: {event.date}</p>
              <p><span className="heading">Time</span>: {event.time}</p>
              <p><span className="heading">Location</span>: {event.location}</p>
              <a
                href={event.form} rel="noreferrer" target="_blank"
                className="btn form-btn px-5"
              >
                REGISTER
              </a>

              {/* prize */}

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

              <h4 className="rule-title">Coordinator</h4>
              {event.event_coordinators.map((coordinator, index) => (
                <p>
                  
                  <a href={`https://wa.me/${coordinator.phone}`} rel="noreferrer" target="_blank">
                    <img
                      src="/assets/images/socials/whatsapp.png"
                      alt="whatsapp"
                      className="wa-icon mx-3"
                    />
                  </a>
                  {coordinator.name}
                </p>
              ))}
            </Box>
          </Box>
        </div>
      </div>
    );
  else return <h3>Loading..</h3>;
}

export default Event;
