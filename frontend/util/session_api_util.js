
export const signUp = (user) =>{
  return $.ajax({
    url:"/api/users",
    method:"POST",
    data: {user}
  })
}

// export const login = (user, password) =>

export const check = (userId) =>{
  return $.ajax({
    url:`/api/users/${userId}`,
  })
}