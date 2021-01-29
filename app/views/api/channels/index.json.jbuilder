@channels.each do |channel|
  json.set! channel.id do
    json.id channel.id
    json.name channel.name
    json.public channel.public
    json.description channel.description
    json.admin_id channel.admin_id
  end 
end 