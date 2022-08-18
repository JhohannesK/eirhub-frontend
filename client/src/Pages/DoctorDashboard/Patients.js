import styles from './Patients.module.css'
import maleProfle from '../../assets/Rectangle-1.png';
import femaleProfle from '../../assets/Rectangle.png';
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

function Patients() {
    return (
        <div className={styles.DRContainer2}>
            <h2>Patients</h2>
            <ul>
                {patients.map((patientnames, index) => {
                    return (
                        <div className={styles.imageDiv}>
                            <img src={patientnames.image}></img>
                            <li key={index}>{patientnames.name}</li>
                        </div>

                    );
                })}
            </ul>
        </div>
    )
}

export default Patients;