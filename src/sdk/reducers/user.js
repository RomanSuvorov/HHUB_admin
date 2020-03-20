import { createReducer } from '../';
import { user as initialState } from '../store';
import { user as Types } from '../actionsTypes';

export default createReducer({
  // CHECK ACCESS
  [Types.checkUserAccess.START]: draft => draft.access.loading = true,

  [Types.checkUserAccess.SUCCESS_LOGIN]: draft => draft.access.isLoggedIn = true,

  [Types.checkUserAccess.SUCCESS_REGISTERED]: draft => draft.access.isRegistered = true,

  [Types.checkUserAccess.SUCCESS_ADMIN_ENTER]: draft => draft.access.isAdmin = true,

  [Types.checkUserAccess.SUCCESS_BANNED]: draft => draft.access.isBanned = true,

  [Types.checkUserAccess.ERROR]: (draft, payload) => draft.access.error = payload,

  [Types.checkUserAccess.FINISH]: draft => draft.access.loading = false,

  // LOGIN PROCESS
  [Types.login.START]: draft => draft.login.loading = true,

  [Types.login.SUCCESS_PHONE]: (draft, payload) => {
    draft.login.phone = payload;
    draft.login.error = undefined;
  },

  [Types.login.SUCCESS_LOGIN]: draft => {
    draft.access.isLoggedIn = true;
    draft.login.error = undefined;
  },

  [Types.login.SHOW_NEXT_SIDE_OF_FORM]: draft => draft.login.showSide = 2,

  [Types.login.SHOW_PREV_SIDE_OF_FORM]: draft => draft.login.showSide = 1,

  [Types.login.ERROR]: (draft, payload) => draft.login.error = payload,

  [Types.login.FINISH]: draft => draft.login.loading = false,

  // ERROR
  [Types.error.ON_UNREGISTERED_USER]: draft => draft.access.isRegistered = false,

  [Types.error.LOG_OUT_USER]: draft => draft.access.isLoggedIn = false,
}, initialState);
