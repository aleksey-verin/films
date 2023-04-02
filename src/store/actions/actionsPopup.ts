export const ACTIONS_POPUP = {
  SET_IS_OPEN: 'SET_IS_OPEN'
}

export const setIsOpen = (payload: boolean) => ({
  type: ACTIONS_POPUP.SET_IS_OPEN,
  payload
})
