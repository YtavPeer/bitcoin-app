export const userService = {
      getUser,
}

const loggedUser = {
      "_id": "5a56640269f44sdgsg2ca",
      "name": "moshe",
      "coins": 125,
      "moves": []
}

function getUser() {
      return loggedUser
}
