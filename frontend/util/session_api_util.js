
export const signup = (user) =>{
  return $.ajax({
    url:"/api/users",
    method:"POST",
    data: {user}
  })
}

export const check = (userId) =>{
  return $.ajax({
    url:`/api/users/${userId}`,
  })
}

export const login = user => (
  $.ajax({
    method: 'POST',
    url: '/api/session',
    data: { user }
  })
);

export const logout = () => (
  $.ajax({
    method: 'DELETE',
    url: '/api/session'
  })
);
