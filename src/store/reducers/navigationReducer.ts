import * as types from '../actions/actionTypes';

const initialState = {
  currentServerId: null,
  currentEvent: null,
};

const navigationReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case types.SET_CURRENT_SERVER_ID: {
      const currentServerId = action.payload;
      return { ...state, currentServerId };
    }
    default: {
      return state;
    }
  }
};

export default navigationReducer;
