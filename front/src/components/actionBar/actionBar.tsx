import { FC, ReactElement, useEffect, useState } from 'react';

import "./actionBar.css";

import { ReactComponent as DuplicateIcon } from '../../icons/duplicate.svg';
import { ReactComponent as DeleteIcon } from '../../icons/delete.svg';

type ActionBarProps = {
    nbElementsSelected: number,
    // used to display the check for the input when all users are selected
    areAllUsersSelected: boolean,

    onSelectAllUsersClick: Function,
    onDeleteIconClick : Function,
    onDuplicateIconClick: Function,
}
  
const ActionBar: FC<ActionBarProps> = ({nbElementsSelected, onSelectAllUsersClick, onDeleteIconClick, onDuplicateIconClick, areAllUsersSelected}): ReactElement => {
    return (
        <div className='actionBar'>
            <div>
                <input
                    type='checkbox'
                    onClick={() => onSelectAllUsersClick()}
                    checked={nbElementsSelected > 0 && areAllUsersSelected}
                />{nbElementsSelected} element selected
            </div>

            <div className='actionBarIconContainer'>
                <DeleteIcon onClick={() => onDeleteIconClick()} />
                <DuplicateIcon onClick={() => onDuplicateIconClick()} />
            </div>
        </div>
    );
};


export default ActionBar;
