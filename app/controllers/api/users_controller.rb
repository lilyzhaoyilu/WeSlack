class Api::UsersController < ApplicationController
  
  def create
    @user = User.new(user_params)
    @channels = Channel.where(public: true)

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
    render json:@user
  end 


  def index
    @users = User.all
    render json:@users
  end 

  private
  def user_params
    params.require(:user).permit(:username,:password)
  end 
end





