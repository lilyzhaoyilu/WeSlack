  json.set! @cmessage.id do 
        json.id @cmessage.id
        json.body @cmessage.body
        json.author_id @cmessage.author_id
        json.created_at @cmessage.created_at
    end