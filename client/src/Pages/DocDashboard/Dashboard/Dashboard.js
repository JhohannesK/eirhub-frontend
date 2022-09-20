import React, { useEffect, useState } from 'react';
import styles from './dashboard.module.css';
import { IoIosPeople } from 'react-icons/io';
import { AiFillFile } from 'react-icons/ai';
import { CgCalendar } from 'react-icons/cg';
import { connect } from 'react-redux';
import axios from 'axios';

const MidDashboard = (props) => {
   const [getacceptedAppointment, setAcceptedAppointment] = useState([]);
   console.log(getacceptedAppointment);

   // States to keep the counts of the number of patients, reports and appointments
   const [numOfPatients, setNumOfPatients] = useState(0);
   const [numOfReports, setNumOfReports] = useState(0);
   const [numOfdetails, setNumberofdetails] = useState(0);
   console.log('the details', numOfdetails);
   const data = props.doctorProfile;
   const baseURL = 'http://127.0.0.1:5000';

   // TODO: add interceptors to catch errors
   useEffect(() => {
      const fetchAcceptedAppointments = async () => {
         axios
            .get(
               `${baseURL}/appointments/?id_doctor=${data?.id_doctor}&status=Accepted`,
               {
                  headers: {
                     'Access-Control-Allow-Origin': '*',
                     'Access-Control-Allow-Headers': '*',
                     'Access-Control-Allow-Methods': '*',
                  },
               }
            )
            .then((res) => {
               alert(res.data.msg)
               setAcceptedAppointment(res.data.msg);
            })
            .catch((err) => {
               console.log(err.message);
            });
      };

      // ${data?.id_doctor}

//Fetch Doctor Dashboard Details
      const fetchDoctorDashboard = async () => {
         if (data?.id_doctor) {
            try {
               const response = await axios({
                  method: 'GET',
                  url: `http://127.0.0.1:5000/doctor/dashboard/?id_doctor=${data?.id_doctor}`,
                  headers: {
                     'Access-Control-Allow-Origin': '*',
                     //Helpful in some cases.
                     'Access-Control-Allow-Headers': '*',
                     'Access-Control-Allow-Methods': '*',
                  },
               });
               if (response.status === 200) {
                  //checks details of response
                  if (response.data.status === true) {
                     //returns response
                     // alert('stats fetch worked');
                     alert(response.data.msg.stats.number_of_appointments)
                     // console.log(response.data.msg);
                     s = response.data.msg.number_of_appointments;
                     // return response.data.msg;
                  }
               } else {
                  //takes all statuses aside 200
                  // alert('Something went wrong. Try again, accepted appments 1');
               }
            } catch (error) {
               // alert(error, 'accepted appments 2');
            }
         }
         else{
   
         }

      };
      // fetchAcceptedAppointments();
      fetchDoctorDashboard();
   }, []);

   // useEffect(() => {

   //    fetchStats();
   // }, []);

   // useEffect(() => {
   //    const fetchNumberOfRecords = async () => {
   //       axios
   //          .get(`${baseURL}/doctors/reports/?id_doctor=${data?.id_doctor}`, {
   //             headers: {
   //                'Access-Control-Allow-Origin': '*',
   //                'Access-Control-Allow-Headers': '*',
   //                'Access-Control-Allow-Methods': '*',
   //                'content-type': 'application/json',
   //             },
   //          })
   //          .then((res) => {
   //             setNumOfReports(res.data.msg);
   //          })
   //          .catch((err) => {
   //             console.log(err.message);
   //          });
   //    };
   //    fetchNumberOfRecords();
   // }, []);

   // useEffect(() => {
   //    const fetchNumberOfAppointments = async () => {
   //       axios
   //          .get(
   //             `${baseURL}/doctors/appointments/?id_doctor=${data?.id_doctor}`,
   //             {
   //                headers: {
   //                   'Access-Control-Allow-Origin': '*',
   //                   'Access-Control-Allow-Headers': '*',
   //                   'Access-Control-Allow-Methods': '*',
   //                },
   //             }
   //          )
   //          .then((res) => {
   //             setNumOfAppointments(res.data.msg);
   //          })
   //          .catch((err) => {
   //             console.log(err.message);
   //          });
   //    };
   //    fetchNumberOfAppointments();
   // }, []);

   return (
      <>
         <div className={styles.wrapper}>
            <main className={styles.main}>
               <section className={styles.section}>
                  <div className={styles.middle_section}>
                     {/* box that containst the summary display for the doctor */}
                     <div className={styles.doctor_display}>
                        {/* Each display make into a card and joined together on large screens */}
                        <div className={styles.card} id={styles.first_card}>
                           <IoIosPeople className={styles.icon} />
                           <div>
                              <p className={styles.digits}>65</p>
                              <p className={styles.text}>Patients</p>
                           </div>
                        </div>
                        <div className={styles.card} id={styles.second_card}>
                           <AiFillFile className={styles.icon} />
                           <div>
                              <p className={styles.digits}>76</p>
                              <p className={styles.text}>records</p>
                           </div>
                        </div>
                        <div className={styles.card} id={styles.third_card}>
                           <CgCalendar className={styles.icon} />
                           <div>
                              <p className={styles.digits}>787:</p>
                              <p className={styles.text}>appointments</p>
                           </div>
                        </div>
                     </div>
                     {/* End of summary display */}

                     {/* div for upcoming appointment */}
                     <div className={styles.appointmentsBox}>
                        <h1 className={styles.heading}>
                           Upcoming appointments
                        </h1>
                        {/* Table for upcoming appointment */}
                        <div className={styles.appointmentTable}>
                           <table>
                              <thead>
                                 <th></th>
                                 <th>Name</th>
                                 <th>Condition</th>
                                 <th>Date</th>
                                 <th>Time</th>
                              </thead>
                              <tbody>
                                 {getacceptedAppointment.map((data, index) => {
                                    return (
                                       <>
                                          <tr key={index}>
                                             <td>
                                                <img
                                                   src={
                                                      data?.patient_info
                                                         .person_image
                                                   }
                                                   alt=""
                                                   className={styles.table_img}
                                                />
                                             </td>
                                             {/* FIXME: Space name */}
                                             <td>
                                                {`${data?.patient_info.first_name} ${data?.patient_info.last_name}`}
                                             </td>
                                             <td>{data?.appointment_reason}</td>
                                             <td>
                                                {new Date(
                                                   data?.appointment_date
                                                ).getMonth() + 1}
                                                /
                                                {new Date(
                                                   data?.appointment_date
                                                ).getDate() + 1}
                                                /
                                                {new Date(
                                                   data?.appointment_date
                                                ).getFullYear()}
                                             </td>
                                             <td>
                                                {data?.appointment_start_time}
                                             </td>
                                          </tr>
                                       </>
                                    );
                                 })}
                              </tbody>
                           </table>
                        </div>
                     </div>
                  </div>
               </section>
            </main>
         </div>
      </>
   );
};

const mapStateToProps = (state) => {
   return {
      doctorProfile: state.doctorProfile,
      savedSummary: state.doctorSummary,
   };
};

export default connect(mapStateToProps)(MidDashboard);
