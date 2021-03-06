// import Resource from '../utils/resource';
import Resource from '../utils/resource';

export default new Resource('/AppUsers', {
  login: {
    url: 'login',
    method: 'post',
  },
  requestPasswordReset: {
    url: 'reset',
    method: 'post',
  },
  setPassword: {
    url: 'reset-password?access_token={reset_password_token}',
    method: 'post',
  },
  sendVerifyEmail: {
    url: 'sendverifyemail',
    method: 'post',
  },
  approveVerificationInfo: {
    url: '{id}/approveVerification',
    method: 'post',
  },
  rejectVerificationInfo: {
    url: '{id}/rejectVerification',
    method: 'post',
  },
  getVerificationInfo: {
    url: '{ownerId}/verificationinfomation',
    method: 'get',
    defaultParams: {
      ownerId: 'me',
    },
  },
  createVerificationInfo: {
    url: '{ownerId}/verificationinfomation',
    method: 'post',
    defaultParams: {
      ownerId: 'me',
    },
  },
  updateVerificationInfo: {
    url: '{ownerId}/verificationinfomation',
    method: 'put',
    defaultParams: {
      ownerId: 'me',
    },
  },
});
