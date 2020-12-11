class Api::ChannelsController < ApplicationController
  # after_create :cast_channel_to_users
  def index
  
  if params[:user_id]
    @channels = current_user.channels 
    render :index 
  else 
    render json:["error"], status: 401
    #render json: ["Invalid username/password combination"], status: 401
  end
    
     
  end

  def show
    @channel = Channel.find(params[:id])
    render json: @channel
  end

  def create
    @channel = Channel.new(channel_params)
    @channel.public = @channel.public == "true" ? true : false
    if @channel.save!
      if @channel.public == true
        @users = User.all
        @users.each do |user|
        ChannelUser.create(channel.id = @channel.id, user_id = user.id)
        end 
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
    redirect_to api/users/()
  end

  private

  def channel_params
    params.require(:channel).permit(:name, :public)
  end

  # def cast_channel_to_users
    
  #   end 
  # end 
end
