import React from 'react';

import { storiesOf } from '@storybook/react-native';
import { action } from '@storybook/addon-actions';
import { withKnobs, object, text, number, } from '@storybook/addon-knobs';

import ProfileOne from '../layouts/social/profile/ProfileOne';

const props = {

    data: {
        name : 'John Doe',
        avatar: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80',
        about : 'My name is John Doe, I\'m 18 and live in Berlin. I\'m a Junior Fulstack Web Developer',
        city : 'Berlin',
        country : 'Germany',
        followers : 1000,
        following : 67,
        posts : 200,
        age : 18,
        height : 123,
        weight : 30,
    },

    posts: [
        {
            image : 'https://a57.foxnews.com/static.foxnews.com/foxnews.com/content/uploads/2019/07/931/524/creepy-cat.jpg',
            title : 'My new cat',
            description : 'I bought a new cat yesterday and i love it very much!!!',
            likes : 5000,
            comments : 300,
            postedAt : 'Today, 10.12 AM'
        },
        {
            image : 'https://foodsafetynewsfullservice.marlersites.com/files/2017/07/pizza-in-box.jpg',
            title : 'Pizza',
            description : 'There’s no better feeling in the world than a warm pizza box on your lap',
            likes : 200,
            comments : 15,
            postedAt : 'Yesterday, 03.30 PM'
        },
    ],
    btnFollow: {
        label: 'Follow',
        onPress: () => {
            alert('follow')
        }
    },
    btnMsg: {
        label: 'Message',
        onPress: () => {
            alert('Message')
        }
    }
}



storiesOf('Profile', module)
    .addDecorator(withKnobs)
    .add('Option 1', () => {
        const data = object('data', props.data)
        const posts = object("posts", props.posts)
        const btnFollow = object("btnFollow", props.btnFollow)
        const btnMsg = object("btnMsg", props.btnMsg)
        return (
            <ProfileOne
                data={data}
                posts={posts}
                btnFollow={btnFollow}
                btnMsg={btnMsg}
            />
        )
    });