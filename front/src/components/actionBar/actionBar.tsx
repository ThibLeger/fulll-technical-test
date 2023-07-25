import { FC, ReactElement, useEffect, useState } from 'react';

import "./actionBar.css";

import { ReactComponent as DuplicateIcon } from '../../icons/duplicate.svg';
import { ReactComponent as DeleteIcon } from '../../icons/delete.svg';

type ActionBarProps = {
    nbElementsSelected: number,
    // used to display the check for the input when all users are selected
    areAllUsersSelected: boolean,
    isEditMode: boolean,

    onSelectAllUsersClick: Function,
    onDeleteIconClick : Function,
    onDuplicateIconClick: Function,
    onEditModeToggle: Function,
}
  
const ActionBar: FC<ActionBarProps> = ({nbElementsSelected, onSelectAllUsersClick, onDeleteIconClick, onDuplicateIconClick, areAllUsersSelected, onEditModeToggle, isEditMode}): ReactElement => {
    return (
        <div>
            <div className='editModeContainer'>
                <div className='editModeLabel'>Edit Mode</div>
                <label className="switch">
                    <input type="checkbox" onChange={() => onEditModeToggle()} />
                    <span className="slider round"></span>
                </label>
            </div>

            {isEditMode && (
                <div className='actionBar'>
                    <div>
                        <input
                            type='checkbox'
                            onClick={() => onSelectAllUsersClick()}
                            checked={nbElementsSelected > 0 && areAllUsersSelected}
                        />{nbElementsSelected} element selected
                    </div>            

                    <div className='actionBarIconContainer'>
                        <div>
                            <DeleteIcon onClick={() => onDeleteIconClick()} />
                            <DuplicateIcon onClick={() => onDuplicateIconClick()} />
                        </div>
                    </div>                
                </div>
            )}
        </div>
    );
};


export default ActionBar;
