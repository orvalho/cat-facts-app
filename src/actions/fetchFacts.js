import axios from 'axios';

import {FETCH_FACTS} from 'actions/types';

export default() => {
  const response = axios.get('https://cors-anywhere.herokuapp.com/https://cat-fact.herokuapp.com/facts/random?animal_type=cat&amount=3');
  return ({type: FETCH_FACTS, payload: response});
};
