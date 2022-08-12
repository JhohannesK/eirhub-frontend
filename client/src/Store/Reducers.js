import { SET_NAME } from './ActionTypes';
import {
   SET_PROFILE_INFO,
   SET_HEALTH_INFO,
   SET_GUARDIAN_INFO,
   SET_REPORTS,
} from './ActionTypes';

// import { PURGE } from 'redux-persist';

const initialState = {
   name: '',
   user_id: '',
   profile: {
      email: '',
      first_name: '',
      house_address: '',
      idPatient: '',
      idDoctor: '',
      idGuardian: '',
      id_number: '',
      last_name: '',
      middle_name: '',
      nationality: '',
      phone_number: '',
      person_image: '',
      date_of_birth: '',
      gender: '',
   },
   health: {
      blood_group: '',
      blood_pressure: '',
      blood_sugar: '',
      height: '',
      last_visit: '',
      pulse: '',
      respiratory_rate: '',
      weight: '',
   },
   guardian: {
      first_name: '',
      middle_name: '',
      last_name: '',
      email: '',
      date_of_birth: '',
      house_address: '',
      phone_number: '',
      id_number: '',
      gender: '',
   },
   reports: [],
};

const Reducers = (state = initialState, action) => {
   switch (action.type) {
      //   case PURGE:
      //      return initialState;
      case SET_NAME:
         return {
            ...state,
            name: action.payload,
         };

      case SET_PROFILE_INFO:
         let profile = {
            email: action.payload.email,
            first_name: action.payload.first_name,
            house_address: action.payload.house_address,
            idPatient: action.payload.idPatient,
            idDoctor: action.payload.idDoctor,
            idGuardian: action.payload.idGuardian,
            id_number: action.payload.id_number,
            last_name: action.payload.last_name,
            middle_name: action.payload.middle_name,
            nationality: action.payload.nationality,
            person_image: action.payload.person_image,
            phone_number: action.payload.phone_number,
            gender: action.payload.gender,
            date_of_birth: action.payload.date_of_birth,
         };
         return { ...state, profile: profile };

      case SET_HEALTH_INFO:
         let health = {
            blood_group: action.payload.blood_group,
            blood_pressure: action.payload.blood_pressure,
            blood_sugar: action.payload.blood_sugar,
            height: action.payload.height,
            last_visit: action.payload.last_visit,
            pulse: action.payload.pulse,
            respiratory_rate: action.payload.respiratory_rate,
            weight: action.payload.weight,
            temperature: action.payload.temperature,
         };
         return { ...state, health: health };

      case SET_GUARDIAN_INFO:
         let guardian = {
            first_name: action.payload.first_name,
            middle_name: action.payload.middle_name,
            last_name: action.payload.last_name,
            email: action.payload.email,
            date_of_birth: action.payload.date_of_birth,
            house_address: action.payload.house_address,
            phone_number: action.payload.phone_number,
            id_number: action.payload.id_number,
            gender: action.payload.gender,
         };
         return { ...state, guardian: guardian };

      case SET_REPORTS:
         return { ...state, reports: action.payload };

      default:
         return state;
   }
};
export default Reducers;
