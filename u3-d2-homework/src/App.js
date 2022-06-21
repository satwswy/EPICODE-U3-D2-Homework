import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import MyNav from "./components/MyNav"
import MyFooter from './components/MyFooter';
import fantasyBooks from "./data/fantasy.json"


function App() {
  return (
    <>
    <MyNav />
    <MyFooter />
    </>
  );
}

export default App;
