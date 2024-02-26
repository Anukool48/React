
import './App.css';
import Alert from './components/Alert';
import Navbar from  './components/Navbar';
import TextForm  from  './components/TextForm';
import About  from  './components/About';
import { useState } from 'react';
import {createBrowserRouter,RouterProvider} from "react-router-dom"

function App() {  
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    });
  };

  setTimeout(() => {
    setAlert(null);
  }, 1500);

  const toggleButton = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = 'rgb(0,2,4)';
      showAlert("Dark mode enabled", "Success");
      document.title = 'TextUtlis-Dark mode';
    } else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode enabled", "Success");
      document.title = 'TextUtlis-light mode';
    }
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <>
          <Navbar title="TextUtils" aboutText="About textUtils"  mode={mode} toggleButton={toggleButton}/>
          <div className="conatiner my-3">
          <Alert alert={alert}/>
            <TextForm heading="Enter the text to analyse below" mode={mode} showAlert={showAlert}/>
           
       
          </div>
        </>
      ),
    },
    {
      path: "/myab",
      
      element: ( <>
        <Navbar title="TextUtils" aboutText="About textUtils"  mode={mode} toggleButton={toggleButton}/>,
        
        <About mode={mode}/>
        
      </>)
    },
    // other pages....
  ]);

  return (
    <>
    
      <RouterProvider router={router}>  
       
      </RouterProvider>
    </>
  );
}

export default App;
