import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Login from './component/Login';
import EmployeeForm from './component/EmployeeForm';
import EmployeeList from './component/EmployeeList';
import EmployeeUpdate from './component/EmployeeUpdate';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/employeeForm' element={<EmployeeForm />} />
          <Route path='/employeeList' element={<EmployeeList />} />
          <Route path='/employeeUpdate' element={<EmployeeUpdate />} />
          <Route path='/employeeUpdate/:id?' element={<EmployeeUpdate/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
