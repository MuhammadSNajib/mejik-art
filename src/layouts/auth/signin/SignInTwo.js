import React, { Component } from 'react';
import { View, ImageBackground, StyleSheet } from 'react-native';
import { Button, Layout, Input, Text, Icon } from 'react-native-ui-kitten';


class SignInTwo extends Component {
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
            form,
            validation,
            btnText,
            onPress,
        } = this.props;
        const {
            emailPlaceholder,
            passwordPlaceholder,
            email,
            password,
        } = form
        return (
            <Layout
                style={styles.wrapper}
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
                            style={styles.input}
                            icon={(style) => (<Icon name='email-outline' {...style} />)}
                        />
                        <Input
                            label='Password'
                            placeholder={passwordPlaceholder}
                            secureTextEntry={true}
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
                        <Text style={styles.text}>Do not have an account ? Register Here</Text>
                    </View>
                </Layout>
            </Layout>
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
        backgroundColor: '#3366FF',
        alignItems: 'center',
        height: 180,
        justifyContent: 'center'
    },
    formContainer: {
        paddingVertical: 20,
        paddingHorizontal: 20,
        justifyContent: 'space-between',
        flexGrow: 1
    },
    text: {
        textAlign: 'center',
        alignSelf: 'center',
        marginTop: 20,
    },
    titleText: {
        fontSize: 35,
        fontWeight: 'bold',
        color: '#fff'
    },
    input: {
        marginTop: '2%'
    },

})

export default SignInTwo;
