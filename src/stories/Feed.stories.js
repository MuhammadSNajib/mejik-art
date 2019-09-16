import React from 'react';

import { storiesOf } from '@storybook/react-native';
import { action } from '@storybook/addon-actions';
import { withKnobs, object, text, number, } from '@storybook/addon-knobs';

import FeedOne from '../layouts/social/feed/FeedOne';

const props = {

    data: [
        {
            image : 'https://www.aviatorsports.com/wp-content/uploads/2018/08/Field-House-5-resized.jpeg',
            title : 'Basketball',
            description : 'Team sport in wich two teams, most commonly of five player',
            postedAt : 'Today, 10.12 AM'
        },
        {
            image : 'http://events.solemotive.com/wp-content/uploads/2019/04/RM19_0198-1024x683.jpg',
            title : 'Running',
            description : 'Great way to get fit and even from new relationship with other runners',
            postedAt : 'Yesterday, 03.30 PM'
        },
        {
            image : 'https://blog.myfitnesspal.com/wp-content/uploads/2018/10/How-to-Get-More-From-Your-Bodyweight-Workout-752x472.jpg',
            title : 'Workout',
            description : 'A workout is a wise use of time and an investment in excellence. It is a way of preparing for life\'s challenges and proving to yourself that you have what it takes to do what is necessary.',
            postedAt : 'Yesterday, 03.30 PM'
        },
    ],
    btnShare: {
        label: 'Share',
        onPress: action('ShareBtnPress')
    },
    btnLike: {
        label: 'Like',
        onPress: action('LikeBtnPress')
        
    },
    btnAdd: {
        label: 'Add Training',
        onPress: action('AddBtnPress')
        
    },
    onFeedPress : action('onFeedPress')
}



storiesOf('Feed', module)
    .addDecorator(withKnobs)
    .add('Option 1', () => {
        const data = object("posts", props.data)
        const btnShare = object("btnShare", props.btnShare)
        const btnAdd = object("btnAdd", props.btnAdd)
        const btnLike = object("btnLike", props.btnLike)
        const onFeedPress = props.onFeedPress

        return (
            <FeedOne
                data={data}
                btnShare={btnShare}
                btnLike={btnLike}
                btnAdd={btnAdd}
                onFeedPress={onFeedPress}
            />
        )
    });