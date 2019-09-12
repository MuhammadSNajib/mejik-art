import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SignInOne from './SignInOne';
import SignInTwo from './SignInTwo';
import SignInThree from './SignInThree';
import SignInFour from './SignInFour';
import SignInFive from './SignInFive';
const SIGNIN_LAYOUTS = [SignInOne, SignInTwo, SignInThree, SignInFour, SignInFive]


class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }


  render() {
    const {
      bgImg,
      fields,
      socialButtons,
      btnSubmit,
      option
    } = this.props;

    const Layout = SIGNIN_LAYOUTS[option - 1] || SIGNIN_LAYOUTS[0]

    return (
      <Layout
        bgImg={bgImg}
        fields={fields}
        socialButtons={socialButtons}
        btnSubmit={btnSubmit}
      // {...this.props}
      />
    );
  }
}

export default SignIn;