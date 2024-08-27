import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AddExercisePage from './pages/AddExercisePage';
import EditExercisePage from './pages/EditExercisePage';
import { useState } from 'react';
import Navigation from './components/Navigation';
function App() {
// put the setmovie to edit here so it can be accessed by both homepage and edit page

  const[exerciseToEdit, setExerciseToEdit] = useState();

  return (
    <div className="app">
      <header>
        <h1>
        Apogee Performance
        </h1>
        <p>a app to keep track of PRs!</p>
      </header>
        <Router>
          <Navigation />
          <Routes>
            <Route path="/" element={<HomePage
                                           setExerciseToEdit={setExerciseToEdit} />}></Route>
            <Route path="/create" element={ <AddExercisePage />}></Route>
            <Route path="/edit" element={ <EditExercisePage exerciseToEdit={exerciseToEdit}/>}></Route>
          </Routes>
        </Router>
        <footer>© 2024 Sean Brady</footer>
    </div>
  );
}

export default App;