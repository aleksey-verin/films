export const ACTIONS_AUTH = {
  SET_IS_AUTH: 'SET_IS_AUTH'
}

export const setIsAuth = (payload: boolean) => ({
  type: ACTIONS_AUTH.SET_IS_AUTH,
  payload: payload
})
