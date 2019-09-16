import React, { Component } from 'react';
import { Text, View, ScrollView, StyleSheet, Image, Dimensions, FlatList, TouchableOpacity } from 'react-native';
import { Button, Layout, Avatar, Icon } from 'react-native-ui-kitten';

class ProfileOne extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    render() {
        const {
            data,
            posts,
            btnFollow,
            btnMsg,
        } = this.props;
        return (
            <ScrollView contentContainerStyle={styles.container}>
                <Layout level='1' style={styles.profileContainer}>
                    <View style={[styles.rowContainer, {justifyContent : "flex-start"}]}>
                        <Avatar
                            source={{ uri: data.avatar }}
                            size={'giant'}
                        />
                        <View
                            style={styles.nameContainer}
                        >
                            <Text style={styles.title}>{data.name}</Text>
                            <Text style={styles.subtitle}>{data.city}, {data.country}</Text>
                        </View>
                    </View>

                    <View style={styles.rowContainer}>
                        <View style={styles.followersContainer}>
                            <Text style={styles.contentText}>{data.followers}</Text>
                            <Text style={styles.subtitle}>Followers</Text>
                        </View>
                        <View style={styles.followersContainer}>
                            <Text style={styles.contentText}>{data.following}</Text>
                            <Text style={styles.subtitle}>Following</Text>
                        </View>
                        <View style={styles.followersContainer}>
                            <Text style={styles.contentText}>{data.posts}</Text>
                            <Text style={styles.subtitle}>Posts</Text>
                        </View>
                    </View>
                    <View style={styles.rowContainer}>
                        <Button
                            style={styles.button}
                            onPress={btnFollow.onPress}
                        >{btnFollow.label}</Button>
                        <Button
                            style={styles.button}
                            onPress={btnMsg.onPress}
                            appearance={'outline'}
                        >{btnMsg.label}</Button>
                    </View>
                </Layout>
                <Layout level='3' style={styles.postContainer}>
                    <FlatList
                        data={posts}
                        renderItem={
                            ({ item, index }) =>
                                (
                                    <Layout level='1' style={styles.post} key={index}>
                                        <View style={styles.postTitle}>
                                            <Text style={styles.title}>{item.title}</Text>
                                            <Text style={styles.subtitle}
                                                numberOfLines={1}
                                            >{item.description}</Text>
                                        </View>
                                        <Image
                                            source={{ uri: item.image }}
                                            style={styles.postImage}
                                        />
                                        <View
                                            style={styles.postDescription}
                                        >
                                            <Text style={{ flexGrow: 1 }}>{item.postedAt}</Text>
                                            <TouchableOpacity style={styles.postButton}>
                                                <Icon
                                                    name='message-circle-outline'
                                                    tintColor='#505050'
                                                    width={25}
                                                    height={25}
                                                />
                                                <Text>{item.comments}</Text>
                                            </TouchableOpacity>
                                            <TouchableOpacity style={styles.postButton}>
                                                <Icon
                                                    name='heart-outline'
                                                    tintColor='#d70a20'
                                                    width={25}
                                                    height={25}
                                                />
                                                <Text>{item.likes}</Text>
                                            </TouchableOpacity>

                                        </View>
                                    </Layout>
                                )

                        }
                    />
                </Layout>
            </ScrollView>

        );
    }
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'stretch',
        padding: 0,
        minHeight: Dimensions.get('screen').height
    },
    nameContainer: {
        justifyContent: "center",
        paddingLeft : 20
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold'
    },
    subtitle: {
        fontSize: 13,
        color: '#A9A9A9'
    },
    contentText: {
        fontWeight: 'bold',
        fontSize: 15,
    },
    profileContainer: {
        paddingHorizontal : 20,
        paddingBottom: 10,
        paddingTop: 5,
    },
    rowContainer: {
        flexDirection: "row",
        justifyContent: 'space-around',
        marginTop: 10,
        alignItems : 'center'
    },
    followersContainer: {
        padding: 5,
        alignItems: 'center'
    },
    postContainer: {
        paddingHorizontal: 20,
        flexGrow: 1,
        paddingBottom: 10
    },

    post: {
        marginTop: 10,
        width: Dimensions.get('screen').width - 40,
        borderRadius: 10,

    },
    postTitle: {
        paddingHorizontal: 20,
        paddingTop: 10,
        paddingBottom: 10,
    },
    postImage: {
        alignSelf: 'stretch',
        resizeMode: 'cover',
        height: 200,
    },
    postDescription: {
        paddingHorizontal: 20,
        paddingTop: 10,
        paddingBottom: 10,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center'
    },
    postButton: {
        flexDirection: 'row',
        alignItems: 'center',
        width: 60
    },
    button: {
        marginHorizontal: 5,
        flex: 1,
    }


})

export default ProfileOne;
