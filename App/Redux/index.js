import { combineReducers } from 'redux'
import configureStore from './CreateStore'
import rootSaga from '../Sagas/'

export default () => {
  /* ------------- Assemble The Reducers ------------- */
  const rootReducer = combineReducers({
    startup: require('./StartupRedux').reducer,
    live: require('./LiveRedux').reducer
  })

  return configureStore(rootReducer, rootSaga)
}
