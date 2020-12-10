# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#how
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


demo = User.create(username: 'DemoUser', password: 'demouser')
chatbot = User.create(username: 'chatbot', password: 'demouser')
chaibot = User.create(username: 'chaibot', password: 'chaibothaha')
leo = User.create(username: 'leothecorgi', password: '666666')
puff = User.create(username: 'puffthedoge', password: 'puffmombest')
ellie = User.create(username: 'ellie', password: 'ellieisacorgi')




generalchannel = Channel.create(name: 'general')
corgichat = Channel.create(name: 'corgiChat', public: false)
workchannel = Channel.create(name: 'work')
randomchannel = Channel.create(name: 'random')

member1 = Member.create(channel_id: corgichat.id, member_id: demo.id)
member2 = Member.create(channel_id: corgichat.id, member_id: leo.id)
member3 = Member.create(channel_id: corgichat.id, member_id: chaibot.id)