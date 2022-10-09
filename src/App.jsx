import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import Navigation from "./components/Navigation/Navigation";
// import Spinner from "./components/Spinner/Spinner";

const Home = lazy(() => import('./pages/Home/Home'));
const MovieDetails = lazy(() => import("./pages/MovieDetails/MovieDetails"));
const Movies = lazy(() => import("./pages/Movies/Movies"));
const Reviews = lazy(() => import("./pages/Reviews/Reviews"));
const Cast = lazy(() => import("./pages/Cast/Cast"));

    

export const App = () => {
  return (
    <>
    <Navigation />
      <Suspense>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="movies/:movieId" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
          {/* <Route path="*" element={<NotFoundView />} /> */}
        </Routes>
      </Suspense>
    </>
  );
}

