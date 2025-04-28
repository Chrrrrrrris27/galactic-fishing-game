import './App.css';
import { Header } from './layout/Header';
import { HomeSreen } from './screens/HomeSreen';
import { Footer } from './layout/Footer';

function App() {
  return (
    <div className="App">
      <Header/>
      <HomeSreen/>
      <Footer/>
    </div>
  );
}

export default App;
