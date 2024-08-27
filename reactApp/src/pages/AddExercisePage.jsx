import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
// use statevariables to manage inputs from the user

export const CreateExercisePage = () => {
    const [name, setName] = useState('');
    const [reps, setReps] = useState(1);
    const [weight, setWeight] = useState(1);
    const [unit, setUnit] = useState('lbs');
    const [date, setDate] = useState('01-01-00');

    const navigate = useNavigate();

    const addExercise = async () => {
        const newExercise = {name,reps,weight,unit,date}
        const response = await fetch('/exercises',{
            method: 'POST',
            headers:{'Content-type': 'application/json'},
            body: JSON.stringify(newExercise)
        });
        if (response.status === 201){
            alert("Successfully added the exercise");
        }else {
            alert("Failed to add exercise, status code = " + response.status);
            
        }navigate('/');
    };
    function setCreateTitle() {
        document.title = 'Create Exercise';
      }
    
    setCreateTitle();


  return (
    <div>
        <h1>Add Exercise</h1>
      <form>
        <fieldset>
          <legend>New Exercise</legend>
          <label>Please enter exercise name
            <input type="text" value={name}
              onChange={e => setName(e.target.value)} />
          </label>
          <br/>
          <label>Enter reps      :
          <input type="number" value={reps} min={1}
              onChange={e => setReps(e.target.value)} />
          </label>
          <br/>
          <label>Enter weight      :
          <input type="number" value={weight} min={1}
              onChange={e => setWeight(e.target.value)} />
          </label>
          <br/>
          <label>Select Unit       :</label>
          <select name="unit" value={unit} onChange={e => setUnit(e.target.value)}>
            <option value="kgs">kgs</option>
            <option value="lbs">lbs</option>
          </select>
          <br/>
          <label>Enter Date MM-DD-YY   :
          <input type="string" value={date} min={"01-01-00"} max={"12-12-99"}
              onChange={e => {setDate(e.target.value);
                              updateDate();}
              } />
          </label>
          <br/>
        </fieldset>
        <button onClick={e => {
            e.preventDefault();
            addExercise();
        }}>Submit</button>
      </form>
  </div>
);
    
}

export default CreateExercisePage;