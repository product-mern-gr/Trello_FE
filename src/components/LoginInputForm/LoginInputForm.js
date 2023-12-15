import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import './LoginInputForm.scss'

function LoginInputForm(props) {
  const { isRegistrationPage } = props
  const [validated, setValidated] = useState(false)
  const [isEmailDone, setIsEmailDone] = useState(false)

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    console.log(event.currentTarget)
    console.log(document.getElementById('validationCustom02'))
    if (form.checkValidity() === false || event.key === 'Enter') {
      event.preventDefault();
      event.stopPropagation();
    }
    if (document.getElementById('validationCustom02') === null) {
      const email = document.getElementById('validationCustom01').value
      if (email !== '' && isEmailAddress(email) !== null) {
        setIsEmailDone(true)
      } else {
        setIsEmailDone(false)
      } 
      event.preventDefault();
      event.stopPropagation();
    }
    setValidated(true);
  };
  const isEmailAddress = (str) => {
    const pattern = "^[a-zA-Z0-9]+(?:\.[a-zA-Z0-9]+)*@[a-zA-Z0-9]+(?:\.[a-zA-Z0-9]+)*$"
    const result = str.match(pattern)
    return result
  }

  return (
    <div>
      <Form className='login__inputForm' noValidate validated={validated} onSubmit={handleSubmit} >
        <Form.Group as={Col} md="4" controlId="validationCustom01" className='inputForm__input'>
          <Form.Control 
            required
            type="email"
            placeholder="Email..."
            defaultValue=""
          />
          {/* <Form.Control.Feedback>Looks good!</Form.Control.Feedback> */}
        </Form.Group>
        { isEmailDone && 
            <Form.Group as={Col} md="4" controlId="validationCustom02" className='inputForm__input'>
              <Form.Control
                required
                type="password"
                placeholder="Password..."
                defaultValue=""
              />
              {/* <Form.Control.Feedback>Looks good!</Form.Control.Feedback> */}
            </Form.Group> 
        }
        { isRegistrationPage && 
          <div className='registrationContent'>
            By signing up, I accept the Atlassian  
            <a href='google.com'> Cloud Terms of Service </a>
            and acknowledge the <a href='google.com'>Privacy Policy</a>.
          </div>
        }
        { !isEmailDone && 
          <Button className='inputForm_submitBtn' type='submit' >Continue</Button>
        }
        { isEmailDone && 
          <Button className='inputForm_submitBtn' type="submit">Log in</Button>
        }
      </Form>
    </div>
  );
}

export default LoginInputForm;