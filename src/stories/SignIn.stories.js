import React from 'react';

import { storiesOf } from '@storybook/react-native';
import { action } from '@storybook/addon-actions';
import { withKnobs, object, text, number, } from '@storybook/addon-knobs';

import SignInOne from './../layouts/auth/signin/SignInOne';
import SignInTwo from './../layouts/auth/signin/SignInTwo';
import SignInThree from './../layouts/auth/signin/SignInThree';
import SignInFour from './../layouts/auth/signin/SignInFour';
import SignInFive from './../layouts/auth/signin/SignInFive';

const props = {
  bgImg: {
    url: 'https://i.pinimg.com/originals/61/24/a4/6124a4600cbbb5869641f63d055f4ad5.jpg',
  },
  socialButtons: [
    {
      name: 'twitter',
      borderColor: '#3741A8',
      color: '#3741A8',
      onPress: action('onPressTwitter')
      
    },
    {
      name: 'google',
      borderColor: '#3741A8',
      color: '#3741A8',
      onPress: action('onPressGoogle')
      
    },
    {
      name: 'facebook',
      borderColor: '#3741A8',
      color: '#3741A8',
      onPress: action('onPressFacebook')
      
    }
  ],
  fields: [
    {
      label: 'Email',
      placeholder: 'Insert your email',
      validation: {
        msgRequired: 'Required !',
        message: 'Email Not Valid!'
      }
    },
    {
      label: 'Password',
      placeholder: 'Insert your password',
      validation: {
        msgRequired: 'Required !',
        minChr: 6,
        message: 'Password must min 6 character'
      }
    },
  ],
  btnSubmit: {
    label: 'LOGIN',
    onPress: action('OnPress')
    
  }
}



storiesOf('SignIn', module)
  .addDecorator(withKnobs)
  .add('Option 1', () => {
    const bgImg = object('bgImg', props.bgImg)
    const fields = object("fields", props.fields)
    const socialButtons = object("socialButtons", props.socialButtons)
    const btnSubmit = object("btnSubmit", props.btnSubmit)
    return (
      <SignInOne
        bgImg={bgImg}
        fields={fields}
        socialButtons={socialButtons}
        btnSubmit={btnSubmit}
      />
    )
  })
  .add('Option 2', () => {
    const fields = object("fields", props.fields)
    const btnSubmit = object("btnSubmit", props.btnSubmit)
    return (
      <SignInTwo
        fields={fields}
        btnSubmit={btnSubmit}
      />
    )
  })
  .add('Option 3', () => {
    const bgImg = object('bgImg', props.bgImg)
    const fields = object("fields", props.fields)
    const btnSubmit = object("btnSubmit", props.btnSubmit)
    return (
      <SignInThree
        bgImg={bgImg}
        fields={fields}
        btnSubmit={btnSubmit}
      />
    )
  })
  .add('Option 4', () => {
    const bgImg = object('bgImg', props.bgImg)
    const fields = object("fields", props.fields)
    const socialButtons = object("socialButtons", props.socialButtons)
    const btnSubmit = object("btnSubmit", props.btnSubmit)
    return (
      <SignInFour
        bgImg={bgImg}
        fields={fields}
        socialButtons={socialButtons}
        btnSubmit={btnSubmit}
      />
    )
  })
  .add('Option 5', () => {
    const bgImg = object('bgImg', props.bgImg)
    const fields = object("fields", props.fields)
    const socialButtons = object("socialButtons", props.socialButtons)
    const btnSubmit = object("btnSubmit", props.btnSubmit)
    return (
      <SignInFive
        bgImg={bgImg}
        fields={fields}
        socialButtons={socialButtons}
        btnSubmit={btnSubmit}
      />
    )
  })