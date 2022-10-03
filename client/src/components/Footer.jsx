import Box from "@mui/material/Box";
import "../styles/footer.css";

function Footer() {
  return (
    <div className="footer">
      <Box sx={{ display: { sm: "flex" } }}>
        <Box sx ={{width: {sm: '50%'}, p: 2}} className="about">
          <h3 className="about-title">ABOUT TECHYON</h3>
          <p className="about-description">
            Techyon is an inter college technical event held annually at PCCE.
            It hosts various technical events across all the departments.The
            word Techyon was derived from Tachyon which is a hypothetical
            particle with speed more than the speed of the light.
          </p>
        </Box>
        <Box sx ={{width: {sm: '50%'}, p: 2}} className="contact">
          <h3 className="contact-title">CONTACT US</h3>
          <p className="contact-description">
            Follow us over social media for updates and for any Queries contact
            official techyon email.
          </p>
          <Box sx={{display: 'flex'}} className="social-items">
            <img
              src="/assets/images/socials/gmail.png"
              alt="gmail"
              className="social-icon"
            />
            <img
              src="/assets/images/socials/instagram.png"
              alt="instagram"
              className="social-icon"
            />
            <img
              src="/assets/images/socials/linkedin.png"
              alt="linkedin"
              className="social-icon"
            />
            <img
              src="/assets/images/socials/map.png"
              alt="map"
              className="social-icon"
            />
          </Box>
        </Box>
      </Box>
    </div>
  );
}

export default Footer;
