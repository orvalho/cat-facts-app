import './GetFactsButton.css';
import React, {Component} from 'react';
import {connect} from 'react-redux';

import {fetchFacts} from 'actions';

class GetFactsButton extends Component {
  state = {
    buttonText: 'show me some facts about cats'
  };

  handleClick = () => {
    this.props.fetchFacts();
    if (!this.state.buttonText.includes('more')) {
      this.setState({buttonText: 'show me some more facts about cats'});
    }
  };

  render() {
    return (<button className="get-facts-button ui olive button" onClick={this.handleClick}>
      {this.state.buttonText}
    </button>);
  }
}

export default connect(null, {fetchFacts})(GetFactsButton);
