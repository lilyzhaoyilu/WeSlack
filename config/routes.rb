Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  namespace :api, defaults: {format: :json} do

    resources :users, only: [:create, :show, :index] do
      resources :channels, only: [:index]
    end 

    resource :session, only: [:create, :destroy, :show]

    resources :channels, only: [:index, :create, :show, :update, :destroy] do 
      resources :users, only: [:index]
      resources :cmessages, only: [:create, :index]
    end 

    resources :channel_users, only: [:index, :create, :destroy]

    

    resources :dmessages, only: [:create, :index, :update, :show]
      
      
    
  mount ActionCable.server, at: '/cable'  
  end 

  

  
  root 'static_pages#root'
end
