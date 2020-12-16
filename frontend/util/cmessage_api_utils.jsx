export const fetchMessages = (channelId) =>{
  return $.ajax({
    url:`/api/channels/${channelId}/cmessages`,
    method:"GET",
  })
}

export const createMessage = (cmessage) =>{
  return $.ajax({
    url:`/api/channels/${cmessage.channel_id}/cmessages`,
    method:"POST",
    data: {cmessage}
  })
}


