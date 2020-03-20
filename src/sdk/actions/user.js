import { user as Types } from '../actionsTypes';
import { hhsdk } from '../';
import { handleError } from '../utils';

export function checkUserAccess() {
  return async dispatch => {
    dispatch({ type: Types.checkUserAccess.START });

    try {
      const AccessToken = localStorage.getItem('access_token');

      if (AccessToken) {
        await dispatch({ type: Types.checkUserAccess.SUCCESS_LOGIN });
        const { hacker: Hacker } = await hhsdk.api.getHackerData(AccessToken);

        if (Hacker) {
          await dispatch({ type: Types.checkUserAccess.SUCCESS_REGISTERED });
          if (Hacker.role === 'admin') {
            await dispatch({ type: Types.checkUserAccess.SUCCESS_ADMIN_ENTER });
          } else if (Hacker.role === 'banned') {
            await dispatch({ type: Types.checkUserAccess.SUCCESS_BANNED });
          }
        }
      }
    } catch (e) {
      handleError({ dispatch, error: e.err });
    } finally {
      dispatch({ type: Types.checkUserAccess.FINISH });
    }
  };
}

export function checkPhone(phoneNumber) {
  return async dispatch => {
    dispatch({ type: Types.login.START });

    try {
      await hhsdk.api.checkUserPhone(phoneNumber);

      await dispatch({ type: Types.login.SUCCESS_PHONE, payload: phoneNumber });
      await dispatch({ type: Types.login.SHOW_NEXT_SIDE_OF_FORM })
    } catch (e) {
      dispatch({ type: Types.login.ERROR, payload: e });
    } finally {
      dispatch({ type: Types.login.FINISH });
    }
  };
}

export function checkCode(phoneNumber, codeNumber) {
  return async dispatch => {
    dispatch({ type: Types.login.START });

    try {
      const { response } = await hhsdk.api.checkUserCode(phoneNumber, codeNumber);
      const token = response.legal_token;

      if (token) localStorage.setItem('access_token', token);
      await dispatch({ type: Types.checkUserAccess.SUCCESS_LOGIN });
      await dispatch({ type: Types.login.SHOW_PREV_SIDE_OF_FORM });
    } catch (e) {
      dispatch({ type: Types.login.ERROR, payload: e });
    } finally {
      dispatch({ type: Types.login.FINISH });
    }
  };
}

export function goToPhoneNumberInput() {
  return dispatch => {
    dispatch({ type: Types.login.SHOW_PREV_SIDE_OF_FORM });
  };
}
