import React, { useState, useRef } from 'react';
import styles from './signup.module.css';
import signUp from '../../../assets/images/signupimage.svg';
import { FaRegUser, FaRegHospital } from 'react-icons/fa';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import { RiLockPasswordFill } from 'react-icons/ri';
import { IoIosMail } from 'react-icons/io';
import { IoCalendar, IoWarning, IoCloseOutline } from 'react-icons/io5';
import { BiLoaderAlt } from 'react-icons/bi';
import hospital from '../../../assets/hospital.svg';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import {
   fetchDoctorsProfileInfo,
   getAllPendingAppointmentsForADoctor,
   setDoctorAuth,
   setDoctorProfile,
} from '../../../Store/DoctorAction.js';
// import { SignUpUser } from '../../../context/authcontext';
import store from '../../../Store/store';
import { persistor } from '../../../Store/store';
import { setLoading, setMessage, setOkToRoute } from '../../../Store/Actions';
import { Dialog } from '@mui/material';

function DoctorSignup({
   show,
   handleClose,
}: {
   show: boolean;
   handleClose: () => void;
}) {
   const navigate = useNavigate();
   const dispatch = useDispatch();
   const docSignUpFormRef = useRef();

   // handles button changes
   const [btnValue, setBtnValue] = useState('Create Account');
   const [btnActive, setBtnActive] = useState(false);
   // btnActive is for when button can  be clicked to create account. This would be set to false when an error occurs
   // Handles password visibility
   const [hidePasswordOne, setHidePasswordOne] = useState(true);
   const [hidePasswordTwo, setHidePasswordTwo] = useState(true);
   // Handles server error
   const [isError, setIsError] = useState(false);
   const [errorMessage, setErrorMessage] = useState(
      'Email already in use. Want to login?'
   );

   return (
      <Dialog open={show} onClose={handleClose}>
         <div className={styles.signupBody}>
            <div id={styles.signupContent} className={styles.active}>
               <div className={styles.signupContainer}>
                  <div className={styles.leftRegion}>
                     <h3>Eirhub</h3>
                     <div className={styles.leftRegionInfoOne}>
                        <p>Sign up and help put smiles on</p>
                     </div>

                     <div className={styles.leftRegionInfoTwo}>
                        <p> the faces of patients</p>
                     </div>
                     <div className={styles.leftRegionImage}>
                        <img src={signUp} alt="Sign-up" />
                     </div>
                  </div>
                  <div className={styles.rightRegion}>
                     <div className={isError ? styles.error : styles.noerror}>
                        <p>{errorMessage}</p>
                        <i
                           className={styles.closeIcon}
                           onClick={() => {
                              setIsError(false);
                           }}
                        >
                           <IoCloseOutline />
                        </i>
                     </div>
                     <div className={styles.formSideContainer}>
                        <div className={styles.signupFormTitle}>
                           <h3>Create New Account</h3>
                           <p>Take control of your health today</p>
                        </div>
                        <form className={styles.signupForm}>
                           <div className={styles.signupFormBoxNames}>
                              <div className={styles.signupFormBoxName}>
                                 <h3> Firstname</h3>
                                 <div
                                    className={styles.signupFormBoxNameInputs}
                                 >
                                    <i>
                                       <FaRegUser />
                                    </i>
                                    <input
                                       name="firstName"
                                       type="text"
                                       id="docfirstname"
                                       placeholder="Enter Firstname"
                                       onChange={() => {
                                          setIsError(false);
                                       }}
                                       disabled={btnActive}
                                    />
                                 </div>
                              </div>
                              <div className={styles.signupFormBoxName}>
                                 <h3> Lastname</h3>
                                 <div
                                    className={styles.signupFormBoxNameInputs}
                                 >
                                    <i>
                                       <FaRegUser />
                                    </i>
                                    <input
                                       name="lastname"
                                       type="text"
                                       id="doclastname"
                                       placeholder="Enter Lastname"
                                       onChange={() => {
                                          setIsError(false);
                                       }}
                                       disabled={btnActive}
                                    />
                                 </div>
                              </div>
                           </div>
                           <div className={styles.noErrorMessageBox}>
                              <i>
                                 <IoWarning />
                              </i>
                           </div>

                           <div className={styles.signupFormBox}>
                              <h3> Email</h3>
                              <div className={styles.signupFormBoxInputs}>
                                 <i>
                                    <IoIosMail />
                                 </i>
                                 <input
                                    name="email"
                                    type="email"
                                    id="docemail"
                                    placeholder="someone@example.com"
                                    onChange={() => {
                                       setIsError(false);
                                    }}
                                    disabled={btnActive}
                                 />
                              </div>
                           </div>
                           <div className={styles.noErrorMessageBox}>
                              <i>
                                 <IoWarning />
                              </i>
                           </div>
                           {/* <div className={styles.signupFormBox}>
                              <h3> Hospital code</h3>
                              <div
                                 className={
                                    props.registerHospitalCodeError
                                       ? styles.signupFormBoxInputsError
                                       : styles.signupFormBoxInputs
                                 }
                              >
                                 <i>
                                    <FaRegHospital />
                                 </i>
                                 <input
                                    type="text"
                                    name="signupHospitalCode"
                                    id="docSignupHospitalCode"
                                    placeholder="Enter hospital code"
                                    onFocus={(event) =>
                                       (event.target.type = 'text')
                                    }
                                    // onBlur={(event) => {
                                    //     if (!event.target.value) {
                                    //         event.target.type = 'text';
                                    //     }
                                    // }}
                                    onChange={() => {
                                       props.handleRegisterHospitalCode();
                                       setIsError(false);
                                    }}
                                    disabled={btnActive}
                                 />
                              </div>
                           </div>
                           <div
                              className={
                                 props.registerHospitalCodeError
                                    ? styles.errorMessageBox
                                    : styles.noErrorMessageBox
                              }
                           >
                              <i>
                                 <IoWarning />
                              </i>
                              <p>{props.registerHospitalCodeErrorMessage}</p>
                           </div>
                           <div className={styles.signupFormBox}>
                              <h3> Password</h3>
                              <div
                                 className={
                                    props.registerDoctorPasswordOneError
                                       ? styles.signupFormBoxInputsError
                                       : styles.signupFormBoxInputs
                                 }
                              >
                                 <i>
                                    <RiLockPasswordFill />
                                 </i>
                                 <input
                                    type={hidePasswordOne ? 'password' : 'text'}
                                    name="password"
                                    id="docpassword1"
                                    placeholder="Enter a password"
                                    ref={props.doctorSignupPassword}
                                    onChange={() => {
                                       props.handleRegisterDoctorPassword();
                                       setIsError(false);
                                    }}
                                    disabled={btnActive}
                                 />
                                 <i
                                    onClick={() =>
                                       setHidePasswordOne(!hidePasswordOne)
                                    }
                                 >
                                    {hidePasswordOne ? (
                                       <AiOutlineEye />
                                    ) : (
                                       <AiOutlineEyeInvisible />
                                    )}
                                 </i>
                              </div>
                           </div>
                           <div
                              className={
                                 props.registerDoctorPasswordOneError
                                    ? styles.errorMessageBox
                                    : styles.noErrorMessageBox
                              }
                           >
                              <i>
                                 <IoWarning />
                              </i>
                              <p>
                                 {props.registerDoctorPasswordOneErrorMessage}
                              </p>
                           </div>

                           <div className={styles.signupFormBox}>
                              <h3>Confirm Password</h3>
                              <div
                                 className={
                                    props.registerDoctorPasswordTwoError
                                       ? styles.signupFormBoxInputsError
                                       : styles.signupFormBoxInputs
                                 }
                              >
                                 <i>
                                    <RiLockPasswordFill />
                                 </i>
                                 <input
                                    name="passwordconfirm"
                                    type={hidePasswordTwo ? 'password' : 'text'}
                                    id="docpassword2"
                                    placeholder="Confirm your password"
                                    ref={props.doctorSignupPasswordconfirm}
                                    onChange={() => {
                                       props.handleRegisterDoctorPasswordConfirm();
                                       setIsError(false);
                                    }}
                                    disabled={btnActive}
                                 />
                                 <i
                                    onClick={() =>
                                       setHidePasswordTwo(!hidePasswordTwo)
                                    }
                                 >
                                    {hidePasswordTwo ? (
                                       <AiOutlineEye />
                                    ) : (
                                       <AiOutlineEyeInvisible />
                                    )}
                                 </i>
                              </div>
                           </div>
                           <div
                              className={
                                 props.registerDoctorPasswordTwoError
                                    ? styles.errorMessageBox
                                    : styles.noErrorMessageBox
                              }
                           >
                              <i>
                                 <IoWarning />
                              </i>
                              <p>
                                 {props.registerDoctorPasswordTwoErrorMessage}
                              </p>
                           </div>
                           <div className={styles.signupFormButton}>
                              <button
                                 id="docsubmit-btn"
                                 // className={
                                 //    btnActive
                                 //       ? `${styles.signupBtn} ${styles.btnActive}`
                                 //       : styles.signupBtn
                                 // }
                                 className={styles.signupBtn}
                                 disabled={btnActive}
                                 onClick={() => {
                                    setBtnValue('Creating Account');
                                    setBtnActive(true);
                                    submitCredentialsFeedback();
                                 }}
                              >
                                 <p>{btnValue}</p>
                                 <div
                                    className={
                                       btnActive
                                          ? `${styles.loader} ${styles.btnActive}`
                                          : styles.loader
                                    }
                                 >
                                    <i>
                                       <BiLoaderAlt />
                                    </i>
                                 </div>
                              </button>
                           </div>
                           <div className={styles.signupFormMessage}>
                              <p>Already have an account? </p>
                              <p
                                 id={styles.signupFormMessageP}
                                 onClick={() => {
                                    props.handleModalLoginDoctor();
                                    docSignUpFormRef.current.reset();
                                    props.reset();
                                    setIsError(false);
                                    setBtnActive(false);
                                    setBtnValue('Create Account');
                                 }}
                              >
                                 Login
                              </p>
                           </div> */}
                        </form>
                     </div>
                     <div></div>
                  </div>
               </div>
            </div>
         </div>
      </Dialog>
   );
}

export default DoctorSignup;
