class Dmessage < ApplicationRecord
  validates :body, :author_id, :receiver_id, presence: true

  belongs_to :author,
  foreign_key: :author_id,
  class_name: :User

  belongs_to :receiver,
  foreign_key: :author_id,
  class_name: :User
end
