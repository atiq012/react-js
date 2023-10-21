import './App.css';
import Navbar from './Navbar';
import Home from './Home';

function App() {
  const title ="Atiqur Rahman";
  const designation = "Senior Developer";
  const datas ={name:'Atiq',age:'30'};
  const link = 'http://www.google.com';
  return (
    <div className="App">
      <Navbar />
      <div className='content'>
        <Home></Home>
      </div>      
    </div>
  );
}

export default App;
