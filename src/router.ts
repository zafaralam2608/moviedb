import Dashboard from "pages/dashboard";
import Movie from "pages/movie";
import SearchResults from "pages/search";
import PersonDetails from "pages/person";
import TopRatedMovies from "pages/top-rated";
import Trending from "pages/trending";
import BrowseMovies from "pages/browse";
import Watchlist from "pages/watchlist";
import TVShows from "pages/tvshows";
import FullCast from "pages/full-cast";
import Ratings from "pages/ratings";
import ParentalGuide from "pages/parental-guide";
import Companies from "pages/companies";
import AdvancedSearch from "pages/advanced-search";
import MovieInfo from "pages/movie-info";
import UserProfile from "pages/profile";
import NewsPage from "pages/news";
import { createHashRouter } from "react-router-dom";

const routes = [
  { path: "/", Component: Dashboard },
  { path: "/movie/:id", Component: Movie },
  { path: "/search", Component: SearchResults },
  { path: "/person/:id", Component: PersonDetails },
  { path: "/top-rated", Component: TopRatedMovies },
  { path: "/trending", Component: Trending },
  { path: "/browse", Component: BrowseMovies },
  { path: "/watchlist", Component: Watchlist },
  { path: "/tvshows", Component: TVShows },
  { path: "/full-cast/:id", Component: FullCast },
  { path: "/ratings/:id", Component: Ratings },
  { path: "/parental-guide/:id", Component: ParentalGuide },
  { path: "/companies/:id", Component: Companies },
  { path: "/advanced-search", Component: AdvancedSearch },
  { path: "/movie-info/:id", Component: MovieInfo },
  { path: "/profile", Component: UserProfile },
  { path: "/news", Component: NewsPage },
];

const router = createHashRouter(routes);

export default router;
