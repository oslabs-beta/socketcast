import * as types from '../actions/actionTypes';

const initialState = {
  currentServerId: null,
  currentEvent: null,
  plannedResponseBoolean: false,
};

const navigationReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case types.SET_CURRENT_SERVER_ID: {
      const currentServerId = action.payload;
      return { ...state, currentServerId };
    }
    case types.TOGGLE_PLANNED_RESPONSE: {
      let plannedResponseBoolean = !state.plannedResponseBoolean
      return { ...state, plannedResponseBoolean}
    }
    default: {
      return state;
    }
  }
};

export default navigationReducer;
