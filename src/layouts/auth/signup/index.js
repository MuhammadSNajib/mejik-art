import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SignUpOne from './SignUpOne';
import SignUpTwo from './SignUpTwo';
import SignUpThree from './SignUpThree';
// import SignUpFour from './SignUpFour';
// import SignUpFive from './SignUpFive';
// SignUpFour, SignUpFive
const SignUp_LAYOUTS = [SignUpOne, SignUpTwo, SignUpThree ]


class SignUp extends Component {
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

    const Layout = SignUp_LAYOUTS[option - 1] || SignUp_LAYOUTS[0]

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

export default SignUp;