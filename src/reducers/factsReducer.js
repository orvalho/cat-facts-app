import {FETCH_FACTS} from 'actions/types';

export default(state = [], action) => {
  switch (action.type) {
    case FETCH_FACTS:
      const facts = action.payload.data.map(obj => ({text: obj.text, _id: obj._id}));
      return [...facts];
    default:
      return state;
  }
}
