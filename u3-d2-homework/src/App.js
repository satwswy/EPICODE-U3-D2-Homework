import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import MyNav from "./components/MyNav"
import MyFooter from './components/MyFooter';
import Welcome from './components/Welcome';
import LatestRelease from './components/LatestRelease';
import fantasyBooks from "./data/fantasy.json"


function App() {
  return (
    <>
    <MyNav />
    <Welcome />
    <LatestRelease />
    <MyFooter />
    </>
  );
}

export default App;
