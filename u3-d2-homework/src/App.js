
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import LatestReleases from './components/LatestReleases';
import MyFooter from './components/MyFooter';
import MyJumbotron from './components/MyJumbotron';
import MyNav from './components/MyNav';


function App() {
  return (
    <>
   <MyNav />
   <MyFooter />
   <MyJumbotron />
   <LatestReleases />
   </>
  );
}

export default App;
