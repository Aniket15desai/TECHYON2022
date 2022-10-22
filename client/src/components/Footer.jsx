import Box from "@mui/material/Box";
import "../styles/footer.css";

function Footer() {
  return (
    <div className="footer-container">
      <svg width="100%" height="106" viewBox="0 0 427 106" preserveAspectRatio="none" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M0 20.9574C0 98.4963 369.664 46.4701 427 106H104.871H0C0 106 0 -56.5814 0 20.9574Z" fill="url(#paint0_linear_57_259)"/> <defs> <linearGradient id="paint0_linear_57_259" x1="213.5" y1="0" x2="213.5" y2="106" gradientUnits="userSpaceOnUse"> <stop stop-color="#00000000"/> <stop offset="1" stop-color="#6147c6" stop-opacity="1"/> </linearGradient> </defs> </svg>
      <Box sx={{ display: { sm: "flex" } }} className="footer">
        <Box sx ={{width: {sm: '50%'}, p: 2}} className="about">
          <h3 className="about-title">ABOUT TECHYON</h3>
          <p className="about-description">
            Techyon is an inter college technical event held annually at PCCE.
            It hosts various technical events across all the departments.The
            word Techyon was derived from Tachyon which is a hypothetical
            particle with speed more than the speed of the light.
          </p>
        </Box>
        <Box sx ={{width: {sm: '50%'}, p: 2, margin: 0}} className="contact">
          <h3 className="contact-title">CONTACT US</h3>
          <p className="contact-description">
            Follow us over social media for updates and for any Queries contact
            official techyon email.
          </p>
          <Box sx={{display: 'flex'}} className="social-items">
            <a href="mailto:techyon2022@gmail.com" target="_blank" rel="noopener noreferrer">
            <img
              src="/assets/images/socials/gmail.png"
              alt="gmail"
              className="social-icon"
            />
            </a>

            <a href="https://www.instagram.com/pccetechyon/" target="_blank" rel="noopener noreferrer">
            <img
              src="/assets/images/socials/instagram.png"
              alt="instagram"
              className="social-icon"
            />
            </a>

            <a href="https://in.linkedin.com/school/pccegoaofficialpage/" target="_blank" rel="noopener noreferrer">
            <img
              src="/assets/images/socials/linkedin.png"
              alt="linkedin"
              className="social-icon"
            />
            </a>
            <a href="https://www.google.com/maps/place/Padre+Conceicao+College+of+Engineering/@15.3269589,73.9313833,17z/data=!3m1!4b1!4m5!3m4!1s0x3bbfb6d4f1f6451d:0x5aa42df33ac41f6!8m2!3d15.3269589!4d73.933572" target="_blank" rel="noopener noreferrer">
            <img
              src="/assets/images/socials/map.png"
              alt="map"
              className="social-icon"
            />
            </a>
          </Box>
        </Box>
      </Box>
    </div>
  );
}

export default Footer;
