import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ProfileOne from './ProfileOne';
import ProfileTwo from './ProfileTwo';
import ProfileThree from './ProfileThree';
import ProfileFour from './ProfileFour';
import ProfileFive from './ProfileFive';
import ProfileSix from './ProfileSix';
import ProfileSeven from './ProfileSeven';
const PROFILE_LAYOUTS = [ProfileOne, ProfileTwo, ProfileThree, ProfileFour, ProfileFive, ProfileSix, ProfileSeven]


class Profile extends Component {
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
      option,
    } = this.props;

    const Layout = PROFILE_LAYOUTS[option - 1] || PROFILE_LAYOUTS[0]

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

Profile.PropTypes = {
  option : PropTypes.number,
  bgImg : PropTypes.object,
  socialButtons : PropTypes.arrayOf(PropTypes.object),
  fields : PropTypes.arrayOf(PropTypes.object),
  btnSubmit : PropTypes.object
}

export default Profile;