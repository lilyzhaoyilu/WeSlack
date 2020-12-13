class Api::CmessagesController < ApplicationController

  def create
    @cmessage = Cmessage.new(cmessage_params)
    if @cmessage.save
      render :show
    else 
      render json: @cmessage.errors.full_messages 
    end 
  end 

  def index
    if params[:channel_id]
      @channel = Channel.find(params[:channel_id])
      @cmessages = @channel.messages
    end 
  end 

  private 
  def cmessage_params
    params.require(:cmessages).permit(:body, :author_id, :channel_id)
  end 
end
