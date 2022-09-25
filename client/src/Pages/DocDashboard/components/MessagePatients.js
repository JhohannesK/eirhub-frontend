import React, { useState, useEffect } from 'react';
import styles from './messagepatients.module.css';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { setPatientToChatWith } from '../../../Store/DoctorAction';
import axios from 'axios';
import { setMessage } from '../../../Store/Actions';

function MessagePatients() {
   const doctorID = useSelector((state) => state.doctorProfile.id_doctor);

   const dispatch = useDispatch();

   const [patients, setPatients] = useState([]);
   const [active, setActive] = useState(false);
   const [activeIndex, setActiveIndex] = useState();

   useEffect(() => {
      async function fetchdata() {
         await axios
            .get(
               `http://127.0.0.1:5000/appointments/?id_doctor = ${doctorID}`,
               {
                  headers: {
                     'Access-Control-Allow-Origin': '*',
                     //Helpful in some cases.
                     'Access-Control-Allow-Headers': '*',
                     'Access-Control-Allow-Methods': '*',
                  },
               }
            )
            .then((response) => {
               //returns response
               // alert('patients by doctor id worked fetch worked');
               setPatients(response.data.msg);
            })
            .catch((error) => {
               dispatch(
                  setMessage({
                     show: true,
                     msg: 'Could not Fetch Patients.',
                     state: 0,
                  })
               );
            });
      }
      fetchdata();
   }, []);

   let myPatients;
   console.log(patients);
   if (patients === undefined) {
      myPatients = <p className={styles.emptyMessage}>Nothing to show here.</p>;
   } else {
      if (patients.length !== 0) {
         myPatients = patients.map((item, j) => {
            console.log('item', item);
            return (
               <div
                  className={
                     active && activeIndex === `${item.id_patient}${j}`
                        ? `${styles.userBox} ${styles.active}`
                        : styles.userBox
                  }
                  onClick={() => {
                     setActive(true);
                     setActiveIndex(`${item.id_patient}${j}`);
                     dispatch(setPatientToChatWith(item.id_message));
                  }}
               >
                  <div className={styles.userImage}>
                     <img src={item?.person_image} alt="avatar" />
                  </div>
                  <div className={styles.userName}>
                     <h3>{`${item.first_name} ${item.last_name}`}</h3>
                  </div>
               </div>
            );
         });
      } else if (patients.length === 0) {
         // Sends message to be displayed when saved videos is empty
         myPatients = <p>Nothing to show here.</p>;
      }
   }

   return (
      <>
         <div className={styles.messageUsersBody}>
            <div className={styles.usersBox}>
               <h2>Patients</h2>
               <div className={styles.usersBoxSection}>{myPatients}</div>
            </div>
         </div>
      </>
   );
}

export default MessagePatients;
