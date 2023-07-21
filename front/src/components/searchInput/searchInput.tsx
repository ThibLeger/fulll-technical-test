import { ChangeEvent, FC, ReactElement, useEffect, useState } from 'react';

import "./searchInput.css";

type SearchInputProps = {
    onChange: Function,
}
  
const SearchInput: FC<SearchInputProps> = ({onChange}): ReactElement => {

    const [inputValue, setInputValue] = useState<string>("");
    const [debouncedInputValue, setDebouncedInputValue] = useState<string>("");
    
    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setInputValue(event.target.value);
    };

    useEffect(() => {
        onChange(debouncedInputValue);
    }, [debouncedInputValue]);

    useEffect(() => {
        const timeoutId = setTimeout(() => {
          setDebouncedInputValue(inputValue);
        }, 500);
        return () => clearTimeout(timeoutId);
    }, [inputValue, 500]);

    return (
        <div className='searchInputContainer'>
            <input type='text' id='searchInput' onChange={handleChange} placeholder='Search input' />
        </div>
    );
};


export default SearchInput;
