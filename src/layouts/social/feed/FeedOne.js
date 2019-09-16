import React, { Component } from 'react';
import { Text, View, ScrollView, StyleSheet, Image, Dimensions, FlatList, TouchableOpacity } from 'react-native';
import { Button, Layout, Avatar, Icon } from 'react-native-ui-kitten';


class FeedOne extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        const {
            data,
            btnShare,
            btnLike,
            btnAdd,
            onFeedPress,
        } = this.props
        return (
            <Layout level='2' style={styles.container}>
                <FlatList
                    data={data}
                    extraData={this.props}
                    contentContainerStyle={styles.listContainer}
                    renderItem={({ item, index }) => (
                        <TouchableOpacity
                            onPress={() => { onFeedPress(item) }}
                        >
                            <Layout
                                style={styles.list}
                            >
                                <View>
                                    <Image
                                        source={{
                                            uri: item.image
                                        }}
                                        style={styles.image}
                                    />
                                    <Text
                                        style={styles.title}
                                    >{item.title}</Text>
                                </View>
                                <View>
                                    <Text
                                        style={styles.description}
                                    >{item.description}</Text>
                                    <Layout level='3' style={styles.divider}></Layout>
                                    <View
                                        style={styles.listAction}
                                    >
                                        <TouchableOpacity
                                            onPress={() => { btnShare.onPress(item) }}
                                        >
                                            <Icon
                                                name='share-outline'
                                                tintColor='#C0C0C0'
                                                width={25}
                                                height={25}
                                            />
                                        </TouchableOpacity>
                                        <TouchableOpacity
                                            onPress={() => { btnLike.onPress(item) }}
                                        >
                                            <Icon
                                                name='heart'
                                                tintColor='#d70a20'
                                                width={25}
                                                height={25}
                                            />
                                        </TouchableOpacity>
                                        <Button
                                            size={"large"}
                                            appearance={'ghost'}
                                            icon={(style) => (
                                                <Icon
                                                    {...style}
                                                    name='plus'
                                                    width={25}
                                                    height={25}
                                                />
                                            )}
                                            onPress={() => { btnAdd.onPress(item) }}
                                            style={{
                                                flexDirection: 'row-reverse'
                                            }}
                                        >
                                            {btnAdd.label}
                                        </Button>
                                    </View>
                                </View>
                            </Layout>
                        </TouchableOpacity>
                    )

                    }
                />
            </Layout>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    listContainer: {
        paddingBottom: 20,
        paddingHorizontal: 20
    },
    list: {
        borderRadius: 20,
        marginTop: 20,
    },
    image: {
        alignSelf: 'stretch',
        height: 200,
        resizeMode: 'cover',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,

    },
    title: {
        position: 'absolute',
        bottom: 10,
        left: 10,
        fontSize: 30,
        fontWeight: 'bold',
        color: '#fff'
    },
    description: {
        padding: 20,
        fontWeight: 'bold',
        fontSize: 15
    },
    divider: {
        height: 1.5,
    },
    listAction: {
        flexDirection: "row",
        justifyContent: "space-evenly",
        marginVertical: 10,
        alignItems: 'center',
    },

})

export default FeedOne;
