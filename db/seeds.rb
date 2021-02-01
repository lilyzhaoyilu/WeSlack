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






demo = User.create(username: 'DemoUser', password: 'demouser')
chatbot = User.create(username: 'Chatbot', password: 'iamchatbot')
leo = User.create(username: 'Leo the Corgi', password: '666666')
puff = User.create(username: 'Puff Doge', password: 'puffmombest')
kyle =  User.create(username: 'Kyle Francis', password: 'cohorthaha')
owen = User.create(username: 'Owen Webb', password: 'cohorthaha')
elizabeth = User.create(username: 'Elizabeth Wright',  password: 'cohorthaha')
lucy = User.create(username: 'Lucy Wang',  password: 'cohorthaha')
cohorthost = User.create(username: 'Cohort',  password: 'cohorthaaha')


generalchannel = Channel.create(name: 'general', description: 'this is the general channel', admin_id: demo.id)
privatechat = Channel.create(name: 'private-chat', public: false, description: 'a private channel', admin_id: demo.id )
demochannel = Channel.create(name: 'check-out-channel-features', description: 'Things you want to know about WeSlack', admin_id: demo.id)
randomchannel = Channel.create(name: 'random', description: "random stuff", admin_id: demo.id)
cohort = Channel.create(name: '09-20-sf-cohort', description: 'topic for this week is MERN!', admin_id: cohorthost.id)
deletechannel = Channel.create(name: 'try-delete-this-channel', description: 'try to delete this channel~', admin_id: demo.id)
tryleave = Channel.create(name: 'try-leave-this-channel', description: 'try leave this channel!', admin_id: elizabeth.id)



member1 = ChannelUser.create(channel_id: privatechat.id, user_id: demo.id)

User.all.each do |user|
  Channel.all.each do |channel|
    if channel.public == true
      ChannelUser.create(channel_id: channel.id, user_id: user.id)
    end 
  end 
end 

christmas = Channel.create(name: 'christmas-plans', description: 'this is for the christmas plans!', admin_id: demo.id)
christmasprivate = Channel.create(name: 'christmas-secret-plans', description: 'a private channel ~', public: false, admin_id: leo.id)

message1 = Cmessage.create(body:"Hi WeSlack is pretty cool!", author_id: leo.id, channel_id: generalchannel.id)
message2 = Cmessage.create(body:"I totally agree! Yay communicating :)", author_id: chatbot.id, channel_id: generalchannel.id)
message3 = Cmessage.create(body:"I am excited to be here ヾ(◍°∇°◍)ﾉﾞ", author_id: puff.id, channel_id: generalchannel.id)
message9 = Cmessage.create(body:"happy to be here!", author_id: lucy.id, channel_id: cohort.id)
message4 = Cmessage.create(body:"woof who wants to meet up Friday afternoon?!?!", author_id: leo.id, channel_id: privatechat.id)
message7 = Cmessage.create(body:"Hi I am new here, nice to meet everybody and look forward to knowing you all!", author_id: elizabeth.id, channel_id: generalchannel.id)
message8 = Cmessage.create(body:"Welcome! It is very nice to have you here!", author_id: chatbot.id, channel_id: generalchannel.id)

message10 = Cmessage.create(body:"You can join and leave a channel", author_id: chatbot.id, channel_id: demochannel.id)
message11 = Cmessage.create(body:"Channel #christmas-plans is waiting for you to join!", author_id: chatbot.id, channel_id: demochannel.id)
message12 = Cmessage.create(body:"There is another channel called christmas-secret-plans, but it is a private channel. You can request to join, but you have to wait for premission~", author_id: chatbot.id, channel_id: demochannel.id)
message13 = Cmessage.create(body:"You can also check out the channel members by clicking the ! in the top right corner.", author_id: chatbot.id, channel_id: demochannel.id)
message14 = Cmessage.create(body:"you can also try to leave a channel, the button is next to the channel info. Sad to see you go T_T", author_id: chatbot.id, channel_id: demochannel.id)
message15 = Cmessage.create(body:"Leave the channels that you are not an admin by clicking the leaving icon", author_id: chatbot.id, channel_id: tryleave.id)

message5 = Dmessage.create(body:"Hi nice to meet you", author_id: lucy.id, receiver_id: demo.id)
message6 = Dmessage.create(body:"Hi I like the project you made! I was wondering if we could meet up and grab a coffee some time?", author_id: elizabeth.id, receiver_id: demo.id)




User.all.each do |user|
  if user.id != demo.id
      ChannelUser.create(channel_id: christmasprivate.id, user_id: user.id)
      ChannelUser.create(channel_id: christmas.id, user_id: user.id)
  end  
end 