import axios from 'axios'
import { SERVICE_POST_MAIL_CONTACT_US } from 'Constants'
import {
  POST_MAIL_CONTACT_US_REQUEST,
  POST_MAIL_CONTACT_US_SUCCESS,
  POST_MAIL_CONTACT_US_FAILURE,
  POST_MAIL_CONTACT_US_CLEAR,
} from 'Actions'

function postMailContactUsRequest() {
  return {
    type: POST_MAIL_CONTACT_US_REQUEST,
  }
}

function postMailContactUsSuccess() {
  return {
    type: POST_MAIL_CONTACT_US_SUCCESS,
  }
}

function postMailContactUsFailure() {
  return {
    type: POST_MAIL_CONTACT_US_FAILURE,
  }
}

export function postMailContactUsClear() {
  return {
    type: POST_MAIL_CONTACT_US_CLEAR,
  }
}

export function postMailContactUs({ name, email, phoneNumber, company, yourMind }) {
  const options = {
    method: 'post',
    url: SERVICE_POST_MAIL_CONTACT_US,
    data: {
      name,
      email,
      phoneNumber,
      company,
      yourMind,
    }
  }
  return dispatch => {
    dispatch(postMailContactUsRequest())
    
    axios(options)
    .then((resp) => {
      dispatch(postMailContactUsSuccess());
    })
    .catch((err) => {
      dispatch(postMailContactUsFailure());
    })
    .then(() => dispatch(postMailContactUsClear()));
  }
}