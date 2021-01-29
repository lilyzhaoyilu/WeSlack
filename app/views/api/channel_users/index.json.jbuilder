@channelusers.each do |channeluser|

  json.set! channeluser.user_id do
  json.userId channeluser.user_id
  json.pending channeluser.pending
  end 
end 