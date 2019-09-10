import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SignInOne from './SignInOne';
import SignInTwo from './SignInTwo';

const SIGNIN_LAYOUTS = [SignInOne, SignInTwo]


class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }


  render() {
    const {
      bgUrl,
      form,
      validation,
      btnText,
      onPressBtn,
      option
    } = this.props;

    const Layout = SIGNIN_LAYOUTS[option - 1] || SIGNIN_LAYOUTS[0]

    return (
      <Layout
        form={form}
        bgUrl={bgUrl}
        btnText={btnText}
        validation={validation}
        onPressBtn={onPressBtn}
      />
    );
  }
}

export default SignIn;