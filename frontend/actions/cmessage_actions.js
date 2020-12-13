import * as CMessageUtil from '../util/cmessage_api_utils';

export const RECEIVE_CMESSAGES = 'RECEIVE_CMESSAGES';
export const RECEIVE_CMESSAGE = 'RECEIVE_CMESSAGE';

const receiveCMessages = (cmessages) => {
  return {
    type: RECEIVE_CMESSAGES,
    cmessages
  }
}

// const receiveCMessage = (cmessage) => {
//   return {
//     type: RECEIVE_CMESSAGE,
//     cmessage
//   }
// }

// const createMessage (cmessage) => {
//   return
// }

export const createCMessage = (cmessage) => dispatch => (
  CMessageUtil.createMessage(cmessage).then(cmessages => (
    dispatch(receiveCMessages(cmessages)))
  )
);

export const fetchCMessages = (channelId) => dispatch => (
  CMessageUtil.fetchMessages(channelId)
  .then((cmessages) =>dispatch(receiveCMessages(cmessages)))
);