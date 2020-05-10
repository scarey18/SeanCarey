import React, { useState } from "react"
import styled from "styled-components"
import { darken } from "polished"
import PropTypes from "prop-types"
import fetch from 'unfetch'
import { FaEnvelope } from 'react-icons/fa'

import P from '../utils/palette'


const Form = styled.form`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-wrap: wrap;
  border-radius: 20px;

	p {
		margin: 20px 1% 0 1%;

    label {
      margin-left: 5px;

      @media screen and (max-width: 599px) {
        display: flex;
        flex-direction: column;
      }
    }

    span {
      width: 100%;
      color: ${P.red};
      margin-left: 10px;

      @media screen and (max-width: 599px) {
        margin-left: 0;
      }
    }

		input, textarea {
			width: 100%;
			border-radius: 20px;
			outline: none;
			border: 3px solid transparent;
			padding: 5px 15px;
      transition: border-color 250ms ease-in-out;
      box-shadow: 0 0 5px 1px ${P.boxShadow};

			&:focus {
				border-color: ${P.themeColor};
			}
		}
	}
`

const InputField = styled.p`
	width: 40%;

	@media (max-width: 599px) {
		width: 82%;
	}

	input {
		height: 2rem;
	}
`

const TextAreaField = styled.p`
	width: 82%;

	textarea {
		height: 6rem;
	}
`

const ButtonField = styled.p`
	width: 82%;

	button {
    width: 100%;
		padding: 7px 15px;
		border-radius: 10px;
		cursor: pointer;
		transition: background-color 250ms ease-in-out;
		background-color: ${P.themeColor};
		color: ${P.white};
		box-shadow: 0 1px 3px 0 ${P.boxShadow};
    display: flex;
    justify-content: center;
    align-items: center;

		&:hover, &:focus {
			background-color: ${darken(0.02, P.themeColor)};
		}

    svg {
      margin-right: 5px;
    }
	}
`


function encode(data) {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&')
}


const ContactForm = ({ onSubmission }) => {
	const [state, setState] = useState({
    name: '', email: '', message: '',
  });
  const [warnings, setWarnings] = useState({});

	function handleChange(e) {
    setState({ ...state, [e.target.name]: e.target.value })
  }

  function formIsValidated() {
    const newWarnings = {};
    const { name, email, message } = state;
    const notEmptyReg = /\w+/;
    const emailReg = /\w+@\w+\.\w+/;

    if (!notEmptyReg.test(name)) {
      newWarnings.name = 'Please fill out this field.'
    }
    if (!notEmptyReg.test(email)) {
      newWarnings.email = 'Please fill out this field.'
    } else if (!emailReg.test(email)) {
      newWarnings.email = 'Please enter a valid email address.'
    }
    if (!notEmptyReg.test(message)) {
      newWarnings.message = 'Please fill out this field.'
    }

    if (Object.keys(newWarnings).length > 0) {
      setWarnings(newWarnings);
      return false;
    }
    return true;
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (formIsValidated()) {
      fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: encode({
          'form-name': "contact",
          ...state,
        }),
      })
        .then(onSubmission)
        .catch(error => alert(error))
    }
  }

  return (
  	<Form
      name="contact"
      method="post"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
      onSubmit={handleSubmit}
      noValidate
    >
    	<input type="hidden" name="form-name" value="contact" />
      <p hidden>
        <label>
          Don’t fill this out: 
          <input name="bot-field" onChange={handleChange} />
        </label>
      </p>
      <InputField>
        <label>
          Your name:
          {warnings.name && <span>{warnings.name}</span>}
          <input type="text" name="name" onChange={handleChange} />
        </label>
      </InputField>
      <InputField>
        <label>
          Your email:
          {warnings.email && <span>{warnings.email}</span>}

          <input type="email" name="email" onChange={handleChange} />
        </label>
      </InputField>
      <TextAreaField>
        <label>
          Message:
          {warnings.message && <span>{warnings.message}</span>}
          <textarea name="message" onChange={handleChange} />
        </label>
      </TextAreaField>
      <ButtonField>
        <button type="submit">
          <FaEnvelope />
          Send
        </button>
      </ButtonField>
    </Form>
  )
}


ContactForm.propTypes = {
  onSubmission: PropTypes.func.isRequired,
}


export default ContactForm;