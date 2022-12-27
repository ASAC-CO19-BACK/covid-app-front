import './App.css';
import Auth from './context/auth';
import SignUp from './components/signup';
import { Routes, Route } from "react-router-dom";
import Home from './components/home';
import Header from './components/header';
import Footer from './components/footer';
import MyRecords from './components/myrecords';
import AllCountries from './components/allcountries';

function App() {
  return (
    <Auth>
      <div className="App">

        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/myrecords" element={<MyRecords />} />
          <Route path="/allcontries" element={<AllCountries />} />

          <Route path="/signup" element={<SignUp />} />
        </Routes>
        <Footer />
      </div>
    </Auth>
  );
}

export default App;
