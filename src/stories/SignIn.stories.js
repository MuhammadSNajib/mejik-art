import React from 'react';

import { storiesOf } from '@storybook/react-native';
import { action } from '@storybook/addon-actions';
import { withKnobs, object, text, number } from '@storybook/addon-knobs';

import SignIn from './../layouts/auth/signin';

storiesOf('Layout', module)
  .addDecorator(withKnobs)
  .add('Login', () => {
    const option = number("option", 1)
    const form = object("form", {
      email: "name@domain.com",
      emailPlaceholder: "Insert your email",
      password: "mypassword",
      passwordPlaceholder: "Insert your password"
    })
    const btnText = text("btnText", "Sign In")
    const bgUrl = text("bgUrl", "https://i.pinimg.com/originals/a3/4c/2c/a34c2c0df09dadff0dec9619ed368bd0.jpg")
    return (
      <SignIn
        option={option}
        bgUrl={bgUrl}
        form={form}
        btnText={btnText}
        onPress={() => action("onPress()")}
        onPressGoogle={() => action("onPressGoogle()")}
        onPressFacebook={() => action("onPressFacebook()")}
        onPressTwitter={() => action("onPressTwitter()")}
      />
    )
  });