class ChannelUser < ApplicationRecord

  belongs_to :user,
  foreign_key: :user_id, 
  class_name: :User 


  belongs_to :channel, 
  foreign_key: :channel_id,
  class_name: :Channel 
end