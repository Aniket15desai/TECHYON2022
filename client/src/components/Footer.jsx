import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

function Footer() {
  return (
    <div className="footer">
      <Box sx={{ flexGrow: 1, padding: 2}}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={7} >
            <h3 className="about-title">ABOUT TECHYON</h3>
            <p className="about-description">
              Techyon is an inter college technical event held annually at PCCE.
              It hosts various technical events across all the departments.The
              word Techyon was derived from Tachyon which is a hypothetical
              particle with speed more than the speed of the light.
            </p>
          </Grid>
          <Grid item xs={12} sm={5}>
            <h3 className="contact-title">CONTACT US</h3>
            <p className="contact-description">
              Follow us over social media for updates and for any Queries
              contact official techyon email.
            </p>
            <Grid item xs={12} >
                <p className="insta">insta</p>
                <p className="insta">gmail</p>
                <p className="insta">linked</p>
                <p className="insta">maps</p>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}

export default Footer;
