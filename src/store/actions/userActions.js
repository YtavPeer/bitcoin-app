import { userService } from '../../services/userService'


export function onTransferCoins(contact, spendAmount) {
  console.log('the contact is', contact, 'the amount is:', spendAmount)
  return async dispatch => {
    // Update the userService
    const newUser = await userService.addMove(contact, spendAmount)
    dispatch({ type: 'SET_USER', newUser })
  }
}



export function signUp(userName) {
  return async dispatch => {
    console.log('the new user back is:', userName)
    const newUser = await userService.signUp(userName.userName)
    console.log('the new user back is:', newUser)
    dispatch({ type: 'SET_USER', newUser })
  }
}






