import Box from "@mui/material/Box";
import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { eventList } from '../utils/utils';

function Event() {
    const [event, setEvent ] = useState({
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
                phone: "9766055610"
            },
            {
                name: "K L Rithika",
                phone: "8390629943"
            }
        ],
        rules: {
            Rules: [
                "The contest shall consist of solving a series of challenges to reach the goal.",
                "The contest will mainly deal with computer-based puzzles and tasks. Your knowledge of Computers, the internet (latest happenings around the world) and related technical and Non-technical stuff will be put to the test."
            ],
            round1_rules: [
                "1 Student/participant.",
                "25 MCQ/Questions to be answered in 60min.",
                "The first one to successfully reach the goal, completing all challenges will qualify for round 2.",
                "Internet access is allowed."
            ],
            round2_rules: [
                "1 Student/participant.",
                "15 Questions to be answered in 45min.",
                "The first one to successfully reach the goal, completing all challenges will be declared the winner.- In case of a Tie there will be a Tie breaker Question.",
                "Internet access is allowed.",
                "Platform- Google Forms"
            ],
            FAQs: [
                "1. Who can participate? <br/> Ans - Any student from Padre Conceicao College of Engineering irrespective of their department can participate. ",
                "2. Is there a registration fee? <br/> Ans - No registration fee",
                "3. What should you have? <br/> Ans - A PC/Laptop with internet access and preferably Google Chrome browser installed.",
                "Decision taken by Co-Ordinators will be final in case any discrepancies!"
            ]
        },
        prize: [
            1500,
            500
        ],
        form: "https://forms.gle/NpJYvGRYX2mfiPPv5",
        poster: "/assets/images/posters/comp/decrypt.jpg",
        rulebook: "../rulebook/COMP/decrypt.pdf",
        image: '/assets/images/thumbnail/rpa.png'
    });
    const { id } = useParams();

    useEffect(() => {
        setEvent(eventList.filter((eventItem) => eventItem.id == id));
        console.log(event);
      }, [id]);

    return (
        <div>
            <Box>
                <Box className="poster-container">
                    <img src={event.image} alt="" />
                </Box>
            </Box>
        </div>
    )
}

export default Event
