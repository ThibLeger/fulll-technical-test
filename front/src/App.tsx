import { useEffect, useState } from 'react';
import './App.css';

import GitHubUser from './types/githubUser';

import { getGitHubUsers } from './actions/actions';
import SearchInput from './components/searchInput/searchInput';
import UsersList from './components/usersList/usersList';

function App() {
  const [searchValue, setSearchValue] = useState<string>("");
  const [githubUsers, setGithubUsers] = useState<Array<GitHubUser>>([]);

  const [isFetchingError, setIsFetchingError] = useState<boolean>(false);

  useEffect(() => {
    if (searchValue === "") {
      setGithubUsers([]);
    } else {
      getGitHubUsers(searchValue)
        .then((result) => {
          setGithubUsers(result);
          setIsFetchingError(false);
        }).catch(() => {
          setIsFetchingError(true);
        })
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
      

      <div className='App-content'>
        {
          !isFetchingError ? 
            <UsersList
              users={githubUsers}
            /> 
            : <div>An error Occured trying to fetch users, please try again</div>
        }
      </div>
      
    </div>
  );
}

export default App;
