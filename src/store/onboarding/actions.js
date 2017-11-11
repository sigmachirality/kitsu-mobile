import * as types from 'kitsu/store/types';
import { kitsuConfig } from 'kitsu/config/env';

export const completeOnboarding = () => (dispatch) => {
  dispatch({ type: types.COMPLETE_ONBOARDING });
};

export const setScreenName = screenName => (dispatch) => {
  dispatch({ type: types.SET_SCREEN_NAME, payload: screenName });
};

export const setSelectedAccount = account => (dispatch) => {
  dispatch({ type: types.SET_SELECTED_ACCOUNT, payload: account });
};

export const updateFavorites = favs => (dispatch) => {
  dispatch({ type: types.UPDATE_FAVORITES, payload: favs });
};

export const rateAnimes = () => (dispatch) => {
  dispatch({ type: types.RATE_ANIMES });
};

export const getAccountConflicts = () => async (dispatch, getState) => {
  dispatch({ type: types.GET_ACCOUNT_CONFLICTS });
  const token = getState().auth.tokens.access_token;
  try {
    const headers = new Headers();
    headers.append('Authorization', `Bearer ${token}`);
    const payload = await fetch(`${kitsuConfig.baseUrl}/edge/users/_conflicts`, {
      method: 'GET',
      headers,
    }).then(res => res.json());
    dispatch({ type: types.GET_ACCOUNT_CONFLICTS_SUCCESS, payload });
  } catch (e) {
    dispatch({ type: types.GET_ACCOUNT_CONFLICTS_FAIL, payload: 'Failed to load user' });
  }
};

export const resolveAccountConflicts = account => async (dispatch, getState) => {
  dispatch({ type: types.RESOLVE_ACCOUNT_CONFLICTS });
  const token = getState().auth.tokens.access_token;
  try {
    const headers = new Headers();
    headers.append('Authorization', `Bearer ${token}`);
    headers.append('Content-Type', 'application/json');
    const body = JSON.stringify({
      chosen: account,
    });
    const payload = await fetch(`${kitsuConfig.baseUrl}/edge/users/_conflicts`, {
      method: 'POST',
      headers,
      body,
    }).then(res => res.json());
    dispatch({ type: types.RESOLVE_ACCOUNT_CONFLICTS_SUCCESS, payload });
    return true;
  } catch (e) {
    dispatch({ type: types.RESOLVE_ACCOUNT_CONFLICTS_FAIL, payload: 'Failed to load user' });
    return false;
  }
};
