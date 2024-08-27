import { Link } from 'react-router-dom';
import ExerciseTable from '../components/ExerciseTable';
import { useState, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';


function HomePage({setExerciseToEdit}) {

    const [exercises, setExercises] = useState([]);
    const navigate = useNavigate();

    const loadExercises = async () => {
        //fet sends the get request
        const response = await fetch('/exercises');
        const data = await response.json();
        setExercises(data);
    }
    function setHomeTitle() {
        useEffect(() => {
          document.title = 'Exercises';
        }, []);
      }


    
// only works when the movie array is empty
// cannot pass an asynchronous function to useEffect
    useEffect( () => {
        loadExercises();
    },[]);
    // movie item id needs to be passed

    const onDelete = async(_id) => {
        const response = await fetch(`/exercises/${_id}`,
            {method: `DELETE`}
        );
        if(response.status === 204){
            setExercises(exercises.filter(m => m._id !== _id));
            // filter only adds items to the array for which the condition specified returns true
        }else{
            alert(`Failed to delete the exercise with _id = ${_id}, status code = ${response.status}` );
        }        
            
    }
    //homepage only needs to set movie to edit
    const onEdit = (exercise) => {
        setExerciseToEdit(exercise)
        navigate('/edit')
    }
    setHomeTitle();

    return (
        <div className='collection-container'>
            <ExerciseTable exercises={exercises} onDelete={onDelete} onEdit={onEdit}></ExerciseTable>
            </div>
    );
}

export default HomePage;