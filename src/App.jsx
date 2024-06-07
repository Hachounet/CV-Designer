import './App.css';
import './CV.css';
import CV from './components/CV';
import NameArea from './components/NameArea';
import SchoolArea from './components/SchoolArea';

import { useState } from 'react';
import WorkArea from './components/WorkArea';
import GenericBtn from './components/GenericBtn';

export default function App() {
  const nameAreaClass = 'name-area-class';
  const schoolAreaClass = 'school-area-class';
  const workAreaClass = 'work-area-class';
  const CVClass = 'CV-class';
  const checkboxClass = 'checkbox';

  // ------------------------------------------------ CV Values ----------------------------------------------
  const [firstName, setFirstName] = useState('FirstName');
  const [lastName, setLastName] = useState('LastName');
  const [email, setEmail] = useState('youremail@email.com');
  const [tel, setTel] = useState('+336000000');

  const [schoolExp, setSchoolExp] = useState([]);
  const [schoolEditionBoolean, setSchoolEditionBoolean] = useState(false);
  const [dataToEdit, setDataToEdit] = useState({});

  const [workExp, setWorkExp] = useState([]);
  const [workEditionBoolean, setWorkEditionBoolean] = useState(false);
  const [workDataToEdit, setWorkDataToEdit] = useState({});

  const [checkbox, setCheckbox] = useState(false);

  const [hideBtn, setHideBtn] = useState(false);

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
    const index = schoolExp.findIndex(
      (exp) => exp[exp.length - 1] === array[array.length - 1]
    );
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

  const addWorkExpFn = (array) => {
    const index = workExp.findIndex(
      (exp) => exp[exp.length - 1] === array[array.length - 1]
    );
    if (index !== -1) {
      const updatedWorkExp = [...workExp];
      updatedWorkExp[index] = array;
      setWorkExp(updatedWorkExp);
      toggleWorkEditionBoolean();
      setWorkDataToEdit({});
    } else {
      setWorkExp((prevWorkExp) => [...prevWorkExp, array]);
      console.log(workEditionBoolean);
    }
  };

  function toggleEditionBoolean() {
    setSchoolEditionBoolean((previousState) => !previousState);
  }

  function toggleWorkEditionBoolean() {
    setWorkEditionBoolean((previousState) => !previousState);
  }

  function handleEditSchoolExp(event) {
    const btn = event.target;
    const parent = btn.closest('li');
    const dataKey = parent.getAttribute('data-key');

    schoolExp.forEach((array, arrayIndex) => {
      if (array[array.length - 1] === dataKey) {
        giveToEdition(array);
      }
    });
  }

  function handleWorkEditSchoolExp(event) {
    const btn = event.target;
    const parent = btn.closest('li');
    const dataKey = parent.getAttribute('data-key');

    workExp.forEach((array) => {
      if (array[array.length - 1] === dataKey) {
        giveToWorkEdition(array);
      }
    });
  }

  function giveToEdition(array) {
    setSchoolEditionBoolean(true);
    setDataToEdit({
      school: array[0],
      study: array[1],
      dateBegin: array[2],
      dateEnd: array[3],
      key: array[array.length - 1],
    });
    console.log(dataToEdit);
  }

  function giveToWorkEdition(array) {
    setWorkEditionBoolean(true);
    setWorkDataToEdit({
      work: array[0],
      enterprise: array[1],
      responsabilities: array[2],
      dateBegin: array[3],
      dateEnd: array[4],
      key: array[array.length - 1],
    });
  }

  function deleteExp(event) {
    const btn = event.target;
    const parent = btn.closest('li');
    const dataKey = parent.getAttribute('data-key');
    const grandParent = parent.closest('div');

    console.log('I am launched');
    console.log(grandParent);

    if (grandParent.classList.contains('CV-school-area-class')) {
      setSchoolExp((prevSchoolExp) =>
        prevSchoolExp.filter((exp) => exp[exp.length - 1] !== dataKey)
      );
    } else if (grandParent.classList.contains('CV-work-area-class')) {
      setWorkExp((prevWorkExp) =>
        prevWorkExp.filter((exp) => exp[exp.length - 1] !== dataKey)
      );
    }
  }

  const handleCheckboxClick = (event) => {
    event.stopPropagation();
    setCheckbox((prevState) => !prevState);
    console.log('I am switching checkbox bool', checkbox);
  };

  const handleHideBtns = (event) => {
    event.preventDefault();

    setHideBtn((prevState) => !prevState);

    const CV = document.getElementsByClassName('App-CV');
    const btns = [];

    Array.from(CV).forEach((element) => {
      const elementButtons = element.querySelectorAll('button');
      btns.push(...elementButtons);
    });

    if (hideBtn) {
      btns.forEach((btn) => {
        btn.classList.add('hide');
      });
    } else {
      btns.forEach((btn) => {
        btn.classList.remove('hide');
      });
    }
  };
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
          workExpArray={workExp}
          editFn={handleEditSchoolExp}
          workEditFn={handleWorkEditSchoolExp}
          deleteFn={deleteExp}
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
        ></SchoolArea>
        <WorkArea
          className={workAreaClass}
          addWorkExpFn={addWorkExpFn}
          workEditionBoolean={workEditionBoolean}
          workDataToEdit={workDataToEdit}
          checkboxClass={checkboxClass}
          tillNowFn={handleCheckboxClick}
          tillNowDisabled={checkbox}
        ></WorkArea>
        <GenericBtn
          fn={handleHideBtns}
          text="Hide CV Buttons"
        ></GenericBtn>
      </div>
    </>
  );
}
