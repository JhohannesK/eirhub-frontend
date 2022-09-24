import React, { useEffect } from 'react';
import styles from './loading.module.css';
import spinner from '../../assets/loading-gif.gif';
import { useDispatch, connect, useSelector } from 'react-redux';
import { fetchMedications, setMedicationsTemp } from '../../Store/Actions';
import store from '../../Store/ReducerStore';

function Loading(props) {
   const dispatch = useDispatch();
   const patientID = useSelector((state) => state.profile.id_patient);

   useEffect(() => {
      console.log(' to run');
      console.log(patientID);
      console.log('outside', store.getState());

      setTimeout(() => {
         if (store.getState().profile.id_patient !== '') {
            console.log('running');
            console.log('inside', store.getState().profile.id_patient);

            async function fetchdata() {
               const items = await fetchMedications(
                  store.getState().profile.id_patient
               );
               console.log(items);
               dispatch(setMedicationsTemp(items));
            }

            fetchdata();
         }
      }, 2000);
   }, []);
   return (
      <>
         <main>
            <div className={styles.homeloadingbg}>
               <div className={styles.loadingspinner}>
                  <img src={spinner} alt="" />
               </div>
            </div>
         </main>
      </>
   );
}
export default Loading;
