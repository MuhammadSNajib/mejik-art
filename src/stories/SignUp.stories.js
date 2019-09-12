import React from 'react';

import { storiesOf } from '@storybook/react-native';
import { action } from '@storybook/addon-actions';
import { withKnobs, object, text, number, } from '@storybook/addon-knobs';

import SignUp from './../layouts/auth/signup';

storiesOf('Layout', module)
  .addDecorator(withKnobs)
  .add('SignUp', () => {
    const option = number(
      "option",
      1
    )
    const fields = object("fields", [
        {
            label: 'Email',
            validation: {
                msgRequired: 'Required !',
                message: 'Email Not Valid!'
            }
        },
        {
            label: 'Password',
            validation: {
                msgRequired: 'Required !',
                minChr: 6,
                message: 'Password must min 6 charcter'
            }
        },
    ])
    const btnSubmit = object("btnSubmit", {
        label: 'LOGIN',
    })
   
    return (
      <SignUp
        // option={option}
        fields={fields}
        btnSubmit={ {
            ...btnSubmit,
            onPress : (value) => {
            alert(JSON.stringify(value))
        }}}
      />
    )
  });