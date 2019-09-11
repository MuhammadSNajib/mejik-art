import React, { Component } from 'react';
import { View, ImageBackground, StyleSheet } from 'react-native';
import { Button, Layout, Input, Text, Icon } from 'react-native-ui-kitten';


class SignInOne extends Component {
    constructor(props) {
        super(props);
        this.state = {
            passwordVisible: false,
        };
    }
    onPasswordIconPress = () => {
        const passwordVisible = !this.state.passwordVisible;
        this.setState({ passwordVisible });
    };

    render() {
        const {
            bgUrl,
            form,
            validation,
            btnText,
            onPress,
            onPressGoogle,
            onPressFacebook,
            onPressTwitter
        } = this.props;
        const {
            emailPlaceholder,
            passwordPlaceholder,
            email,
            password,
        } = form
        return (
            <ImageBackground
                style={styles.wrapper}
                resizeMode='stretch'
                source={{ uri: bgUrl }}
            >
                <Layout
                    style={styles.titleContainer}
                >
                    <Text
                        category='h1'
                        style={styles.titleText}
                    >
                        Hello
                    </Text>
                    <Text
                        category='h1'
                        style={[styles.titleText, { fontSize: 15, fontWeight: '200' }]}
                    >
                        Sign in to your account
                    </Text>
                </Layout>
                <Layout
                    style={styles.formContainer}
                >
                    <View>
                        <Input
                            label='Email'
                            placeholder={emailPlaceholder}
                            value={email}
                            size='small'
                            style={styles.input}
                            textStyle={{color : 'white'}}
                            icon={(style) => (<Icon name='email-outline' {...style} />)}
                        />
                        <Input
                            label='Password'
                            placeholder={passwordPlaceholder}
                            size='small'
                            textStyle={{color : 'white'}}
                            value={password}
                            style={styles.input}
                            icon={(style) => (
                                <Icon
                                    name={this.state.passwordVisible ? 'eye' : 'eye-off'}
                                    {...style}
                                />
                            )
                            }
                            onIconPress={this.onPasswordIconPress}
                            secureTextEntry={!this.state.passwordVisible}
                        />
                    </View>
                    <View>
                        <Button
                            onPress={onPress()}
                            size="giant" style={styles.button}
                        >{btnText}
                        </Button>
                        <Text style={styles.text}>Sign in with social account</Text>
                        <View style={styles.socialButtonContainer}>
                            <Button
                                onPress={onPressGoogle()}
                                size="giant"
                                appearance={'ghost'}
                                style={styles.button}

                                icon={(style) => {
                                    //alert(JSON.stringify(style))
                                    return (
                                        <Icon
                                            name={'google'}
                                            {...style}
                                            tintColor={'#fff'}
                                            width={30}
                                            height={30}
                                        />
                                    )
                                }
                                }
                            >
                            </Button>
                            <Button
                                onPress={onPressFacebook()}
                                size="giant"
                                appearance={'ghost'}
                                style={styles.button}
                                icon={(style) => {
                                    //alert(JSON.stringify(style))
                                    return (
                                        <Icon
                                            name={'facebook'}
                                            {...style}
                                            tintColor={'#fff'}
                                            width={30}
                                            height={30}
                                        />
                                    )
                                }
                                }

                            >
                            </Button>
                            <Button
                                onPress={onPressTwitter()}
                                size="giant"
                                appearance={'ghost'}

                                style={styles.button}

                                icon={(style) => {
                                    //alert(JSON.stringify(style))
                                    return (
                                        <Icon
                                            name={'twitter'}
                                            {...style}
                                            tintColor={'#fff'}
                                            width={30}
                                            height={30}
                                        />
                                    )
                                }
                                }
                            >
                            </Button>
                        </View>
                    </View>
                </Layout>
            </ImageBackground>
        );
    }
}

const styles = StyleSheet.create({
    button: {
        marginTop: 10
    },
    wrapper: {
        flex: 1,
        alignItems: 'stretch'
    },
    titleContainer: {
        backgroundColor: 'transparent',
        alignItems: 'center',
        height: 180,
        justifyContent: 'center'
    },
    formContainer: {
        backgroundColor: 'transparent',
        paddingVertical: 20,
        paddingHorizontal: 20,
        justifyContent: 'space-between',
        flexGrow: 1

    },

    text: {
        color:'white',
        textAlign: 'center',
        alignSelf: 'center',
        marginTop: 40,
    },
    titleText: {
        fontSize: 35,
        fontWeight: 'bold',
        color: '#fff'
    },
    input: {
        marginTop: '2%',
        backgroundColor: 'transparent',
        
    },
    socialButtonContainer: {
        flexDirection: 'row',
        alignSelf:'center'
    }
})

export default SignInOne;
