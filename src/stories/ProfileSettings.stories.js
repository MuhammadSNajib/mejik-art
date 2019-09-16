import React from 'react';

import { storiesOf } from '@storybook/react-native';
import { action } from '@storybook/addon-actions';
import { withKnobs, object, text, number, } from '@storybook/addon-knobs';

import ProfileSettingsOne from '../layouts/social/profile_settings/ProfileSettingsOne';

const props = {

    data: {
        firstName : 'John',
        lastName : 'Doe',
        avatar: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80',
        gender : 'Male',
        email : 'john@doe.com',
        phone : '+56842534955',
        age : 18,
        height : 123,
        weight : 30,
    },
    btnSave: {
        label: 'Save',
        onPress: action("onSave")
    }
}



storiesOf('Profile', module)
    .addDecorator(withKnobs)
    .add('Option 1', () => {
        const data = object('data', props.data)
        const btnSave = object("btnSave", props.btnSave)
        return (
            <ProfileSettingsOne
                data={data}
                btnSave={btnSave}
            />
        )
    });