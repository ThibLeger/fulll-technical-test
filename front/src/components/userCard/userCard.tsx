import { FC, ReactElement } from 'react';

import GitHubUser from '../../types/githubUser';

import './userCard.css';

type UserCardProps = {
    user: GitHubUser,
    isUserSelected: boolean,
    isEditMode: boolean,

    onUserCheckboxClick : Function,
}
  
const UsersList: FC<UserCardProps> = (props): ReactElement => {
    return (
        <div className='userCard'>
            {props.isEditMode && (
                <div  className='userCardCheckboxContainer'>
                    <input
                        type='checkbox'
                        className='userCardCheckbox'
                        onClick={() => props.onUserCheckboxClick(props.user.id)}
                        checked={props.isUserSelected}
                    />
                </div>
            )}

            <div className='userAvatarContainer'>
                <img src={props.user.avatar_url} alt='userAvatar' />
            </div>

            <div className='userCardTextInfo'>
                <div>{props.user.id}</div>
                <div>{props.user.login}</div>
            </div>

            <div>
                <a href={props.user.html_url} target='_blank' rel='noreferrer' className='viewProfileLink'>
                    View profile
                </a>
            </div>
        </div>
    );
};


export default UsersList;
