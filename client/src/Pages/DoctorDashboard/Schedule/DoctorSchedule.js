import DSstyles from '../../DoctorDashboard/Schedule/DoctorSchedule.module.css';
import Navigation from '../components/Navigation';
import maleProfle from '../../../assets/Rectangle-1.png';
import femaleProfle from '../../../assets/Rectangle.png';
import {FaPencilAlt,FaTrash} from 'react-icons/fa'
import DoctorPatients from '../DoctorPatients/DoctorPatients'

const patients = [
   {
      image: femaleProfle,
      name: 'Melissa Burkinstock',
   },
   {
      image: maleProfle,
      name: 'James Freeman',
   },
   {
      image: femaleProfle,
      name: 'Chioma Ukechukwu',
   },
   {
      image: femaleProfle,
      name: 'Melissa Burkinstock',
   },
   {
      image: femaleProfle,
      name: 'Melissa Burkinstock',
   },
];

export default function DoctorSchedule(props) {
   return (
      <>
         <Navigation />
         <div className={DSstyles.DSContainer}>
            <div className={DSstyles.DSContainer1}>
               <h2>Apppoinment Details</h2>
               <form>
                  <div className={DSstyles.patientContainer}>
                     <label className={DSstyles.labelName}>Patient Name</label>
                     <input
                        type="message"
                        id="name"
                        className={DSstyles.inputName}
                     />
                     <label className={DSstyles.labelCondition}>
                        Condition
                     </label>
                     <input
                        type="message"
                        id="condition"
                        className={DSstyles.inputCondition}
                     />
                  </div>
                  <div className={DSstyles.appointTime}>
                     <label className={DSstyles.labelDate}>
                        Appointment Date
                     </label>
                     <input
                        type="date"
                        id="date"
                        className={DSstyles.inputDate}
                     />
                     <label className={DSstyles.labelSTime}>Start Time</label>
                     <input
                        type="time"
                        id="start time"
                        className={DSstyles.inputStartTime}
                     />
                     <label className={DSstyles.labelETime}>End Time</label>
                     <input
                        type="time"
                        id="end time"
                        className={DSstyles.inputEndTime}
                     />
                  </div>
                  <div className={DSstyles.DSbuttondiv}>
                     <button className={DSstyles.DSbutton}>
                        Schedule Appointment
                     </button>
                  </div>
               </form>
               <h2 className={DSstyles.DSh21}>Pending Appointments</h2>
               <div className={DSstyles.appointmentContainer}>
               <div className={DSstyles.DSFiles}>
                  <table>
                     <thead>
                        <th className={DSstyles.DSprofile}>Profile</th>
                        <th className={DSstyles.tName}>Name</th>
                        <th className={DSstyles.tCondition}>Condition</th>
                        <th className={DSstyles.tAction}>Action</th>
                     </thead>
                     <tbody>
                           <td>
                              <img src={femaleProfle}></img>
                           </td>
                           {/* <td>{patients[0].name}</td> */}
                           <td>
                              Swollen tonsils with severe pains in throat and chest
                        </td>
                           <td style={{ color: '#EC6464', cursor: 'pointer' }}>
                           Cancel
                           </td>
                        <td>Lab_Report</td>
                        <td>Lab_Report</td>
                        <td>07/10/2022</td>
                        <td className={DSstyles.DSicons}>
                           <FaPencilAlt className={DSstyles.DSpencil} />
                           <FaTrash className={DSstyles.DStrash} />
                        </td>
                        <tr></tr>
                     </tbody>
                  </table>
               </div>
            </div>
            <div className={DSstyles.DSContainer2}>
               <h2>Patients</h2>
               <ul>
                  {patients.map((patientnames, index) => {
                     return (
                        <div className={DSstyles.imageDiv}>
                           <img src={patientnames.image}></img>
                           <li key={index}>{patientnames.name}</li>
                        </div>
         
                     );
                  })}
               </ul>
            </div>
         </div>
             <Patients/>
         </div>
             </div>
             </div>
             <DoctorPatients/>
             </div>
      </>
   );
}
