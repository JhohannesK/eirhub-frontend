import React, { useState, useRef } from 'react';
import Signup from './components/Signup';
import Login from './components/Login';
import DoctorSignup from './components/DoctorSignup.js';
import DoctorLogin from './components/DoctorLogin';
import axios from 'axios';

// Database configuration
const api = axios.create({
   baseURL: 'http://127.0.0.1:5000/',
});

function Registration(props) {
   // User login refs
   const loginEmail = useRef();
   const loginPassword = useRef();

   // Doctor login refs
   const doctorLoginEmail = useRef();
   const doctorLoginPassword = useRef();

   // User sign up refs
   const signupFirstname = useRef();
   const signupLastname = useRef();
   const signupEmail = useRef();
   const signupPassword = useRef();
   const signupPasswordconfirm = useRef();
   const signupDate = useRef();

   // Doctor sign up refs
   const doctorSignupFirstname = useRef();
   const doctorSignupLastname = useRef();
   const doctorSignupEmail = useRef();
   const doctorSignupPassword = useRef();
   const doctorSignupPasswordconfirm = useRef();
   const signupHospitalCode = useRef();

   // Handles error state of input user boxes
   // Patient login error
   const [loginEmailError, setloginEmailError] = useState(null);
   const [loginPasswordError, setLoginPasswordError] = useState(null);

   //Patient signup  error
   const [registerNameError, setRegisterNameError] = useState(null);
   const [registerDateError, setRegisterDateError] = useState(null);
   const [registerEmailError, setRegisterEmailError] = useState(null);
   const [registerPasswordOneError, setRegisterPasswordOneError] =
      useState(null);
   const [registerPasswordTwoError, setRegisterPasswordTwoError] =
      useState(null);

   // Handles error state in doctor input voices
   //Doctor login error
   const [doctorLoginEmailError, setDoctorLoginEmailError] = useState(null);
   const [doctorLoginPasswordError, setDoctorLoginPasswordError] =
      useState(null);
   // Doctor sign up errors
   const [registerDoctorNameError, setRegisterDoctorNameError] = useState(null);
   const [registerHospitalCodeError, setRegisterHospitalCodeError] =
      useState(null);
   const [registerDoctorEmailError, setRegisterDoctorEmailError] =
      useState(null);
   const [registerDoctorPasswordOneError, setRegisterDoctorPasswordOneError] =
      useState(null);
   const [registerDoctorPasswordTwoError, setRegisterDoctorPasswordTwoError] =
      useState(null);

   // Handles error messages of user input boxes
   //Patient error messages
   const [registerNameErrorMessage, setRegisterNameErrorMessage] = useState('');
   const [registerDateErrorMessage, setRegisterDateErrorMessage] = useState('');
   const [registerEmailErrorMessage, setRegisterEmailErrorMessage] =
      useState('');
   const [registerPasswordOneErrorMessage, setRegisterPasswordOneErrorMessage] =
      useState('');
   const [registerPasswordTwoErrorMessage, setRegisterPasswordTwoErrorMessage] =
      useState('');
   // Patient login error messsages
   const [loginEmailErrorMessage, setloginEmailErrorMessage] = useState('');
   const [loginPasswordErrorMessage, setLoginPasswordErrorMessage] =
      useState('');
   // Handles error messages of doctor input boxes
   //Doctor signup error messages
   const [registerDoctorNameErrorMessage, setRegisterDoctorNameErrorMessage] =
      useState('');
   const [
      registerHospitalCodeErrorMessage,
      setRegisterHospitalCodeErrorMessage,
   ] = useState('');
   const [registerDoctorEmailErrorMessage, setRegisterDoctorEmailErrorMessage] =
      useState('');
   const [
      registerDoctorPasswordOneErrorMessage,
      setRegisterDoctorPasswordOneErrorMessage,
   ] = useState('');
   const [
      registerDoctorPasswordTwoErrorMessage,
      setRegisterDoctorPasswordTwoErrorMessage,
   ] = useState('');
   // Doctor logins error messages
   const [doctorLoginEmailErrorMessage, setDoctorLoginEmailErrorMessage] =
      useState('');
   const [doctorLoginPasswordErrorMessage, setDoctorLoginPasswordErrorMessage] =
      useState('');

   // Function resets the values of all inputs and errors
   function reset() {
      setloginEmailError(null);
      setLoginPasswordError(null);

      setRegisterNameError(null);
      setRegisterDateError(null);
      setRegisterEmailError(null);
      setRegisterPasswordOneError(null);
      setRegisterPasswordTwoError(null);

      // Handles error state in doctor input voices
      setDoctorLoginEmailError(null);
      setDoctorLoginPasswordError(null);

      setRegisterDoctorNameError(null);
      setRegisterHospitalCodeError(null);
      setRegisterDoctorEmailError(null);
      setRegisterDoctorPasswordOneError(null);
      setRegisterDoctorPasswordTwoError(null);

      // Handles error messages of user input boxes
      setRegisterNameErrorMessage('');
      setRegisterDateErrorMessage('');
      setRegisterEmailErrorMessage('');
      setRegisterPasswordOneErrorMessage('');
      setRegisterPasswordTwoErrorMessage('');
      setloginEmailErrorMessage('');
      setLoginPasswordErrorMessage('');

      // Handles error messages of doctor input boxes
      setRegisterDoctorNameErrorMessage('');
      setRegisterHospitalCodeErrorMessage('');
      setRegisterDoctorEmailErrorMessage('');
      setRegisterDoctorPasswordOneErrorMessage('');
      setRegisterDoctorPasswordTwoErrorMessage('');
      setDoctorLoginEmailErrorMessage('');
      setDoctorLoginPasswordErrorMessage('');
   }

   const pattern = /^[a-zA-Z ]+$/;
   const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

   // Functions below check user credentials in login form input
   function handleLoginEmail() {
      let enteredloginName = loginEmail.current.value;

      if (enteredloginName === '') {
         setloginEmailError(true);
         setloginEmailErrorMessage('Email required');
      } else if (enteredloginName.match(emailPattern)) {
         setloginEmailError(false);
      } else {
         setloginEmailError(true);
         setloginEmailErrorMessage('Email format not valid');
      }
   }

   function handleLoginPassword() {
      let enteredloginPassword = loginPassword.current.value;

      if (enteredloginPassword === '') {
         setLoginPasswordErrorMessage('Password required');
         setLoginPasswordError(true);
      } else if (enteredloginPassword.length < 8) {
         setLoginPasswordErrorMessage(
            'Password must be at least 8 characters long'
         );

         setLoginPasswordError(true);
      } else {
         setLoginPasswordError(false);
      }
   }

   // Functions below check doctor credentials in login form input
   function handleDoctorLoginEmail() {
      let enteredloginName = doctorLoginEmail.current.value;

      if (enteredloginName === '') {
         setDoctorLoginEmailError(true);
         setDoctorLoginEmailErrorMessage('Email required');
      } else if (enteredloginName.match(emailPattern)) {
         setDoctorLoginEmailError(false);
      } else {
         setDoctorLoginEmailError(true);
         setDoctorLoginEmailErrorMessage('Email format not valid');
      }
   }
   function handleDoctorLoginPassword() {
      let enteredloginPassword = doctorLoginPassword.current.value;

      if (enteredloginPassword === '') {
         setDoctorLoginPasswordErrorMessage('Password required');
         setDoctorLoginPasswordError(true);
      } else if (enteredloginPassword.length < 8) {
         setDoctorLoginPasswordErrorMessage(
            'Password must be at least 8 characters long'
         );

         setDoctorLoginPasswordError(true);
      } else {
         setDoctorLoginPasswordError(false);
      }
   }

   // Functions below check user credentials in signup form
   function handleRegisterUser() {
      let enteredSignUpFirstname = signupFirstname.current.value;
      let enteredSignUpLastname = signupLastname.current.value;

      if (enteredSignUpFirstname === '' || enteredSignUpLastname === '') {
         setRegisterNameErrorMessage('Full name required');
         setRegisterNameError(true);
      } else if (
         enteredSignUpFirstname.match(pattern) !== 1 &&
         enteredSignUpLastname.match(pattern) !== 1
      ) {
         setRegisterNameError(false);
      } else {
         setRegisterNameErrorMessage('Name must have only letters');

         setRegisterNameError(true);
      }
   }

   function handleRegisterEmail() {
      let enteredSignUpEmail = signupEmail.current.value;

      if (enteredSignUpEmail === '') {
         setRegisterEmailErrorMessage('Email required');
         setRegisterEmailError(true);
      } else if (enteredSignUpEmail.match(emailPattern)) {
         setRegisterEmailError(false);
      } else {
         setRegisterEmailErrorMessage('Email format not valid');
         setRegisterEmailError(true);
      }
   }
   function handleRegisterDate() {
      let enteredSignUpDate = signupDate.current.value;

      if (enteredSignUpDate === '') {
         setRegisterDateErrorMessage('Date required');
         setRegisterDateError(true);
      } else {
         setRegisterDateError(false);
      }
   }

   function handleRegisterPassword() {
      let enteredSignUpPassword = signupPassword.current.value;

      if (enteredSignUpPassword === '') {
         setRegisterPasswordOneErrorMessage('Password required');
         setRegisterPasswordOneError(true);
      } else if (enteredSignUpPassword.length < 8) {
         setRegisterPasswordOneErrorMessage(
            'Password must be at least 8 characters long'
         );
         setRegisterPasswordOneError(true);
      } else if (enteredSignUpPassword.search(/[0-9]/) === -1) {
         setRegisterPasswordOneErrorMessage(
            'Password must contain at least a number'
         );
         setRegisterPasswordOneError(true);
      } else if (enteredSignUpPassword.search(/[a-z]/) === -1) {
         setRegisterPasswordOneErrorMessage(
            'Password must contain at least a lowercase character'
         );
         setRegisterPasswordOneError(true);
      } else if (enteredSignUpPassword.search(/[A-Z]/) === -1) {
         setRegisterPasswordOneErrorMessage(
            'Password must contain at least an uppercase character'
         );
         setRegisterPasswordOneError(true);
      } else if (enteredSignUpPassword.search(/[,./;%^&*<>?:|]/) === -1) {
         setRegisterPasswordOneErrorMessage(
            'Password must contain at least a special character'
         );
         setRegisterPasswordOneError(true);
      } else {
         setRegisterPasswordOneError(false);
      }
   }

   function handleRegisterPasswordConfirm() {
      let enteredSignUpPasswordconfirm = signupPasswordconfirm.current.value;
      let enteredSignUpPassword = signupPassword.current.value;

      if (enteredSignUpPasswordconfirm === '') {
         setRegisterPasswordTwoErrorMessage('Confirm password required');
         setRegisterPasswordTwoError(true);
      } else if (enteredSignUpPassword !== enteredSignUpPasswordconfirm) {
         setRegisterPasswordTwoErrorMessage('Passwords do not match');
         setRegisterPasswordTwoError(true);
      } else {
         setRegisterPasswordTwoError(false);
      }
   }

   // Functions below check doctor credentials in signup form
   function handleRegisterDoctor() {
      let enteredSignUpFirstname = doctorSignupFirstname.current.value;
      let enteredSignUpLastname = doctorSignupLastname.current.value;

      if (enteredSignUpFirstname === '' || enteredSignUpLastname === '') {
         setRegisterDoctorNameErrorMessage('Full name required');
         setRegisterDoctorNameError(true);
      } else if (
         enteredSignUpFirstname.match(pattern) &&
         enteredSignUpLastname.match(pattern)
      ) {
         setRegisterDoctorNameError(false);
      } else {
         setRegisterDoctorNameErrorMessage('Name must have only letters');

         setRegisterDoctorNameError(true);
      }
   }
   function handleRegisterDoctorEmail() {
      let enteredSignUpEmail = doctorSignupEmail.current.value;

      if (enteredSignUpEmail === '') {
         setRegisterDoctorEmailErrorMessage('Email required');
         setRegisterDoctorEmailError(true);
      } else if (enteredSignUpEmail.match(emailPattern)) {
         setRegisterDoctorEmailError(false);
      } else {
         setRegisterDoctorEmailErrorMessage('Email format not valid');
         setRegisterDoctorEmailError(true);
      }
   }
   function handleRegisterHospitalCode() {
      let enteredSignupHospitalCode = signupHospitalCode.current.value;

      if (enteredSignupHospitalCode === '') {
         setRegisterHospitalCodeErrorMessage('Hospital code required');
         setRegisterHospitalCodeError(true);
      } else {
         setRegisterHospitalCodeError(false);
      }
   }
   function handleRegisterDoctorPassword() {
      let enteredSignUpPassword = doctorSignupPassword.current.value;

      if (enteredSignUpPassword === '') {
         setRegisterDoctorPasswordOneErrorMessage('Password required');
         setRegisterDoctorPasswordOneError(true);
      } else if (enteredSignUpPassword.length < 8) {
         setRegisterDoctorPasswordOneErrorMessage(
            'Password must be at least 8 characters long'
         );
         setRegisterDoctorPasswordOneError(true);
      } else if (enteredSignUpPassword.search(/[0-9]/) === -1) {
         setRegisterPasswordOneErrorMessage(
            'Password must contain at least a number'
         );
         setRegisterDoctorPasswordOneError(true);
      } else if (enteredSignUpPassword.search(/[a-z]/) === -1) {
         setRegisterPasswordOneErrorMessage(
            'Password must contain at least a lowercase character'
         );
         setRegisterDoctorPasswordOneError(true);
      } else if (enteredSignUpPassword.search(/[A-Z]/) === -1) {
         setRegisterPasswordOneErrorMessage(
            'Password must contain at least an uppercase character'
         );
         setRegisterDoctorPasswordOneError(true);
      } else if (enteredSignUpPassword.search(/[,./;%^&*<>?:|]/) === -1) {
         setRegisterDoctorPasswordOneErrorMessage(
            'Password must contain at least a special character'
         );
         setRegisterDoctorPasswordOneError(true);
      } else {
         setRegisterDoctorPasswordOneError(false);
      }
   }
   function handleRegisterDoctorPasswordConfirm() {
      let enteredSignUpPasswordconfirm =
         doctorSignupPasswordconfirm.current.value;
      let enteredSignUpPassword = doctorSignupPassword.current.value;

      if (enteredSignUpPasswordconfirm === '') {
         setRegisterDoctorPasswordTwoErrorMessage('Confirm password required');
         setRegisterDoctorPasswordTwoError(true);
      } else if (enteredSignUpPassword !== enteredSignUpPasswordconfirm) {
         setRegisterDoctorPasswordTwoErrorMessage('Passwords do not match');
         setRegisterDoctorPasswordTwoError(true);
      } else {
         setRegisterDoctorPasswordTwoError(false);
      }
   }

   // function handles submittion of user/doctor data to database
   async function submitUserCredentialsHandler() {
      // User entered credentials
      let enteredloginEmail = loginEmail.current.value;
      let enteredloginPassword = loginPassword.current.value;

      let enteredloginEmailDoctor = doctorLoginEmail.current.value;
      let enteredloginPasswordDoctor = doctorLoginPassword.current.value;

      let enteredSignUpFirstname = signupFirstname.current.value;
      let enteredSignUpLastname = signupLastname.current.value;
      let enteredSignUpDate = signupDate.current.value;
      let enteredSignUpEmail = signupEmail.current.value;
      let enteredSignUpPassword = signupPassword.current.value;

      let enteredSignUpFirstnameDoctor = doctorSignupFirstname.current.value;
      let enteredSignUpLastnameDoctor = doctorSignupLastname.current.value;
      let enteredSignUpEmailDoctor = doctorSignupEmail.current.value;
      let enteredSignUpPasswordDoctor = doctorSignupPassword.current.value;
      let enteredSignupHospitalCode = signupHospitalCode.current.value;

      // Below code checks which modal form is open to take user credentials
      if (props.modalLogin) {
         //checks if the patient login form modal is opened
         // prepares credentials for submission
         const loginPatientData = {
            user_email: enteredloginEmail,
            user_password: enteredloginPassword,
         };

         // makes api call with userdata
         const feedback = await submitCredentials(
            'patient/login',
            loginPatientData
         );
         return await feedback; //return feedback for registeration flow
      } else if (props.modalSignup) {
         //checks if the patient signup form modal is opened
         // prepares credentials for submission
         const signupPatientData = {
            first_name: enteredSignUpFirstname,
            last_name: enteredSignUpLastname,
            date_of_birth: enteredSignUpDate,
            user_email: enteredSignUpEmail,
            user_password: enteredSignUpPassword,
         };

         // makes api call with userdata
         const feedback = await submitCredentials(
            'patient/signup',
            signupPatientData
         );
         return await feedback; //return feedback for registeration flow
      } else if (props.modalSignupDoctor) {
         //checks if the doctor signup form modal is opened
         // prepares credentials for submission
         const signupDoctorData = {
            first_name: enteredSignUpFirstnameDoctor,
            last_name: enteredSignUpLastnameDoctor,
            hospital_code: enteredSignupHospitalCode,
            user_email: enteredSignUpEmailDoctor,
            user_password: enteredSignUpPasswordDoctor,
         };

         // makes api call with userdata
         const feedback = await submitCredentials(
            'doctor/signup',
            signupDoctorData
         );
         return await feedback; //return feedback for registeration flow
      } else if (props.modalLoginDoctor) {
         //checks if the doctor login form modal is opened
         // prepares credentials for submission
         const loginDoctorData = {
            user_email: enteredloginEmailDoctor,
            user_password: enteredloginPasswordDoctor,
         };

         // makes api call with userdata
         const feedback = await submitCredentials(
            'doctor/login',
            loginDoctorData
         );
         return await feedback; //return feedback for registeration flow
      }
   }

   // Function submits data to database via an api
   async function submitCredentials(path, data) {
      //Function takes path and data to make request
      try {
         const response = await axios({
            method: 'POST',
            url: `http://127.0.0.1:5000/${path}`,
            headers: {
               'Access-Control-Allow-Origin': '*',
               //Helpful in some cases.
               'Access-Control-Allow-Headers': '*',
               'Access-Control-Allow-Methods': '*',
            },
            data: data,
         });
         if (response.status === 200) {
            //checks if connection and data was accepted
            //checks details of response

            if (response.data.status === true) {
               //returns response
               return [response.data.status, response.data.msg, 'Redirecting'];
            } else {
               //returns response
               return [
                  response.data.status,
                  response.data.msg,
                  'Create Account',
               ];
            }
         } else {
            //takes all statuses aside 200
            return [false, 'Something went wrong. Try again', 'Create Account'];
         }
      } catch (error) {
         // catches all errors
         if (error.response) {
            return [false, 'Something went wrong. Try again', 'Create Account'];
         } else if (error.request) {
            return [false, 'Something went wrong. Try again', 'Create Account'];
         } else {
            return [false, 'Something went wrong. Try again', 'Create Account'];
         }
      }
   }

   return (
      <>
         <Login
            reset={reset}
            modalLogin={props.modalLogin}
            handleModalSignup={props.handleModalSignup}
            handleModalsClose={props.handleModalsClose}
            submitUserCredentialsHandler={submitUserCredentialsHandler}
            loginEmail={loginEmail}
            handleLoginEmail={handleLoginEmail}
            handleLoginPassword={handleLoginPassword}
            loginPassword={loginPassword}
            loginEmailError={loginEmailError}
            loginPasswordError={loginPasswordError}
            loginEmailErrorMessage={loginEmailErrorMessage}
            loginPasswordErrorMessage={loginPasswordErrorMessage}
         />
         <DoctorLogin
            reset={reset}
            modalLoginDoctor={props.modalLoginDoctor}
            handleModalSignupDoctor={props.handleModalSignupDoctor}
            handleModalsClose={props.handleModalsClose}
            submitUserCredentialsHandler={submitUserCredentialsHandler}
            doctorLoginEmail={doctorLoginEmail}
            doctorLoginPassword={doctorLoginPassword}
            handleDoctorLoginEmail={handleDoctorLoginEmail}
            handleDoctorLoginPassword={handleDoctorLoginPassword}
            doctorLoginEmailError={doctorLoginEmailError}
            doctorLoginPasswordError={doctorLoginPasswordError}
            doctorLoginEmailErrorMessage={doctorLoginEmailErrorMessage}
            doctorLoginPasswordErrorMessage={doctorLoginPasswordErrorMessage}
         />

         <Signup
            reset={reset}
            modalSignup={props.modalSignup}
            handleModalLogin={props.handleModalLogin}
            handleModalsClose={props.handleModalsClose}
            submitUserCredentialsHandler={submitUserCredentialsHandler}
            signupFirstname={signupFirstname}
            signupLastname={signupLastname}
            signupEmail={signupEmail}
            signupPassword={signupPassword}
            signupDate={signupDate}
            signupPasswordconfirm={signupPasswordconfirm}
            registerNameError={registerNameError}
            registerEmailError={registerEmailError}
            registerDateError={registerDateError}
            registerPasswordOneError={registerPasswordOneError}
            registerPasswordTwoError={registerPasswordTwoError}
            registerNameErrorMessage={registerNameErrorMessage}
            registerEmailErrorMessage={registerEmailErrorMessage}
            registerDateErrorMessage={registerDateErrorMessage}
            registerPasswordOneErrorMessage={registerPasswordOneErrorMessage}
            registerPasswordTwoErrorMessage={registerPasswordTwoErrorMessage}
            handleRegisterUser={handleRegisterUser}
            handleRegisterEmail={handleRegisterEmail}
            handleRegisterDate={handleRegisterDate}
            handleRegisterPassword={handleRegisterPassword}
            handleRegisterPasswordConfirm={handleRegisterPasswordConfirm}
         />
         <DoctorSignup
            reset={reset}
            modalSignupDoctor={props.modalSignupDoctor}
            handleModalLoginDoctor={props.handleModalLoginDoctor}
            handleModalsClose={props.handleModalsClose}
            submitUserCredentialsHandler={submitUserCredentialsHandler}
            doctorSignupFirstname={doctorSignupFirstname}
            doctorSignupLastname={doctorSignupLastname}
            doctorSignupEmail={doctorSignupEmail}
            doctorSignupPassword={doctorSignupPassword}
            signupHospitalCode={signupHospitalCode}
            doctorSignupPasswordconfirm={doctorSignupPasswordconfirm}
            registerDoctorNameError={registerDoctorNameError}
            registerDoctorEmailError={registerDoctorEmailError}
            registerHospitalCodeError={registerHospitalCodeError}
            registerDoctorPasswordOneError={registerDoctorPasswordOneError}
            registerDoctorPasswordTwoError={registerDoctorPasswordTwoError}
            registerDoctorNameErrorMessage={registerDoctorNameErrorMessage}
            registerDoctorEmailErrorMessage={registerDoctorEmailErrorMessage}
            registerHospitalCodeErrorMessage={registerHospitalCodeErrorMessage}
            registerDoctorPasswordOneErrorMessage={
               registerDoctorPasswordOneErrorMessage
            }
            registerDoctorPasswordTwoErrorMessage={
               registerDoctorPasswordTwoErrorMessage
            }
            handleRegisterDoctor={handleRegisterDoctor}
            handleRegisterDoctorEmail={handleRegisterDoctorEmail}
            handleRegisterHospitalCode={handleRegisterHospitalCode}
            handleRegisterDoctorPassword={handleRegisterDoctorPassword}
            handleRegisterDoctorPasswordConfirm={
               handleRegisterDoctorPasswordConfirm
            }
         />
      </>
   );
}
export default Registration;
