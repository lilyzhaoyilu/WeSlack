export const fetchAllUsers = () =>{
  return $.ajax({
    url:`/api/users`,
    method: 'GET'
  })
}