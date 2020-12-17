class ChatChannel < ApplicationCable::Channel
  def subscribed
    # debugger
    if(params[:channelId])
      @channel = (params[:channelId])
    elsif (params[:dmId])
      @dmchannel = params[:dmId]
    end
    stream_for @channel || @dmchannel
  end
  
  def speak(data)
    # debugger
  if data['channel_id']
    message = Cmessage.new(body: data['body'],author_id: data['author_id'], channel_id: data['channel_id'])
    if message.save
      socket = {message: message}
      ChatChannel.broadcast_to(data['channel_id'],socket)
    end
  elsif data['receiver_id']
    
    actual_receiver = data['receiver_id'].clone
    author_id = data['author_id']
    actual_receiver.slice!(author_id.to_s)
    # debugger
    message = Dmessage.new(body: data['body'],author_id: data['author_id'], receiver_id: actual_receiver)
    # debugger
    if message.save
      socket = {message: message}
      ChatChannel.broadcast_to(data['receiver_id'],socket)
    end
  end  
  end 

  def unsubscribed
    # Any cleanup needed when channel is unsubscribed
  end
end
