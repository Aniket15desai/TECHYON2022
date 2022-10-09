// single participation model
import mongooseSerial from "mongoose-serial"
import mongoose from "mongoose";
import nodemailer from 'nodemailer';

const SingleParticipantSchema =  mongoose.Schema({
  participantNo:{type:String},
  name: { type: String, required: true },
  phone_no: { type: Number, required: true, unique: true },
  email: { type: String, required: true , lowercase:true},
  roll_no:String,
  college: String,
  branch: String,
  score: String,
  eventName:String
},
{
  timestamps: true 
});
SingleParticipantSchema.plugin(mongooseSerial, { field:"participantNo",digits:1});

let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: 'techyon2022@gmail.com', // generated ethereal user
      pass: 'neawvayddesktqzs', // generated ethereal password
    },
  });


SingleParticipantSchema.methods.sendmail = async function () {
  let info = await transporter.sendMail({
        from: 'techyon2022@gmail.com', // sender address
        to: this.email, // list of receivers
        subject: "TECHYON 2022", // Subject line
        text: ` Thanks for registering ${this.eventName} Techyon 2022 `, // plain text body
        // html body
      });

      console.log("Message sent: %s", info.messageId);

}
export const Photography= mongoose.model('Photography', SingleParticipantSchema);
export const RoboWars= mongoose.model('RoboWars', SingleParticipantSchema);

