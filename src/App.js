import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Login from './component/Login';
import EmployeeForm from './component/EmployeeForm';
import EmployeeList from './component/EmployeeList';


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/employeeForm' element={<EmployeeForm />} />
          <Route path='/employeeForm/:id?' element={<EmployeeForm />} />
          <Route path='/employeeList' element={<EmployeeList />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
