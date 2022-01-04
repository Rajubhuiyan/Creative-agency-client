import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.css';
import AuthProvider from './Context/AuthProvider';
import Admin from './Pages/Dashboard/Admin/Admin';
import Customer from './Pages/Dashboard/Customer/Customer';
import Dashboard from './Pages/Dashboard/Dashboard/Dashboard';
import Home from './Pages/Home/Home/Home';
import Login from './Pages/Login/Login/Login';
import PrivateRoute from './Pages/Login/PrivateRouter/PrivateRoute';
import NotFoundPage from './Pages/NotFoundPage/NotFoundPage';

function App() {
  return (
    <div>
      <AuthProvider>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login/" element={<Login />} />
            <Route path="/dashboard/" element={<PrivateRoute><Dashboard><Admin/></Dashboard></PrivateRoute>}/>
            <Route path="/dashboard/customer/:serviceId" element={<PrivateRoute><Customer/></PrivateRoute>}/>
            <Route path="/dashboard/customer/" element={<PrivateRoute><Customer/></PrivateRoute>}/>
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
