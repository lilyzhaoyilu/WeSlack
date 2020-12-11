class Api::ChannelsController < ApplicationController
  # after_create :cast_channel_to_users
  def index
    if params[:user_id]
      @channels = current_user.channels 
      render :index 
    else 
      render json:["error"], status: 401
    end     
  end

  def show
    @channel = Channel.find(params[:id])
    render json: @channel
  end

  def create
    @channel = Channel.new(channel_params)
    # debugger
    # @channel.public = @channel.public == true ? true : false
    if @channel.save
      if @channel.public == true
        @users = User.all
        @users.each do |user|
          ChannelUser.create(channel_id: @channel.id, user_id: user.id)
        end 
      else 
        ChannelUser.create(channel_id: @channel.id, user_id: current_user.id)
      end 
      render :show
    else
      render json: ["invalid creation"], status: 422
    end
  end

  def update
    @channel = Channel.find(params[:id])

    if @channel.update(channel_params)
      render :show
    else
      render json: @channel.errors.full_messages, status: 422
    end
  end

  def destroy
    @channel = Channel.find(params[:id])
    @channel.destroy
    
  end

  private

  def channel_params
    params.require(:channel).permit(:name, :public)
  end

  # def cast_channel_to_users
    
  #   end 
  # end 
end
