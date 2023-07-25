import { FC, ReactElement } from 'react';

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
  
const ActionBar: FC<ActionBarProps> = (props): ReactElement => {
    return (
        <div>
            <div className='editModeContainer'>
                <div className='editModeLabel'>Edit Mode</div>
                <label className="switch">
                    <input type="checkbox" onChange={() => props.onEditModeToggle()} id='selectAllUsersInput' />
                    <span className="slider round"></span>
                </label>
            </div>

            {props.isEditMode && (
                <div className='actionBar'>
                    <div>
                        <input
                            type='checkbox'
                            onChange={() => props.onSelectAllUsersClick()}
                            checked={props.nbElementsSelected > 0 && props.areAllUsersSelected}
                        />{props.nbElementsSelected} element selected
                    </div>

                    <div className='actionBarIconContainer'>
                        <div>
                            <DeleteIcon onClick={() => props.onDeleteIconClick()} />
                            <DuplicateIcon onClick={() => props.onDuplicateIconClick()} />
                        </div>
                    </div>                
                </div>
            )}
        </div>
    );
};


export default ActionBar;
