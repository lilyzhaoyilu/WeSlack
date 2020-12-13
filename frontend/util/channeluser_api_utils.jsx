export const fetchChannelUsers = (channelId) =>{
  return $.ajax({
    url:`/api/channel_users`,
    method:"GET",
    data: {channelId:channelId}
  })
}

export const createChannelUser = (channelId, userId) =>{
  return $.ajax({
    url:`/api/channel_users`,
    method:"POST",
    data: {channeluser:{
      user_id:userId,
      channel_id:channelId
    }}
  })
}

export const deleteChannelUser = (channelId, userId) =>{
  return $.ajax({
    url:`/api/channel_users/${userId}`,
    method:"DELETE",
    data: {channeluser:{
      user_id:userId,
      channel_id:channelId
    }}
  })
}