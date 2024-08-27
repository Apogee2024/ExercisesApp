import '../App.css';
import {MdDelete} from 'react-icons/md';
import {MdEdit} from 'react-icons/md';

function ExerciseRow({ exercise, onDelete, onEdit}) {

    return (
           <tr>
        <td>{exercise.name}</td>
        <td>{exercise.reps}</td>
        <td>{exercise.weight}</td>
        <td>{exercise.unit}</td>
        <td>{exercise.date}</td>
        <td>    <MdEdit onClick ={() => onEdit(exercise)} /><MdDelete onClick ={() => onDelete(exercise._id)} />
        </td>
        </tr>
  
    );
}

export default ExerciseRow;