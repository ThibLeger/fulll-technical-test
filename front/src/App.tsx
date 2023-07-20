import { useEffect, useState } from 'react';
import './App.css';

// import SearchInput from './components/searchInput/searchInput';

function App() {
  const [searchValue, setSearchValue] = useState("");

  useEffect(() => {
    // todo search api
  }, [searchValue]);

  return (
    <div className="App">
      <header className="App-header">
        Github Search
      </header>

      {/* <SearchInput onChange={(search) => setSearchValue(search)} /> */}
    </div>
  );
}

export default App;
