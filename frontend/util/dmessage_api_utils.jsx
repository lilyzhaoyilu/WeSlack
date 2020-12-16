export const fetchMessages = (currentUserId,otherPersonId) =>{
  return $.ajax({
    url:`/api/dmessages`,
    method:"GET",
    data: {other_person_id: otherPersonId,
    current_user_id:currentUserId}
  })
}

export const createMessage = (dmessage) =>{

  return $.ajax({
    url:`/api/dmessages`,
    method:"POST",
    data: {dmessage}
  })
}

