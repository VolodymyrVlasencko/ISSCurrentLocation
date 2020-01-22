import Crew from '../components/Crew'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { changeCrew } from '../store/actions'


const mapStateToProps = (state) => {
  return {
    issCrew: state.issCrew
  }
}

const putActionsToProps = (dispatch) => {
  return {
    changeCrew: bindActionCreators(changeCrew, dispatch)
  }
}

const GetCrew = connect(mapStateToProps, putActionsToProps)(Crew)

export default GetCrew
