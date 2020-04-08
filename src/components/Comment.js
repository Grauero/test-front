import React from 'react';
import PropTypes from 'prop-types';

const Comment = ({ userId, name, surname, comment }) => (
  <tr className="table__row">
    <td className="table__cell">{userId}</td>
    <td className="table__cell">{name}</td>
    <td className="table__cell">{surname}</td>
    <td className="table__cell">{comment}</td>
  </tr>
);

Comment.propTypes = {
  userId: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  surname: PropTypes.string.isRequired,
  comment: PropTypes.string.isRequired,
};

export default Comment;
