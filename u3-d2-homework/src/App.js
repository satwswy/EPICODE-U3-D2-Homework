import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import MyNav from "./components/MyNav"
import MyFooter from './components/MyFooter';
import Welcome from './components/Welcome';
import fantasyBooks from "./data/fantasy.json"


function App() {
  return (
    <>
    <MyNav />
    <Welcome />
    <MyFooter />
    </>
  );
}

export default App;
