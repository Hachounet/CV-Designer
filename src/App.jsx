import './App.css';

import './CV.css';
import CV from './components/CV';
import NameArea from './components/NameArea';
import { useState } from 'react';

export default function App() {
  const nameAreaClass = 'name-area-class';
  const schoolAreaClass = 'school-area-class';
  const CVClass = 'CV-class';

  // ------------------------------------------------ CV Values ----------------------------------------------
  const [firstName, setFirstName] = useState('FirstName');
  const [lastName, setLastName] = useState('LastName');
  const [email, setEmail] = useState('youremail@email.com');
  const [tel, setTel] = useState('+336000000');

  function handleFirstName(newValue) {
    setFirstName(newValue);
  }

  function handleLastName(newValue) {
    setLastName(newValue);
  }

  function handleEmail(newValue) {
    setEmail(newValue);
  }

  function handleTel(newValue) {
    setTel(newValue);
  }

  // ----------------------------------------------- Edit values ----------------------------------------------
  let [editFirstName, setEditFirstName] = useState('First Name Edition');
  let [editLastName, setEditLastName] = useState('Last Name Edition');

  function handleEditFirstName(newValue) {
    setEditFirstName(newValue);
  }

  function handleEditLastName(newValue) {
    setEditLastName(newValue);
  }

  return (
    <>
      <div className="App-CV">
        <CV
          className={CVClass}
          firstName={firstName}
          lastName={lastName}
          email={email}
          tel={tel}
        ></CV>
      </div>
      <div className="App-Edit">
        <NameArea
          className={nameAreaClass}
          editFirstName={handleFirstName}
          editLastName={handleLastName}
          editEmail={handleEmail}
          editTel={handleTel}
        ></NameArea>
      </div>
    </>
  );
}
