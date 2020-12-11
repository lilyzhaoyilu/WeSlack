class Api::ChannelsController < ApplicationController

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

    if @channel.save
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
end
