@channelusers.each do |channeluser|
  json.set! channeluser.id do
  json.userId channeluser.user_id
  end 
end 