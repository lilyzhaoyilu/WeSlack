import { connect } from 'react-redux';


import WorkSpace from './workspace';

const mapStateToProps = (state, ownProps) => {
  return {
    currentUser: state.session.currentUser,
    user: state.users,
    currentChannelId: ownProps.match.params.channelId,
    currentDMId: ownProps.match.params.dmId,
  };
};

const mapDispatchToProps = dispatch => ({
  
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(WorkSpace);
