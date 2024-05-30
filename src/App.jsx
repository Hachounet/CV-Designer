import './App.css';
import './NameArea.css';
import './CV.css';
import CV from './components/CV';
import NameArea from './components/NameArea';
import { useState } from 'react';

export default function App() {
  const nameAreaClass = 'name-area-class';
  const CVClass = 'CV-class';
  let [firstName, setFirstName] = useState('FirstName');
  const [lastName, setLastName] = useState('LastName');

  function handleFirstName(newValue) {
    setFirstName(newValue);
  }

  function handleLastName(newValue) {
    setLastName(newValue);
  }

  return (
    <>
      <div className="App-CV">
        <CV
          className={CVClass}
          firstName={firstName}
          lastName={lastName}
        ></CV>
      </div>
      <div className="App-Edit">
        <NameArea
          className={nameAreaClass}
          editData={handleFirstName}
        ></NameArea>
      </div>
    </>
  );
}
