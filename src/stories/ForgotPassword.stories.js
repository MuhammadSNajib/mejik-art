import React from 'react';

import { storiesOf } from '@storybook/react-native';
import { action } from '@storybook/addon-actions';
import { withKnobs, object, text, number, } from '@storybook/addon-knobs';

import ForgotPassword from './../layouts/auth/forgot_password';

const props = {
  option: 1,
  bgImg: {
    url: 'https://i.pinimg.com/originals/61/24/a4/6124a4600cbbb5869641f63d055f4ad5.jpg',
  },
  fields: [
    {
      label: 'Email',
      placeholder: 'Insert your email',
      validation: {
        msgRequired: 'Required !',
        message: 'Email Not Valid!'
      }
    },
  ],
  btnSubmit: {
    label: 'Reset Password',
    onPress: (value) => {
      action('OnPress()')
    }
  }
}



storiesOf('Layout', module)
  .addDecorator(withKnobs)
  .add('ForgotPassword', () => {
    const option = number("option", props.option)
    const bgImg = object('bgImg', props.bgImg)
    const fields = object("fields", props.fields)
    const btnSubmit = object("btnSubmit", props.btnSubmit)
    return (
      <ForgotPassword
        option={option}
        bgImg={bgImg}
        fields={fields}
        btnSubmit={btnSubmit}
      />
    )
  });