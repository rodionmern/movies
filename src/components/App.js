import { Routes, Route } from "react-router-dom";

import Header from "./Header/Header";
import MoviesList from "./MoviesList/MoviesList";
import MoviePage from "./MoviePage/MoviePage";

function App() {
  return (
    <>
    <Header />
    <Routes>
      <Route path="/movies" element={<MoviesList />} />
      <Route path="/movies/page/:id" element={<MoviePage />} />
    </Routes>
    </>
  )
}

export default App;