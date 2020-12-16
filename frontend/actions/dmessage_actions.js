import * as DMessageUtil from '../util/dmessage_api_utils';
export const RECEIVE_DMESSAGES = 'RECEIVE_DMESSAGES';
export const RECEIVE_DMESSAGE = 'RECEIVE_DMESSAGE';

const receiveDMessages = (messages) => {
  return {
    type: RECEIVE_DMESSAGES,
    messages
  }
}

const receiveDMessage = (message) => {
  return {
    type: RECEIVE_DMESSAGE,
    message
  }
}

export const createDMessage = (message) => dispatch => (
  DMessageUtil.createMessage(message).then(message => (
    dispatch(receiveDMessage(message)))
  )
);


// export const createDMessage = (currentUserId, otherPersonId, message) => dispatch => (
//   DMessageUtil.createMessage(currentUserId, otherPersonId, message).then(message => (
//     dispatch(receiveDMessage(message)))
//   )
// );

export const fetchDMessages = (currentUserId,otherPersonId) => dispatch => (
  DMessageUtil.fetchMessages(currentUserId,otherPersonId)
  .then((messages) => dispatch(receiveDMessages(messages)))
);