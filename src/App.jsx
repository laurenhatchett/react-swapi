import './App.css';
import { Route, Routes } from 'react-router-dom'
// import NavBar from './components/NavBar/NavBar'
import StarshipPage from './pages/StarshipPage/StarshipPage';
import StarshipList from './pages/StarshipList/StarshipList';

function App() {
  return (
    <div>
      <>
      <Routes>
        <Route
        path='/'
        element={<StarshipList />}
        />
        <Route
          path='/starship'
          element={<StarshipPage />}
        />
      </Routes>
      </>
    </div>
  );
}

export default App;
