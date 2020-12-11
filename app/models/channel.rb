class Channel < ApplicationRecord
  validates :name, presence: true, uniqueness: true
  validates :public, inclusion: { in: [ true, false ] }

  has_many :channelusers,
  foreign_key: :channel_id,
  class_name: :ChannelUser
  


  has_many :users, 
  through: :channelusers,
  source: :user
 
end
