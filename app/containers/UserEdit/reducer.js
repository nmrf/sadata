/*
*
* UserEdit reducer
*
*/

import { combineReducers } from 'redux-immutable';
import { combineForms } from 'react-redux-form/immutable';

import { entitySaveReducer } from 'components/forms/EntityForm/utils';
import { UPDATE_ENTITY_FORM } from 'containers/App/constants';
import { FORM_INITIAL } from './constants';

function formReducer(state = FORM_INITIAL, action) {
  switch (action.type) {
    case UPDATE_ENTITY_FORM:
      return action.data;
    default:
      return state;
  }
}

export default combineReducers({
  page: entitySaveReducer,
  form: combineForms({
    data: formReducer,
  }, 'userEdit.form'),
});
