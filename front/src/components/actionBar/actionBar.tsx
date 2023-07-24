import { FC, ReactElement } from 'react';

import "./actionBar.css";

import { ReactComponent as DuplicateIcon } from '../../icons/duplicate.svg';
import { ReactComponent as DeleteIcon } from '../../icons/delete.svg';

type ActionBarProps = {
    nbElementsSelected: number,

    onSelectAllUsersClick: Function,
    onDeleteIconClick : Function,
    onDuplicateIconClick: Function,
}
  
const ActionBar: FC<ActionBarProps> = ({nbElementsSelected, onSelectAllUsersClick, onDeleteIconClick, onDuplicateIconClick}): ReactElement => {
    return (
        <div className='actionBar'>
            <div>
                <input type='checkbox' onClick={() => onSelectAllUsersClick()} />{nbElementsSelected} element selected
            </div>

            <div className='actionBarIconContainer'>
                <DeleteIcon onClick={() => onDeleteIconClick()} />
                <DuplicateIcon onClick={() => onDuplicateIconClick()} />
            </div>
        </div>
    );
};


export default ActionBar;
