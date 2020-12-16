@dmessages.each do |dmessage| 
    json.set! dmessage.id do 
        json.id dmessage.id
        json.body dmessage.body
        json.author_id dmessage.author_id
        json.receiver_id dmessage.receiver_id
        json.created_at dmessage.created_at
    end
end