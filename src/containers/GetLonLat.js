import LonLat from '../components/LonLat'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { changeLatitude, changeLongitude } from '../store/actions'

const mapStateToProps = (state) => {
  return {
    longitude: state.longitude,
    latitude: state.latitude
  }
}

const putActionsToProps = (dispatch) => {
  return {
    changeLongitude: bindActionCreators(changeLongitude, dispatch),
    changeLatitude: bindActionCreators(changeLatitude, dispatch)
  }
}

const GetLonLat = connect(mapStateToProps, putActionsToProps)(LonLat)

export default GetLonLat
