@channels.each do |channel|
  json.set! channel.id do
    json.id channel.id
    json.name channel.name
    json.public channel.public
    json.description channel.description
  end 
end 