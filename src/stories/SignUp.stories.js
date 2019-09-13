import React from 'react';

import { storiesOf } from '@storybook/react-native';
import { action } from '@storybook/addon-actions';
import { withKnobs, object, text, number, } from '@storybook/addon-knobs';

import SignUp from './../layouts/auth/signup';

const props = {
    option: 1,
    bgImg: {
        url: 'https://3.bp.blogspot.com/-WBNUWC44QYM/XJqrXjZYsoI/AAAAAAAABB0/-UZWkkKo4_0MnpBKFSnVjl47CM5ZxpkrACKgBGAs/w1080-h1920-c/night-sky-stars-scenery-comet-uhdpaper.com-4K-185.jpg',
    },
    socialButtons: [
        {
            name: 'twitter',
            borderColor: '#1DA1F2',
            color: '#1DA1F2',
            onPress: () => {
                alert('twitter')
            }
        },
        {
            name: 'google',
            borderColor: '#DB4437',
            //color: '#DB4437',
            onPress: () => {
                alert('google')
            }
        },
        {
            name: 'facebook',
            borderColor: '#4267b2',
            color: '#4267b2',
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
        {
            label: 'Confirm password',
            placeholder: 'Confirm your password',
            validation: {
                msgRequired: 'Required !',
                minChr: 6,
                message: 'Password must match'
            }
        },
        {
            label: 'First name',
            placeholder: 'Insert your first name',
            validation: {
                msgRequired: 'Required !',
                minChr: 2,
                message: 'First name must min 2 character!'
            }
        },
        {
            label: 'Last name',
            placeholder: 'Insert your last name',
            validation: {
                msgRequired: 'Required !',
                minChr: 2,
                message: 'Last Name must min 2 character!'
            }
        },

        {
            label: 'Phone number',
            placeholder: 'Insert your phone number',
            validation: {
                msgRequired: 'Required !',
                minChr : 12,
                regex: /\+?([ -]?\d+)+|\(\d+\)([ -]\d+)/,
                message: 'Phone Number is Not Valid!'
            }
        },


    ],
    btnSubmit: {
        label: 'Sign Up',
        onPress: (value) => {
            alert(JSON.stringify(value))
        }
    }
}

storiesOf('Layout', module)
    .addDecorator(withKnobs)
    .add('SignUp', () => {
        const option = number("option", props.option)
        const bgImg = object('bgImg', props.bgImg)
        const fields = object("fields", props.fields)
        const socialButtons = object("socialButtons", props.socialButtons)
        const btnSubmit = object("btnSubmit", props.btnSubmit)

        return (
            <SignUp
                option={option}
                fields={fields}
                bgImg={bgImg}
                btnSubmit={btnSubmit}
                socialButtons={socialButtons}
            />
        )
    });