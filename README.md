# README

![weslack](https://github.com/lilyzhaoyilu/WeSlack/blob/main/app/assets/images/weslack.png)  
_The icon is from https://icons8.com/icon/46825/slack, thanks to the creator!_

### [LiveApp](https://weslackin.herokuapp.com/#/)

---

WeSlack is a solo demo project that clones Slack. It is a communication webapp where users can send live messages in channels and directly to each other. It was built utilizing a Ruby on Rails backend with a React/Redux fronted.

This project was created within approximately 10 days as a demo project, and this is my first solo project. There are many parts that can be improved, but hey, it is how things start.

## Features

![Main Page](https://github.com/lilyzhaoyilu/WeSlack/blob/main/app/assets/images/client.png)

### User Authentication

- BCrypt encrypted user authentication from frontend to backend
- Users can sign up, and log in. When they log in, their information is still there.
- After users login, they can refresh page without being logged out.
- Can log out through right top corner.
- Before logging in, users will be redirected to the login page.

### Channels

- On users' side bar
  - Only the channles that a user has joined will show up on the user's page
  - Users can click to go to different channels
- About channels' authentication
  - Users can't send messages in the channel they haven't joined
  - Users can leave a channel
  - Users can create a channel
    - create channel button is disabled when the channel name is empty
    - can choose to create a public or private channel
    - can put description in the creation channel form
    - can exit the create channel form
    - the form disapears after creating the channel successfully
  - Users can see all the channels through searching, and request to join
    - if a user requests to join a public channel, the requst will be permitted immediately.
    - if a user requests to join a private channel, it shows that the request has been sent
- About channels' info and member list
  - Users can see the member number and mumber list in the channel
  - Users can click on the member list and send direct message to the member
  - Users can see the name and the channel description

![Channel members and buttons](https://github.com/lilyzhaoyilu/WeSlack/blob/main/app/assets/images/memberlist.png)

### Direct Messages

- Users can send messages to other users

### Live Messaging

- Live messaging is implemented by using Action Cable
- Works in both channels and direct messages
- Can send with _enter_ and add a line with _enter + ctrl_
- Send is disabled when the input area is empty

### Search

- Can search all channels, including the ones that the user has not joined
- Can search all users
- Auto matches search text (_the search function is implemented through a very naive approach that will only work for demo purpose/very small amount of data_)
- Users can click on the search result and be redirected to the message page to the corresponding channel/user.
  ![Search](https://github.com/lilyzhaoyilu/WeSlack/blob/main/app/assets/images/search.png)

local start:
pgstart(customized alias to start postgresql)
rails s
npm run webpack
