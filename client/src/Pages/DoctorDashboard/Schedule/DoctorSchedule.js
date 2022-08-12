import DSstyles from '../../DoctorDashboard/Schedule/DoctorSchedule.module.css';
import Navigation from '../components/Navigation';

const patients = [
   {
      name: 'Melissa Burkinstock',
   },
   {
      name: 'James Freeman',
   },
   {
      name: 'Chioma Ukechukwu',
   },
   {
      name: 'Melissa Burkinstock',
   },
   {
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
                     <label>Patient Name</label>
                     <input
                        type="message"
                        id="name"
                        className={DSstyles.inputName}
                     />
                     <label>Condition</label>
                     <input
                        type="message"
                        id="condition"
                        className={DSstyles.inputCondition}
                     />
                  </div>
                  <div className={DSstyles.appointTime}>
                     <label>Appointment Date</label>
                     <input
                        type="date"
                        id="date"
                        className={DSstyles.inputDate}
                     />
                     <label>Start Time</label>
                     <input
                        type="time"
                        id="start time"
                        className={DSstyles.inputStartTime}
                     />
                     <label>End Time</label>
                     <input
                        type="time"
                        id="end time"
                        className={DSstyles.inputEndTime}
                     />
                  </div>
                  <button>Schedule Appointment</button>
               </form>
               <h2>Pending Appointments</h2>
               <div className={DSstyles.appointmentContainer3}>
                  <table>
                     <thead>
                        <th>Name</th>
                        <th>Condition</th>
                        <th>Action</th>
                     </thead>
                     <tbody>
                        <td>{patients[0].name}</td>
                        <td>
                           Swollen tonsils with severe pains in throat and chest
                        </td>
                        <td>Cancel</td>
                     </tbody>
                  </table>
               </div>
            </div>
            <div className={DSstyles.DSContainer2}>
               <h2>Patients</h2>
               <ul>
                  {patients.map((patientnames) => {
                     return (
                        <>
                           <li>{patientnames.name}</li>
                        </>
                     );
                  })}
               </ul>
            </div>
         </div>
      </>
   );
}
