class Api::ChannelsController < ApplicationController

  def index
    
    if params[:user_id] == current_user.id
      debugger
    @channels = current_user.channels #makesure only the current user s 
    render :index
    end 
  end

  def show
    @channel = channel.find(params[:id])
  end

  def create
    @channel = channel.new(channel_params)

    if @channel.save
      render :show
    else
      render json: @channel.errors.full_messages, status: 422
    end
  end

  def update
    @channel = channel.find(params[:id])

    if @channel.update(channel_params)
      render :show
    else
      render json: @channel.errors.full_messages, status: 422
    end
  end

  def destroy
    @channel = channel.find(params[:id])

    @channel.destroy
    redirect_to api/users/()
  end

  private

  def channel_params
    params.require(:channel).permit(:name, :public)
  end
end
