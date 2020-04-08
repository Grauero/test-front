import React from 'react';
import PropTypes from 'prop-types';

import Table from '../components/Table';

const PersonalPage = ({ location: { state } }) =>
  state.comments && state.comments.length ? (
    <div className="App">
      <header className="container">
        <Table comments={state.comments} />
      </header>
    </div>
  ) : (
    <h2>There are no comments</h2>
  );

PersonalPage.propTypes = {
  state: PropTypes.object,
};

PersonalPage.defaultProps = {
  state: {},
};

export default PersonalPage;
