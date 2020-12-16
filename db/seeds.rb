# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#how
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
Channel.destroy_all
ChannelUser.destroy_all
Cmessage.destroy_all


generalchannel = Channel.create(name: 'general')
corgichat = Channel.create(name: 'corgiChat', public: false )
workchannel = Channel.create(name: 'work')
randomchannel = Channel.create(name: 'random')



demo = User.create(username: 'DemoUser', password: 'demouser')
chatbot = User.create(username: 'chatbot', password: 'demouser')
chaibot = User.create(username: 'chaibot', password: 'chaibothaha')
leo = User.create(username: 'leothecorgi', password: '666666')
puff = User.create(username: 'puffthedoge', password: 'puffmombest')
ellie = User.create(username: 'ellie', password: 'ellieisacorgi')

member1 = ChannelUser.create(channel_id: corgichat.id, user_id: demo.id)

User.all.each do |user|
  Channel.all.each do |channel|
    if channel.public == true
      ChannelUser.create(channel_id: channel.id, user_id: user.id)
    end 
  end 
end 

message1 = Cmessage.create(body:"Hi WeSlack is pretty cool!", author_id: leo.id, channel_id: generalchannel.id)
message2 = Cmessage.create(body:"I totally agree! Yay communicating :)", author_id: chatbot.id, channel_id: generalchannel.id)

message3 = Cmessage.create(body:"woof corgis are the best?!?!", author_id: leo.id, channel_id: corgichat.id)


