json.users @users do |user|
  json.user.id! do 
  json.partial! "api/users/user", user: user
  end
end 