class User < ApplicationRecord
  validates :username, :password_digest, :session_token, presence: true
  validates :username, uniqueness: true
  validates :password, length: {minimum: 6}, allow_nil:true

  after_initialize :ensure_session_token, :set_default_image_url
  attr_reader :password

  has_many :channelusers,
  foreign_key: :user_id,
  class_name: :ChannelUser
  

  has_many :channels,
  through: :channelusers,
  source: :channel
  

  #spire

  

  def self.find_by_credentials(username, password)
    user = User.find_by(username: username)
    return nil unless user
    user.is_password?(password) ? user : nil
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

 

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def reset_session_token!
    self.session_token = SecureRandom.urlsafe_base64
    save!
    self.session_token
  end 

  def ensure_session_token
    self.session_token = SecureRandom.urlsafe_base64
  end 
  
private 
  def set_default_image_url
    self.image_url = 'defaultpicture'
  end 
  
  
end
