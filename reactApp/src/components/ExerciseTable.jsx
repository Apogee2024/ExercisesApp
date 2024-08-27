import ExerciseRow from './ExerciseRow';

function ExerciseTable({ exercises, onDelete, onEdit}) {
    return (
        <div className='table-container'>   
            <table>
        <thead className='table-head'>
        <tr>
        <th>Name</th>
        <th>Reps</th>
        <th>Weight</th>
        <th>Unit</th>
        <th>Date</th>
        {/* <th>⠀</th> */}

        </tr>
        </thead>
            {exercises.map((exercise) => <ExerciseRow exercise={exercise} onDelete={onDelete} onEdit={onEdit}
                    key={exercise._id} />)}
        </table>
        </div>    

    );
}

export default ExerciseTable;