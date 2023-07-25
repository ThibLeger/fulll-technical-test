import { useEffect, useState } from 'react';
import './App.css';

import GitHubUser from './types/githubUser';

import { getGitHubUsers } from './actions/actions';
import SearchInput from './components/searchInput/searchInput';
import UsersList from './components/usersList/usersList';
import ActionBar from './components/actionBar/actionBar';

function App() {
  const [searchValue, setSearchValue] = useState<string>("");
  const [githubUsers, setGithubUsers] = useState<Array<GitHubUser>>([]);
  const [selectedUsers, setSelectedUsers] = useState<Array<string>>([]);

  const [isFetchingError, setIsFetchingError] = useState<boolean>(false);
  const [isEditMode, setIsEditMode] = useState<boolean>(false);

  // when searchvalue changes, fetch users from github api
  useEffect(() => {
    setSelectedUsers([]);
    
    // if search value is empty, reset the users without calling the api
    if (searchValue === "") {
      setGithubUsers([]);
    } else {
      // call github api
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

  // handle when the user clicks on user checkbox
  // toggles the presence of the user in the list
  const handleOnUserCheckboxClick = (userId: string) => {
    // if user is already present, we unselect it
    if (selectedUsers.includes(userId)) {
      setSelectedUsers(selectedUsers.filter(item => item !== userId))
    } else {
      // else add it to the list
      setSelectedUsers([...selectedUsers, userId]);
    }
  };
  
  // when users clicks on the "select all users" checkbox
  const handleSelectAllUsers = () => {
    // if all users are already selected unselect them all
    if (selectedUsers.length === githubUsers.length) {
      setSelectedUsers([]);
    } else {
      setSelectedUsers(githubUsers.map(user => user.id));
    }
  };

  const handleOnDeleteIconClick = () => {
    // update the state to leave only the non selected users
    const newUsers = githubUsers.filter(user => !selectedUsers.includes(user.id));
    setGithubUsers(newUsers);
    setSelectedUsers([]);
  };

  const handleOnDuplicateIconClick = () => {
    // get users that are selected
    // update the user id to avoid key conflicts
    const newUsers = githubUsers.filter(user => selectedUsers.includes(user.id)).map(user => ({
        ...user,
        id: `${user.id}${Math.random()}`
    }));

    setGithubUsers(
      [
        ...githubUsers, 
        ...newUsers
      ]
    );
  };

  const toggleEditMode = () => {
    setSelectedUsers([]);
    setIsEditMode(!isEditMode);
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

        <ActionBar
          nbElementsSelected={selectedUsers.length}
          areAllUsersSelected={githubUsers.length === selectedUsers.length}
          onSelectAllUsersClick={handleSelectAllUsers}
          onDeleteIconClick={handleOnDeleteIconClick}
          onDuplicateIconClick={handleOnDuplicateIconClick}
          onEditModeToggle={toggleEditMode}
          isEditMode={isEditMode}
        />
      </div>
      

      <div className='App-content'>
        {
          !isFetchingError ? 
            <UsersList
              users={githubUsers}
              onUserCheckboxClick={handleOnUserCheckboxClick}
              selectedUsers={selectedUsers}
              isEditMode={isEditMode}
            />
            : <div>An error Occured trying to fetch users, please try again</div>
        }
      </div>
    </div>
  );
}

export default App;
