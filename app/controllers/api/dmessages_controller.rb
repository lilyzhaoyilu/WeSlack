class Api::DmessagesController < ApplicationController

  def index
    other_person_id = params[:other_person_id]
    current_user_id = params[:current_user_id]
    

    dmessages1 = Dmessage.where(author_id: current_user_id, receiver_id: other_person_id)
    dmessages2 = Dmessage.where(author_id: other_person_id, receiver_id: current_user_id)
    @dmessages = dmessages1 + dmessages2
   
    render :index

  end 

  def create
    @dmessage = Dmessage.new(dmessage_params)
    
    if @dmessage.save!
      render :show
    else 
      render json: @dmessage.errors.full_messages 
    end 
  end 

  def show 

  end 

  def update
    @dmessage = Dmessages.find(params[:id])
    if @dmessage.save!
      render :show
    else 
      render json: @dmessage.errors.full_messages 
    end 
  end 

  private 
  def dmessage_params
    params.require(:dmessage).permit(:body, :author_id, :receiver_id)
  end 
end
