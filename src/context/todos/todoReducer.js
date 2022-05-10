import { GET_TODOS } from '../types';

// eslint-disable-next-line import/no-anonymous-default-export
export default (state, action) => {
  switch (action.type) {
    case GET_TODOS:
      return;
    default:
      return state;
  }
};
