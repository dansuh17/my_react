import React, { PropTypes, Component } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as peopleActions from '../actions/people-actions';
import PeopleList from './PeopleList';
import PersonInput from './PersonInput';

class PeopleContainer extends Component {
  constructor(props) {
    super(props);

    // initial state - list of people
    this.state = {
      people: [],
    };
  }

  render() {
    const {people} = this.props;  // connected to the state

    return (
      <div>
        <PersonInput addPerson={this.props.actions.addPerson} />
        <PeopleList people={people} />
        <button onClick={this.props.actions.clearPerson}>Clear</button>
      </div>
    );
  }
}

// there are two elements in props - people and actions
PeopleContainer.propTypes = {
  people: PropTypes.array,
  actions: PropTypes.object,
};

// indicate that the state's people is equal to the prop's people
const mapStateToProps = (state, props) => {
  return {
    people: state.people,
  }
};

// indicate that the imported actions (peopleActions) are equal to prop's actions
const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(peopleActions, dispatch),
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(PeopleContainer);
