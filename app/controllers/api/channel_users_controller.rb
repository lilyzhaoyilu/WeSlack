class Api::ChannelUsersController < ApplicationController
  
  def index
    if params[:channelId]
      @channelusers = ChannelUser.where(channel_id: params[:channelId])
      render 'api/channel_users/index'
    else 
      render json: ["Invalid action"], status: 401
    end 
  end 
  

  def create
    @channeluser = ChannelUser.new(channeluser_params)
    # debugger;
    if @channeluser.save
      
    else 
      render json: ["Invalid action"], status: 401
    end 
  end 

  def destroy
    @channeluser = ChannelUser.find_by(user_id: params[:channeluser][:user_id], channel_id: params[:channeluser][:channel_id])
    if @channeluser
      @channeluser.destroy
    else 
      render json: ["something went wrong while you try to leave the channel"], status: 404
    end 

  end 

  private
  def channeluser_params
    params.require(:channeluser).permit(:user_id, :channel_id, :pending)
  end 
  
  
end
