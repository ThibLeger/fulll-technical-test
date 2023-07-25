import { FC, ReactElement } from 'react';

import GitHubUser from '../../types/githubUser';

import UserCard from '../userCard/userCard';

import "./usersList.css";

type UserListProps = {
    users: Array<GitHubUser>,
    selectedUsers: Array<string>,
    isEditMode: boolean,

    onUserCheckboxClick: Function,
}
  
const UsersList: FC<UserListProps> = (props): ReactElement => {

  
    return (
        <div className='usersListContainer'>
            {props.users.length > 0 ? 
                props.users.map((user : GitHubUser) => (
                    <UserCard
                        user={user} 
                        key={user.id}
                        onUserCheckboxClick={props.onUserCheckboxClick}
                        isUserSelected={props.selectedUsers.includes(user.id)}
                        isEditMode={props.isEditMode}
                    />
                )) :
                <div>No result</div>
            }
        </div>
    );
};


export default UsersList;
