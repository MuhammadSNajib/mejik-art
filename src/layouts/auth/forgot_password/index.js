import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ForgotPasswordOne from './ForgotPasswordOne';

const FORGOT_PASSWORD_LAYOUTS = [ForgotPasswordOne]


class ForgotPassword extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }


  render() {
    const {
      bgImg,
      fields,
      btnSubmit,
      option,
    } = this.props;

    const Layout = FORGOT_PASSWORD_LAYOUTS[option - 1] || FORGOT_PASSWORD_LAYOUTS[0]

    return (
      <Layout
        bgImg={bgImg}
        fields={fields}
        btnSubmit={btnSubmit}
      // {...this.props}
      />
    );
  }
}

ForgotPassword.PropTypes = {
  option : PropTypes.number,
  bgImg : PropTypes.object,
  fields : PropTypes.arrayOf(PropTypes.object),
  btnSubmit : PropTypes.object
}

export default ForgotPassword;