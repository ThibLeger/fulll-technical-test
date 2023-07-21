import { FC, ReactElement } from 'react';

import GitHubUser from '../../types/githubUser';

import './userCard.css';

type UserCardProps = {
    user: GitHubUser
}
  
const UsersList: FC<UserCardProps> = ({user}): ReactElement => {

    return (
        <div className='userCard'>
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
