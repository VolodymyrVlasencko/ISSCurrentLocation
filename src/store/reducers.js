import { ACTION_CHANGE_ISS_CREW,
         ACTION_CHANGE_ISS_LONGITUDE,
         ACTION_CHANGE_ISS_LATITUDE } from '../index'

const initialState = {
  longitude: 0,
  latitude: 0,
  issCrew: []
}

export const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTION_CHANGE_ISS_LONGITUDE:
      return { ...state, longitude: action.payload };
    case ACTION_CHANGE_ISS_LATITUDE:
      return { ...state, latitude: action.payload };
    case ACTION_CHANGE_ISS_CREW:
      return { ...state, issCrew: action.payload };
  }
  return state
}
