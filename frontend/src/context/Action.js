export const LoginStart = (userCredn) => ({
  type: "LOGINSTART",
})
export const LoginSucc = (user) => ({
  type: "LOGINSUCC",
  payload: user,
})
export const LoginFailure = () => ({
  type: "LOGINFAILED",
})

export const Logout = () => ({
  type: "LOGOUT",
})

export const updateStart = (userCredn) => ({
  type: "UPDATE_START",
})
export const updateSucc = (user) => ({
  type: "UPDATE_SUCC",
  payload: user,
})
export const updateFailure = () => ({
  type: "UPDATE_FAILED",
})
