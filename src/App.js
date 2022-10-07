import './App.css';
//Pages
import Home from './pages/Home'

import UnreadProvider from './contexts/Unred';

function App() {

  return (
    <>
      <UnreadProvider>
        <Home />
      </UnreadProvider>
    </>
  );
}

export default App;
