import { ChangeEvent, FC, ReactElement, useEffect, useState } from 'react';

import "./searchInput.css";

type SearchInputProps = {
    onChange: Function,
}
  
const SearchInput: FC<SearchInputProps> = (props): ReactElement => {
    // the value of the input, this value is modified in real time
    const [inputValue, setInputValue] = useState<string>("");
 
    // this variable is a copy of the above using deboucne mecanism, only propage change event on change of this one
    const [debouncedInputValue, setDebouncedInputValue] = useState<string>("");
    
    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setInputValue(event.target.value);
    };

    // use debounce mecanism to make sure we dont send to many requests to the github API
    // debounce timer in ms
    const debounceTimer = 500;

    useEffect(() => {
        props.onChange(debouncedInputValue);
    }, [debouncedInputValue, props]);

    useEffect(() => {
        const timeoutId = setTimeout(() => {
          setDebouncedInputValue(inputValue);
        }, debounceTimer);
        return () => clearTimeout(timeoutId);
    }, [inputValue]);

    return (
        <div className='searchInputContainer'>
            <input type='text' id='searchInput' onChange={handleChange} placeholder='Search input' />
        </div>
    );
};


export default SearchInput;
