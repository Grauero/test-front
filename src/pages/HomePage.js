import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { signin } from '../api';

const HomePage = () => {
  const [name, setName] = useState('');
  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const comments = await signin(name);

    if (comments) {
      history.push('/personal-page', { comments });
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        You need sign in to see the private page
        <form className="form">
          <div className="form__item">
            <label className="form__label" htmlFor="name">
              Name
            </label>
            <input
              className="form_input"
              id="name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="form__item">
            <button
              className="form__submit"
              type="button"
              onClick={handleSubmit}
            >
              Submit
            </button>
          </div>
        </form>
      </header>
    </div>
  );
};

export default HomePage;
