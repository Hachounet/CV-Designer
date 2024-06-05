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
  const [schoolEditionBoolean, setSchoolEditionBoolean] = useState(false);
  const [dataToEdit, setDataToEdit] = useState({});

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
    // Check if the array already exists in schoolExp
    const index = schoolExp.findIndex((exp) => exp[4] === array[4]);
    console.log('This is schoolExp');
    console.log(schoolExp);
    console.log('this is new array');
    console.log(array);
    if (index !== -1) {
      // If it exists, update the existing array
      const updatedSchoolExp = [...schoolExp];
      updatedSchoolExp[index] = array;
      setSchoolExp(updatedSchoolExp);
      // If index !== -1 mean already exist so we're in edition mode, so we need to close it
      toggleEditionBoolean();
      setDataToEdit({});
    } else {
      // If it doesn't exist, add the new array to schoolExp
      setSchoolExp((prevSchoolExp) => [...prevSchoolExp, array]);
    }
  }

  function toggleEditionBoolean() {
    setSchoolEditionBoolean((previousState) => !previousState);
  }

  function handleEditSchoolExp(event) {
    const btn = event.target;
    const parent = btn.closest('li');
    const dataKey = parent.getAttribute('data-key');

    schoolExp.forEach((array, arrayIndex) => {
      if (array[4] === dataKey) {
        console.log('This is array number', arrayIndex);
        giveToEdition(array, arrayIndex);
      }
    });
  }

  function giveToEdition(array) {
    console.log('GiveToEdition function');
    setSchoolEditionBoolean(true);
    setDataToEdit({
      school: array[0],
      study: array[1],
      dateBegin: array[2],
      dateEnd: array[3],
      key: array[4],
    });
    console.log(dataToEdit);
  }

  // ----------------------------------------------- Edit values ----------------------------------------------

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
          editFn={handleEditSchoolExp}
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
          schoolEditionBoolean={schoolEditionBoolean}
          dataToEdit={dataToEdit}
          toggleEditionBoolean={toggleEditionBoolean}
        ></SchoolArea>
      </div>
    </>
  );
}
