import './App.css';
import Headers from './components/header';
import { Helmet } from 'react-helmet';


function App() {
  return (
    <div>
      <Helmet>
        <title>Home</title>
      </Helmet>
      <Headers></Headers>
    </div>
    
  );
}

export default App;
