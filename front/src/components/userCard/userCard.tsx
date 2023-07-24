import { ChangeEvent, FC, MouseEventHandler, ReactElement } from 'react';

import GitHubUser from '../../types/githubUser';

import './userCard.css';

type UserCardProps = {
    user: GitHubUser,

    onUserCheckboxClick : Function,
}
  
const UsersList: FC<UserCardProps> = ({user, onUserCheckboxClick}): ReactElement => {

    

    return (
        <div className='userCard'>
            <div  className='userCardCheckboxContainer'>
                <input type='checkbox' className='userCardCheckbox' onClick={() => onUserCheckboxClick(user.id)} />
            </div>

            <div className='userAvatarContainer'>
                <img src={user.avatar_url} alt='userAvatar' />
            </div>

            <div className='userCardTextInfo'>
                <div>{user.id}</div>
                <div>{user.login}</div>
            </div>

            <div>
                <a href={user.html_url} target='_blank' rel='noreferrer' className='viewProfileLink'>
                    View profile
                </a>
            </div>
        </div>
    );
};


export default UsersList;
