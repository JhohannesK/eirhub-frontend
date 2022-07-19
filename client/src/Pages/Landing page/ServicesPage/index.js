import React, { useState } from 'react';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import style from './style.module.css';
import pic1 from '../../../assets/OnlineConsultation5.jpg';
import pic2 from '../../../assets/findadoctor.png';
import pic3 from '../../../assets/prescription-drug-coverage-1-1x1.jpg';
import pic4 from '../../../assets/weightloss.jpg';
import Registration from '../../Registration page/Registration';
import styles from '../Landingpage.module.css';

const ServicesPage = () => {
   const [modalSignup, setModalSignup] = useState(false);
   const [modalLogin, setModalLogin] = useState(false);

   function handleModalSignup() {
      setModalLogin(false);
      setModalSignup(true);
   }
   function handleModalLogin() {
      setModalSignup(false);
      setModalLogin(true);
   }
   function handleModalsClose() {
      setModalSignup(false);
      setModalLogin(false);
   }
   return (
      <>
         <div
            id={styles.blur}
            className={modalLogin || modalSignup ? styles.active : ''}
            handleModalsClose={handleModalsClose}
         >
            <Navbar
               handleModalLogin={handleModalLogin}
               handleModalSignup={handleModalSignup}
            />{' '}
            <main className={style.main}>
               {/* upper section */}
               <div className={style.upper_part}>
                  <div className={style.title}>Our Services</div>
                  <div>
                     <p className={style.p_text}>
                        Across Eirhub,From Online appointment booking to
                        medication tracking,we offer a wide range of services to
                        meet you as a patient or provider at every point of your
                        health care journey
                     </p>
                  </div>
                  <div className={style.h_line}></div>
               </div>

               {/* body section with images */}
               <section className={style.lower_section}>
                  {/* first container */}
                  <div className={style.container}>
                     <div className={style.with_text}>
                        <p className={style.with_text_title}>
                           Health Consultation
                        </p>
                        <p className={style.with_text_desc}>
                           An easier way to talk with your doctor
                        </p>
                        <p className={style.with_text_content}>
                           Get to book appointments and meet your doctor
                           face-to-face or online just with a few clicks
                        </p>
                     </div>
                     <div className={style.of_image}>
                        <img src={pic1} alt="" className={style.of__image} />
                     </div>
                  </div>

                  {/* second container */}
                  <div className={`${style.container}`}>
                     <div className={style.of_image}>
                        <img src={pic2} alt="" className={style.of__image} />
                     </div>
                     <div className={style.with_text}>
                        <p className={style.with_text_title}>Find a Doctor</p>
                        <p className={style.with_text_desc}>
                           Get access to the right doctor
                        </p>
                        <p className={style.with_text_content}>
                           Find a doctor that can help you get a solution to
                           your health problems{' '}
                        </p>
                     </div>
                  </div>

                  {/* third container */}
                  <div className={style.container}>
                     <div className={style.with_text}>
                        <p className={style.with_text_title}>E-pharmacy</p>
                        <p className={style.with_text_desc}>
                           Manage your prescriptions more effectively
                        </p>
                        <p className={style.with_text_content}>
                           Keep track of your various prescriptions and get
                           alerts on when to refill
                        </p>
                     </div>
                     <div className={style.of_image}>
                        <img src={pic3} alt="" className={style.of__image} />
                     </div>
                  </div>

                  {/* fourth container */}
                  <div className={style.container}>
                     <div className={style.of_image}>
                        <img src={pic4} alt="" className={style.of__image} />
                     </div>
                     <div className={style.with_text}>
                        <p className={style.with_text_title}>Health Tips</p>
                        <p className={style.with_text_desc}>
                           Get access to verified tips for a healthy living
                        </p>
                        <p className={style.with_text_content}>
                           Find a doctor that can help you get a solution to
                           your health problems
                        </p>
                     </div>
                  </div>
               </section>
            </main>
            <Footer />
         </div>
         <Registration
            modalLogin={modalLogin}
            modalSignup={modalSignup}
            handleModalsClose={handleModalsClose}
            handleModalLogin={handleModalLogin}
            handleModalSignup={handleModalSignup}
         />
      </>
   );
};

export default ServicesPage;
