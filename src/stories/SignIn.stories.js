import React from 'react';

import { storiesOf } from '@storybook/react-native';
import { action } from '@storybook/addon-actions';
import { withKnobs, object, text, number, } from '@storybook/addon-knobs';

import SignIn from './../layouts/auth/signin';

const props = {
  option: 1,
  bgImg: {
    url: 'https://i.pinimg.com/originals/61/24/a4/6124a4600cbbb5869641f63d055f4ad5.jpg',
  },
  socialButtons: [
    {
      name: 'twitter',
      borderColor: '#3741A8',
      color: '#3741A8',
      onPress: () => {
        alert('twitter')
      }
    },
    {
      name: 'google',
      borderColor: '#3741A8',
      color: '#3741A8',
      onPress: () => {
        alert('google')
      }
    },
    {
      name: 'facebook',
      borderColor: '#3741A8',
      color: '#3741A8',
      onPress: () => {
        alert('facebook')
      }
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
    onPress: (value) => {
      action('OnPress()')
    }
  }
}



storiesOf('Layout', module)
  .addDecorator(withKnobs)
  .add('SignIn', () => {
    const option = number("option", props.option)
    const bgImg = object('bgImg', props.bgImg)
    const fields = object("fields", props.fields)
    const socialButtons = object("socialButtons", props.socialButtons)
    const btnSubmit = object("btnSubmit", props.btnSubmit)
    return (
      <SignIn
        option={option}
        bgImg={bgImg}
        fields={fields}
        socialButtons={socialButtons}
        btnSubmit={btnSubmit}
      />
    )
  });