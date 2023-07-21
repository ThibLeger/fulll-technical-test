import { FC, ReactElement } from 'react';

import GitHubUser from '../../types/githubUser';

import UserCard from '../userCard/userCard';

import "./usersList.css";

type UserListProps = {
    users: Array<GitHubUser>
}
  
const UsersList: FC<UserListProps> = ({users}): ReactElement => {

    return (
        <div className='usersListContainer'>
            {users.length > 0 ? 
                users.map((user : GitHubUser) => (
                    <UserCard user={user} key={user.id} />
                )) :
                <div>No result</div>
            }
        </div>
    );
};


export default UsersList;
