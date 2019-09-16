import React, { Component } from 'react';
import { View, ScrollView, StyleSheet, Image, Dimensions, FlatList } from 'react-native';
import { Text, Button, Layout, Avatar, Icon } from 'react-native-ui-kitten';

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
                    <View>
                        <Avatar
                            source={{ uri: data.avatar }}
                            size={'giant'}
                        />
                    </View>
                    <View style={styles.dataContainer}>
                        <View
                            style={styles.nameContainer}
                        >
                            <Text style={styles.title}>{data.name}</Text>
                            <Text style={styles.subtitle}>{data.city}, {data.country}</Text>
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
                    </View>
                </Layout>
                <Layout level='3' style={styles.postContainer}>
                    <FlatList
                        data={posts}
                        renderItem={
                            (data) => (
                                <Layout level='1' style={styles.post}>
                                    <Image
                                        source={{ uri: data.image }}
                                        style={styles.postImage}
                                    />
                                    <View
                                        style={styles.postDescription}
                                    >
                                        <Text style={{
                                            fontSize: 20,
                                            fontWeight: '700'
                                        }}>{data.title}</Text>
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
        height: 50,
        justifyContent: "center",
        marginHorizontal: 5
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
        flexDirection: "row",
        padding: 10,
        paddingTop: 15,
    },
    dataContainer: {
        flexGrow: 1,
        paddingLeft: 20,
    },
    rowContainer: {
        flexDirection: "row",
        justifyContent: 'space-between',
        marginTop: 10,
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
        borderRadius: 10,

    },
    postImage: {
        alignSelf: 'stretch',
        resizeMode: 'contain',
        height: 200,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
    },
    postDescription: {
        paddingHorizontal: 20,
        paddingTop: 10,
        paddingBottom: 10
    },
    button: {
        marginHorizontal: 5,
        flex: 1
    }


})

export default ProfileOne;
