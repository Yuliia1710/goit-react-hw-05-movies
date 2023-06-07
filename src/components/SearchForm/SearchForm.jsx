// import PropTypes from 'prop-types';
import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Button, Input } from './SearchForm.styled';
import PropTypes from 'prop-types';

const SearchForm = ({ onSubmit }) => {
  const [query, setQuery] = useState('');

  const onHandleChange = e => {
    // console.log(e.currentTarget.value);
    setQuery(e.currentTarget.value);
  };

  const onHandleSubmit = e => {
    e.preventDefault();
    if (query.trim() === '') {
      toast('Введіть ваш запит!');

      setQuery('');
      return;
    }

    onSubmit(query);
    // console.log(e.currentTarget.value);
  };

  return (
    <>
      <ToastContainer autoClose={1000} />
      <form className="form" onSubmit={onHandleSubmit}>
        <Button type="submit" className="button">
          <span className="button-label">Search</span>
        </Button>

        <Input
          className="input"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search movie"
          value={query}
          onChange={onHandleChange}
        />
      </form>
    </>
  );
};

export default SearchForm;

SearchForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
