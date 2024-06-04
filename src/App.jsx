import './App.css';
import './CV.css';
import CV from './components/CV';
import NameArea from './components/NameArea';
import SchoolArea from './components/SchoolArea';

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
  const [schoolExp, setSchoolExp] = useState([]);
  const [editSchoolExp, setEditSchoolExp] = useState(false);

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

  function addSchoolExpFn(array) {
    setSchoolExp([...schoolExp, array]);
    console.log(schoolExp);
  }

  function handleEditSchoolExp() {
    setEditSchoolExp(true);
    console.log(editSchoolExp);
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
          schoolExpArray={schoolExp}
          editSchoolExpFn={handleEditSchoolExp}
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
        <SchoolArea
          className={schoolAreaClass}
          addSchoolExpFn={addSchoolExpFn}
        ></SchoolArea>
      </div>
    </>
  );
}
