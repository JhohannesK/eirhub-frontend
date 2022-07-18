import './App.css';
import { Routes, Route, Navigate } from 'react-router-dom';
import LandingPage from './Pages/Landing page/LandingPage';
import ServicesPage from './Pages/Landing page/ServicesPage';

import UserDashboard from './Pages/User Dashboard/UserDashboard';
import Dashboard from './Pages/User Dashboard/Dashboard/Dashboard.js';
import DashboardNotificationAlerts from './Pages/User Dashboard/components/DashBoardNotificationAlerts.js';
import FindDoctor from './Pages/User Dashboard/FindDoctor/FindDoctor';
import FindDoctorProfile from './Pages/User Dashboard/components/FindDoctorProfile.js';
import Medications from './Pages/User Dashboard/Medications/Medications';
import MedicationForm from './Pages/User Dashboard/components/MedicationForm';

function App() {
   return (
      <Routes>
         <Route
            path="/"
            exact
            element={<Navigate replace to={'/landing-page'} />}
         />
         <Route path="/our-services" exact element={<ServicesPage />} />

         <Route path="/landing-page" exact element={<LandingPage />} />

         <Route
            path="/dashboard"
            exact
            element={
               <UserDashboard
                  parent={<Dashboard />}
                  child={<DashboardNotificationAlerts />}
                  page={'dashboard'}
               />
            }
         />
         <Route
            path="/medications"
            exact
            element={
               <UserDashboard
                  parent={<Medications />}
                  child={<MedicationForm />}
                  page={'medications'}
               />
            }
         />

         <Route
            path="/find-a-doctor"
            exact
            element={
               <UserDashboard
                  parent={<FindDoctor pushData={FindDoctorProfile.pullData} />}
                  child={<FindDoctorProfile />}
                  page={'finddoctor'}
               />
            }
         />
      </Routes>
   );
}

export default App;
