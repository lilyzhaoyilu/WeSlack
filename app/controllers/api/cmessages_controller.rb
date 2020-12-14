class Api::CmessagesController < ApplicationController

  def create
    @cmessage = Cmessage.new(cmessage_params)
    # @channel_id = params[:channel_id]
    # debugger
    if @cmessage.save!
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
    render :index
  end 

  private 
  def cmessage_params
    params.require(:cmessage).permit(:body, :author_id, :channel_id)
  end 
end
