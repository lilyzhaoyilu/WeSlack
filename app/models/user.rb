class User < ApplicationRecord
  validates :username, :password_digest, :session_token, presence: true
  validates :username, uniqueness: true
  validates :password, length: {minimum: 6}, allow_nil:true

  after_initialize :ensure_session_token, :set_default_image_url
  attr_reader :password
  #spire

  def self.find_by_credentials(username, password)
    user = User.find_by_credentials(username: username)
    user.&is_password?(password) && user
  end 

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  #TODO:how to default an image url when registering

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

  def set_default_image_url
    self.image_url = 'defaulturl'
  end 
  
  
end
