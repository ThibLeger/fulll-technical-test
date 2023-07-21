import { useEffect, useState } from 'react';
import './App.css';

import GitHubUser from './types/githubUser';

import { getGitHubUsers } from './actions/actions';
import SearchInput from './components/searchInput/searchInput';
import UsersList from './components/usersList/usersList';

function App() {
  const [searchValue, setSearchValue] = useState<string>("");
  const [githubUsers, setGithubUsers] = useState<Array<GitHubUser>>([]);

  useEffect(() => {
    if (searchValue !== "") {
      getGitHubUsers(searchValue)
        .then((result) => {
          setGithubUsers(result);
        });
    }
  }, [searchValue]);

  const handleOnSearchInputChange = (searchedValue: string) => {
    setSearchValue(searchedValue);
  };

  return (
    <div className="App">
      <div>
        <header className="App-header">
          Github Search
        </header>

        <SearchInput 
          onChange={handleOnSearchInputChange} 
        />
      </div>
      
      <UsersList 
        users={githubUsers}
      />
    </div>
  );
}

export default App;
