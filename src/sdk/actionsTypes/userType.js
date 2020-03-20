export default {
  checkUserAccess: {
    START: 'START/checkUserAccess',
    SUCCESS_LOGIN: 'SUCCESS_LOGIN/checkUserAccess',
    SUCCESS_REGISTERED: 'SUCCESS_REGISTERED/checkUserAccess',
    SUCCESS_ADMIN_ENTER: 'SUCCESS_ADMIN_ENTER/checkUserAccess',
    SUCCESS_BANNED: 'SUCCESS_BANNED/checkUserAccess',
    FINISH: 'FINISH/checkUserAccess',
    ERROR: 'ERROR/checkUserAccess',
  },

  login: {
    START: 'START/login',
    SUCCESS_PHONE: 'SUCCESS_PHONE/login',
    SHOW_NEXT_SIDE_OF_FORM: 'SHOW_NEXT_SIDE_OF_FORM/login',
    SHOW_PREV_SIDE_OF_FORM: 'SHOW_PREV_SIDE_OF_FORM/login',
    FINISH: 'FINISH/login',
    ERROR: 'ERROR/login',
  },

  error: {
    ON_UNREGISTERED_USER: 'ON_UNREGISTERED_USER/error',
    LOG_OUT_USER: 'LOG_OUT_USER/error',
  },
};
