import React, { useRef, useState } from 'react';
import '../assets/styles/Contact.scss';
import emailjs from '@emailjs/browser';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import TextField from '@mui/material/TextField';

function Contact() {

  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [message, setMessage] = useState<string>('');
  const [response, setResponse] = useState<string>('');

  const [nameError, setNameError] = useState<boolean>(false);
  const [emailError, setEmailError] = useState<boolean>(false);
  const [messageError, setMessageError] = useState<boolean>(false);

  const form = useRef();

  const sendEmail = (e: any) => {
    e.preventDefault();

    setNameError(name === '');
    setEmailError(email === '');
    setMessageError(message === '');

    //  Non - sensitive: Public Keys
    const publicKey = "U9SdUxmAhEWbZ6v_C"
    const templateKey = "template_y874n8c"
    const serviceKey = "service_isqypr8"

    if (serviceKey === undefined || templateKey === undefined || publicKey === undefined) {
      console.log("Undefined service, template or API key for EmailJS")
      return;
    }

    if (name !== '' && email !== '' && message !== '') {
      var templateParams = {
        name: name,
        email: email,
        message: message
      };

      emailjs.send(serviceKey, templateKey, templateParams, publicKey).then(
        (response) => {
          console.log('SUCCESS!', response.status, response.text);
          setResponse("Thank you! I will get back to you shortly.")
        },
        (error) => {
          console.log('FAILED...', error);
          setResponse("Something went wrong. E-mail me directly using vansh.kanojia@pace.edu.")
        },
      );
      setName('');
      setEmail('');
      setMessage('');
    }
  };

  return (
    <div id="contact">
      <div className="items-container">
        <div className="contact_wrapper">
          <h1>Contact Me</h1>
          <p>Got a project waiting to be realized? Let's collaborate and make it happen!</p>
          {response ? <p>{response}</p> : <p></p>}
          <Box
            ref={form}
            component="form"
            noValidate
            autoComplete="off"
            className='contact-form'
          >
            <div className='form-flex'>
              <TextField
                variant="filled"
                required
                id="outlined-required"
                label="Your Name"
                placeholder="What's your name?"
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                }}
                error={nameError}
                helperText={nameError ? "Please enter your name" : ""}
                style={{ backgroundColor: "white" }}
              />
              <TextField
                required
                id="outlined-required"
                label="Email / Phone"
                placeholder="How can I reach you?"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                error={emailError}
                variant="filled"
                helperText={emailError ? "Please enter your email or phone number" : ""}
                style={{ backgroundColor: "white" }}

              />
            </div>
            <TextField
              required
              id="outlined-multiline-static"
              label="Message"
              placeholder="Send me any inquiries or questions"
              multiline
              rows={10}
              className="body-form"
              value={message}
              onChange={(e) => {
                setMessage(e.target.value);
              }}
              error={messageError}
              helperText={messageError ? "Please enter the message" : ""}
              variant="filled"
              style={{ backgroundColor: "white" }}

            />
            <Button variant="contained" endIcon={<SendIcon />} onClick={sendEmail}>
              Send
            </Button>
          </Box>
        </div>
      </div>
    </div>
  );
}

export default Contact;