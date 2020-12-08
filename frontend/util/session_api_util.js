
export const signUp = (user) =>{
  return $.ajax({
    url:"/api/users",
    method:"POST",
    data: {user}
  })
}