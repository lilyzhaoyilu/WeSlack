export const fetchMessages = (currentUserId,otherPersonId) =>{
  return $.ajax({
    url:`/api/dmessages`,
    method:"GET",
    data: {other_person_id: otherPersonId,
    current_user_id:currentUserId}
  })
}

export const createMessage = (dmessage) =>{
  console.log(dmessage);
  return $.ajax({
    url:`/api/dmessages`,
    method:"POST",
    data: {dmessage}
  })
}


// export const createMessage = (currentUserId, otherPersonId, message) =>{
//   console.log({other_person_id: otherPersonId,current_user_id:currentUserId,
//     body: message});
//   return $.ajax({
//     url:`/api/dmessages`,
//     method:"POST",
//     data: {other_person_id: otherPersonId,current_user_id:currentUserId,
//     body: message}
//   })
// }