import { FC, ReactElement } from 'react';

import "./actionBar.css";

import { ReactComponent as DuplicateIcon } from '../../icons/duplicate.svg';
import { ReactComponent as DeleteIcon } from '../../icons/delete.svg';

type ActionBarProps = {
    nbElementsSelected: number,

    onDuplicateBtnClick? : Function,
    onDeleteBtnClick? : Function,
}
  
const ActionBar: FC<ActionBarProps> = (props): ReactElement => {
    return (
        <div className='actionBar'>
            <div>
                <input type='checkbox'  />{props.nbElementsSelected} element selected
            </div>

            <div className='actionBarIconContainer'>
                <DeleteIcon />
                <DuplicateIcon />
            </div>
        </div>
    );
};


export default ActionBar;
