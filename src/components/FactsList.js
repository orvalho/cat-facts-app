import './FactsList.css';
import React, {Component} from 'react';
import {connect} from 'react-redux';

class FactsList extends Component {
  renderList = () => {
    return this.props.facts.map(fact => {
      return <li className="ui message" key={fact._id}>
        {fact.text}
      </li>;
    });
  };

  render() {
    return (<div className="facts-list ui list">
      <ul>
        {this.renderList()}
      </ul>
    </div>);
  }
}

const mapStateToProps = state => ({facts: state.facts});

export default connect(mapStateToProps)(FactsList);
