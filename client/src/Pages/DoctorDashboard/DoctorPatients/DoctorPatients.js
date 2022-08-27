import styles from './DoctorPatients.module.css'
import maleProfile from '../../../assets/Rectangle-1.png';
import femaleProfile from '../../../assets/Rectangle.png';
import { GrClose } from 'react-icons/gr';
import { useState, useEffect } from 'react'
import {FaUserCircle} from 'react-icons/fa'
import { fetchPatientsByDoctorId } from '../../../Store/DoctorAction';



const patients = [
    {
        image: femaleProfile,
        name: 'Melissa Burkinstock',
    },
    {
        image: maleProfile,
        name: 'James Freeman',
    },
    {
        image: femaleProfile,
        name: 'Chioma Ukechukwu',
    },
    {
        image: femaleProfile,
        name: 'Melissa Burkinstock',
    },
    {
        image: femaleProfile,
        name: 'Melissa Burkinstock',
    },
];

function DoctorPatients() {
    const [patients,setPat]
    const [show, setShow] = useState(false);
    const body = document.querySelector("body");

    const showPeople = ()=>{
        setShow(true)
        body.styles.overflow = 'none'
    }
    const hidePeople = ()=> {
        setShow(false)
        body.styles.overflow = 'auto'
    }    

    useEffect(()=>{
        async function fetchdata(){
            const items = await fetchPatientsByDoctorId(doctorId)
            setPatien
        }
    })

    return (<>
        <FaUserCircle
            color="#05a6c2"
            className={styles.menu}
            onClick={() => showPeople()}

        />
        <div className={show ?`${styles.patientsSection} ${styles.show} `:`${styles.patientsSection} ${styles.hide}`}>
            <div className={styles.logo_close}>
            <GrClose className={styles.close} onClick={()=> hidePeople()} />
            <h2>Patients</h2>
            </div>
            <ul>
                {patients.map((patients, index) => {
                    return (
                        <div className={styles.imageDiv}>
                            <img src={patients.image} alt={patients.name}></img>
                            <li key={index}>{patients.name}</li>
                        </div>

                    );
                })}
            </ul>
        </div>
        </>
    )
}

export default DoctorPatients;