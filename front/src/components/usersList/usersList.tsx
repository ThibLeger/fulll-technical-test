import { FC, ReactElement } from 'react';

import GitHubUser from '../../types/githubUser';

import UserCard from '../userCard/userCard';

import "./usersList.css";

type UserListProps = {
    users: Array<GitHubUser>,
    selectedUsers: Array<string>,

    onUserCheckboxClick: Function,
}
  
const UsersList: FC<UserListProps> = ({users, onUserCheckboxClick, selectedUsers}): ReactElement => {

  
    return (
        <div className='usersListContainer'>
            {users.length > 0 ? 
                users.map((user : GitHubUser) => (
                    <UserCard
                        user={user} 
                        key={user.id}
                        onUserCheckboxClick={onUserCheckboxClick}
                        isUserSelected={selectedUsers.includes(user.id)}
                    />
                )) :
                <div>No result</div>
            }
        </div>
    );
};


export default UsersList;
