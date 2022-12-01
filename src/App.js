import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

// import des routes
import Home from "./components/Home";
import Reviews from "./components/Reviews";
import Header from "./components/Header";
import LastThirtyDays from "./components/LastThirtyDays";
import ThisWeek from "./components/ThisWeek";
import NextWeek from "./components/NextWeek";
import ReleaseCalendar from "./components/ReleaseCalendar";
import BestOfTheYears from "./components/BestOfTheYears";
import Popular from "./components/Popular";
import AllTimeTop from "./components/AllTimeTop";
import AllGames from "./components/AllGames";
import Platforms from "./components/Platforms";
import Stores from "./components/Stores";
import Collections from "./components/Collections";
import Pc from "./components/Pc";
import Playstation from "./components/Playstation";
import XboxOne from "./components/XboxOne";
import Nintendo from "./components/Nintendo";
import IOS from "./components/IOS";
import Android from "./components/Android";
import Action from "./components/Action";
import Strategy from "./components/Strategy";
import RPG from "./components/RPG";

// import FontAwesome
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faBars,
  faStar,
  faFire,
  faForwardFast,
  faTrophy,
  faChartSimple,
  faCrown,
  faGamepad,
  faStore,
  faFolderPlus,
  faDesktop,
} from "@fortawesome/free-solid-svg-icons";
library.add(
  faBars,
  faStar,
  faFire,
  faForwardFast,
  faTrophy,
  faChartSimple,
  faCrown,
  faGamepad,
  faStore,
  faFolderPlus,
  faDesktop
);

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/reviews/popular" element={<Reviews />} />
        <Route path="/discover/last-30-days" element={<LastThirtyDays />} />
        <Route path="/discover/this-week" element={<ThisWeek />} />
        <Route path="/discover/next-week" element={<NextWeek />} />
        <Route path="/video-game-releases" element={<ReleaseCalendar />} />
        <Route path="/discover/best-of-the-year" element={<BestOfTheYears />} />
        <Route path="/discover/popular-in-2021" element={<Popular />} />
        <Route path="/discover/all-time-top" element={<AllTimeTop />} />
        <Route path="/games" element={<AllGames />} />
        <Route path="/discover/platforms" element={<Platforms />} />
        <Route path="/discover/stores" element={<Stores />} />
        <Route path="/collections/popular" element={<Collections />} />
        <Route path="/games/pc" element={<Pc />} />
        <Route path="/games/playstation4" element={<Playstation />} />
        <Route path="/games/xbox-one" element={<XboxOne />} />
        <Route path="/games/nintendo-switch" element={<Nintendo />} />
        <Route path="/games/ios" element={<IOS />} />
        <Route path="/games/android" element={<Android />} />
        <Route path="/games/action" element={<Action />} />
        <Route path="/games/strategy" element={<Strategy />} />
        <Route path="/games/role-playing-games-rpg" element={<RPG />} />
      </Routes>
    </Router>
  );
}

export default App;
