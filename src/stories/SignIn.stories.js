import React from 'react';

import { storiesOf } from '@storybook/react-native';
import { action } from '@storybook/addon-actions';
import { withKnobs, object, text, number } from '@storybook/addon-knobs';

// eslint-disable-next-line import/extensions
import SignIn from './../layouts/auth/signin';
import { BufferView } from '../decoration';


// const form = object("form", {
//   email: "example@domain.com",
//   emailPlaceholder: "Insert your email",
//   password: "Password",
//   passwordPlaceholder: "Insert your password"
// })

export const propTypes = {
  form: object("form", {
    email: "example@domain.com",
    emailPlaceholder: "Insert your email",
    password: "Password",
    passwordPlaceholder: "Insert your password"
  }),
  option: number("option", 1),
  btnText: text("btnText", "Login"),
  bgUrl: text("bgUrl", "https://melaniepfeffer.files.wordpress.com/2012/09/img_05461.jpg"),
  onPressBtn: action('onPress'),
};


storiesOf('Layout', module)
  .addDecorator(withKnobs)
  .add('SignIn', () => <SignIn {...propTypes} />);