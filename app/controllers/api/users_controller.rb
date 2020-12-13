class Api::UsersController < ApplicationController
  
  def create
    @user = User.new(user_params)

    if @user.save
      login(@user) 
      @channels.each do |channel|
        ChannelUser.create(user_id: @user.id, channel_id: channel.id)
      end 
      render 'api/users/show'
    else 
      render json: @user.errors.full_messages, status: 422
    end 
  end 

  def show
    @user = User.find(params[:id])
    render :show
  end 


  def index
    @users = User.all
    
    
    render :index
  end 

  private
  def user_params
    params.require(:user).permit(:username,:password)
  end 
end





