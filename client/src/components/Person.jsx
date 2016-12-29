import React, { PropTypes } from 'react';

const Person = ({ person }) => (
  <div>
    {person.lastname}, {person.firstname}
  </div>
);

Person.propTypes = {
  person: PropTypes.shape({
    firstname: PropTypes.string,
    lastname: PropTypes.string,
  }),
};

export default Person;
