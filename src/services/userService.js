import { storageService } from '../services/storageService'
import { makeId } from '../services/utilService'


const KEY = 'USER'
var loggedUser;

export const userService = {
      getUser,
      signUp,
      addMove
}


function signUp(name) {
      const newUser = {
            _id: makeId(),
            name: name,
            coins: 100,
            moves: [
            ]
      }
      loggedUser = newUser
      storageService.store(KEY, loggedUser)
      return loggedUser
}

function addMove(contact, amount) {
      const move = {
            toId: contact._id,
            to: contact.name,
            at: Date.now(),
            amount: amount.amount
      }
      loggedUser.moves.push(move)
      loggedUser.coins=loggedUser.coins-amount.amount
      storageService.store(KEY, loggedUser)
      return loggedUser
}

function getUser() {
      return loggedUser;
}

