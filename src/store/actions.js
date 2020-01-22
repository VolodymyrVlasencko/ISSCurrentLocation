import { ACTION_CHANGE_ISS_CREW,
         ACTION_CHANGE_ISS_LONGITUDE,
         ACTION_CHANGE_ISS_LATITUDE } from '../index'

export const changeLongitude = (newLongitude) => {
  return {
    type: ACTION_CHANGE_ISS_LONGITUDE,
    payload: newLongitude
  }
}

export const changeLatitude = (newLatitude) => {
  return {
    type: ACTION_CHANGE_ISS_LATITUDE,
    payload: newLatitude
  }
}

export const changeCrew = (newCrew) => {
  return {
    type: ACTION_CHANGE_ISS_CREW,
    payload: newCrew
  }
}
