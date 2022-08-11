import PropTypes from 'prop-types';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useState } from "react";
import { Header } from './Searchbar.styled';
import { SearchForm } from './Searchbar.styled';
import { SearchBtn } from './Searchbar.styled';
import { ButtonLabel } from './Searchbar.styled';
import { Input } from './Searchbar.styled';
import { ReactComponent as Icon } from '../icons/search-icon.svg';

export default function Form({ onSubmitClick }) {
    const [inputValue, setInputValue] = useState('');

    const inputHandler = (e) => {
        setInputValue( e.currentTarget.value);
    }

    const onSubmit = (e) => {
        e.preventDefault();

        if (inputValue.trim() === '') {
            toast.error("please enter a request!")
            return;
        }

        onSubmitClick(inputValue);
        setInputValue('');
    }
    return (
            <Header>
                <SearchForm onSubmit={onSubmit}>
                <SearchBtn type="submit" >
                    <Icon></Icon>
                        <ButtonLabel>Search</ButtonLabel>
                    </SearchBtn>
                    <ToastContainer />
                    <Input
                        onChange={inputHandler}
                        type="text"
                        autoComplete="off"
                        autoFocus
                        placeholder="Search images and photos"
                        value={inputValue}
                    />
                </SearchForm>
            </Header>
        );
}

Form.propTypes = {
    onSubmit: PropTypes.func,
};

