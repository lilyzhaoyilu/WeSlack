class DmChannel < ApplicationRecord
  validates :user1, user2, presence: true
  validates :user2, uniqueness: {scope: :user1}
end
