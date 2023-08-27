import "./App.css";

import Header from "./components/Header/Header";
import CreateList from "./components/Lists/CreateList";
import ListCard from "./components/Lists/ListCard";
import ListsMenu from "./components/Lists/ListsMenu/ListsMenu";
import Login from "./components/Login/Login";
import MainGrid from "./components/MainGrid/MainGrid";
import MovieMidCard from "./components/MovieMidCard/MovieMidCard";
import Search from "./components/Search/Search";
import SideBar from "./components/SideBar/SideBar";
import SideBarIcon from "./components/SideBar/SideBarIcon/SideBarIcon";
import SignUp from "./components/SignUp/SignUp";
import Slider from "./components/Slider/Slider";
import { useSelector } from "react-redux/es/hooks/useSelector";

function App() {
  const showMovieCard = useSelector((state) => state.movies.showCard);
  const showSideBar = useSelector((state) => state.sideBar.showSideBar);
  const showSignup = useSelector((state) => state.auth.showSignup);
  const showLogin = useSelector((state) => state.auth.showLogin);
  const showList = useSelector((state) => state.list.showList);
  const showCreateList = useSelector((state) => state.list.showCreateList);
  const showListMenu = useSelector((state) => state.list.showListMenu);

  return (
    <>
      <Header />
      {showSideBar && <SideBar />}
      {!showSideBar && <SideBarIcon />}
      {showSignup && <SignUp />}
      {showLogin && <Login />}
      <Slider />
      <Search />
      <MainGrid />
      {showMovieCard && <MovieMidCard />}
      {showList && <ListCard />}
      {showCreateList && <CreateList />}
      {showListMenu && <ListsMenu />}
    </>
  );
}

export default App;
