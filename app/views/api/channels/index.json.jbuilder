@channels.each do |channel|
  json.set! channel.id do 
        json.partial! 'channel': channel
  end
end 