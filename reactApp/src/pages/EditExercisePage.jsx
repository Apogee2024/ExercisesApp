import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export const EditExercisePage = ({ exerciseToEdit }) => {
    // Initialize state with fallback values
    const [name, setName] = useState(exerciseToEdit?.name || '');
    const [reps, setReps] = useState(exerciseToEdit?.reps || 1);
    const [weight, setWeight] = useState(exerciseToEdit?.weight || 1);
    const [unit, setUnit] = useState(exerciseToEdit?.unit || 'kgs');
    const [date, setDate] = useState(exerciseToEdit?.date || '');

    const navigate = useNavigate();

    const editExercise = async () => {
        const editedExercise = { name, reps, weight, unit, date };
        const response = await fetch(`/exercises/${exerciseToEdit._id}`, {
            method: 'PUT',
            headers: { 'Content-type': 'application/json' },
            body: JSON.stringify(editedExercise),
        });
        if (response.status === 200) {
            alert("Successfully edited the Exercise!");
            
        } else {
            alert("Failed to edit exercise, status code = " + response.status);
        }navigate('/');
    };

    function setEditTitle() {
        useEffect(() => {
          document.title = `Edit ${name}`;
        }, []);
      }
    setEditTitle();

    return (
        <div>
            <form>
                <fieldset>
                    <legend>Edit Exercise</legend>
                    <label>Exercise Name:
                        <input type="text" value={name}
                            onChange={e => setName(e.target.value)} />
                    </label>
                    <br />
                    <label>Enter Reps:
                        <input type="number" value={reps} min={1}
                            onChange={e => setReps(e.target.value)} />
                    </label>
                    <br />
                    <label>Enter Weight:
                        <input type="number" value={weight} min={1}
                            onChange={e => setWeight(e.target.value)} />
                    </label>
                    <br />
                    <label>Select Unit:</label>
                    <select name="unit" value={unit} onChange={e => setUnit(e.target.value)}>
                        <option value="kgs">kgs</option>
                        <option value="lbs">lbs</option>
                    </select>
                    <br />
                    <label>Enter Date (MM-DD-YY):
                        <input type="text" value={date} min={"01-01-00"} max={"12-12-99"}
                            onChange={e => setDate(e.target.value)} />
                    </label>
                    <br />
                </fieldset>
                <button onClick={e => {
                    e.preventDefault();
                    editExercise();
                }}>Update</button>
            </form>
        </div>
    );
}

export default EditExercisePage;
