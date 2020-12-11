class ChannelUser < ApplicationRecord
  validates :channel_id, uniqueness: { scope: :user_id }
  validates :channel_id, :user_id, presence: true

  belongs_to :user,
  foreign_key: :user_id, 
  class_name: :User 


  belongs_to :channel, 
  foreign_key: :channel_id,
  class_name: :Channel 
end