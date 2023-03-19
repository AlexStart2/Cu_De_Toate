import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home';
import Login from './Pages/Login';
import Register from './Pages/Register';
import CreateForm from './Pages/CreateForms';

function App() {
  return (
    <div className="App">

      <Routes>
        <Route    path='/register' element={ <Register /> } />
        <Route    path='/login' element={ <Login /> } />
        <Route    path='/home' element={ <Home /> } />
        <Route    path='/create-form' element={ <CreateForm />} />
      </Routes>

    </div>
  );
}

export default App;
