class Channel < ApplicationRecord
  validates :name, presence: true, uniqueness: true
  validates :public, inclusion: { in: [ true, false ] }

  has_many :members
end
