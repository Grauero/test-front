import React from 'react';
import PropTypes from 'prop-types';

import Comment from './Comment';

const Table = ({ comments }) => (
  <table className="table">
    <thead className="table__head">
      <tr className="table__row">
        <th className="table__cell table__header-cell">ID</th>
        <th className="table__cell table__header-cell">Name</th>
        <th className="table__cell table__header-cell">Surname</th>
        <th className="table__cell table__header-cell">Comment</th>
      </tr>
    </thead>
    <tbody className="table__body">
      {comments.map(({ _id, userId, name, surname, comment }) => (
        <Comment
          key={_id}
          userId={userId}
          name={name}
          surname={surname}
          comment={comment}
        />
      ))}
    </tbody>
  </table>
);

Table.propTypes = {
  comments: PropTypes.array.isRequired,
};

export default Table;
