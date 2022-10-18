import React, {useState} from "react";
import emailjs from 'emailjs-com';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const Contact = () =>{
    const [name , setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [emailSent, setEmailSent] = useState('');

    const submit=()=>{
        if(name && email && message){

            const serviceId = 'service_6kx5dkg';
            const templateId = 'template_6dhq2t4';
            const userId = 'mE7nJQQpnEV_yJrvJ';
            const templateParams={
                name,
                email,
                message
            };

            emailjs.send(serviceId,templateId,templateParams,userId)
                .then(response=>console.log(response))
                .then(error=>console.log(error));

            setName('')
            setEmail('')
            setMessage('')
            setEmailSent(true)
        }else{
            alert('Please fill in all the fields.')
        }
    }

    const isValidEmail = email => {
        const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return regex.test(String(email).toLowerCase());
    };

    return(
        <div className="contact-container">
            <div className="contact-links">
                <h3 className="emailusat title">Email us at :</h3>
                contact@squirrelverse.io
            </div>
            <div className="dividerline"></div>
            <div id="textbox">
                <h1 className="title">Send us a message</h1>
                <div className="textbox">
                    <TextField 
                    fullWidth sx={{ width:1}}
                    type="text" 
                    placeholder="Your Name"
                    value={name}
                    onChange={e=> setName(e.target.value)} />
                </div>
                <div className="textbox">
                    <TextField
                    fullWidth sx={{ width:1}}
                    type="email" 
                    placeholder="Your email address"
                    value={email}
                    onChange={e=> setEmail(e.target.value)}/>
                </div>
                <div className="textbox">
                    <TextField 
                    fullWidth sx={{ width:1}}
                    id="outlined-multiline-static"
                    multiline
                    rows={4}
                    placeholder="Your message"
                    value={message}
                    onChange={e=>setMessage(e.target.value)}></TextField>
                </div>
                <Button variant="contained" size="medium" onClick={submit}>Send Message</Button>
                <span className= {emailSent ? null:'invisible'}>Thakyou for your message, we will be in touch in no time!</span>
            </div>
        </div>
    );
};

export default Contact;

