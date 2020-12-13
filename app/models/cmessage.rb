class Cmessage < ApplicationRecord
  validates :body, :author_id, :channel_id, presence: true

  belongs_to :user,
  foreign_key: :author_id,
  class_name: :User

  belongs_to :channel,
  foreign_key: :channel_id,
  class_name: :Channel

end
