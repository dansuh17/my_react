import React, { PropTypes } from 'react';
import Person from './Person';

const PeopleList = ({ people }) => (
  <div>
    {people.map(person =>
      <Person key={person.lastname} person={person} />,
    )}
  </div>
);

PeopleList.propTypes = {
  people: PropTypes.arrayOf(PropTypes.shape({
    firstname: PropTypes.string,
    lastname: PropTypes.string,
  })),
};

export default PeopleList;
