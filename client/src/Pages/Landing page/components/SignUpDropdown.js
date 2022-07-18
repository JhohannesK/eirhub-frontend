import React from 'react';
import styles from './dropdown.module.css';
import { Link } from 'react-router-dom';

const SignUpDropdown = ({ clicked }) => {
   return (
      <>
         <div className={styles.main}>
            <div className={styles.sub_main}>
               <ul className={styles.list}>
                  <li className={styles.list_first}>Sign up as: </li>
                  <Link to="/" className={styles.list_last}>
                     Patient
                  </Link>
                  <Link to="/" className={styles.list_last}>
                     Doctor
                  </Link>
               </ul>
            </div>
         </div>
      </>
   );
};

export default SignUpDropdown;
