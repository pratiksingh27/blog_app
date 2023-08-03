// import logo from './logo.svg';
import './App.css';
// import {db} from " ";
import Addblog from './components/Addblog';
import BlogDisplay from './components/BlogDisplay';

function App() {
  return (
    <div className="App  max-w-[1400px] gap-3 md:flex mx-[10vw] pt-6">
      <div className='justify-start'>
        <BlogDisplay/>
      </div>
      <div className='justify-end'>
        <Addblog/>
      </div>
    </div>
  );
}

export default App;
