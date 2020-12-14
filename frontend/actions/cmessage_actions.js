import * as CMessageUtil from '../util/cmessage_api_utils';

export const RECEIVE_CMESSAGES = 'RECEIVE_CMESSAGES';
export const RECEIVE_CMESSAGE = 'RECEIVE_CMESSAGE';

const receiveCMessages = (messages) => {
  return {
    type: RECEIVE_CMESSAGES,
    messages
  }
}

const receiveCMessage = (message) => {
  return {
    type: RECEIVE_CMESSAGE,
    message
  }
}

// const createMessage (cmessage) => {
//   return
// }

export const createCMessage = (message) => dispatch => (
  CMessageUtil.createMessage(message).then(message => (
    dispatch(receiveCMessage(message)))
  )
);

export const fetchCMessages = (channelId) => dispatch => (
  CMessageUtil.fetchMessages(channelId)
  .then((messages) =>dispatch(receiveCMessages(messages)))
);