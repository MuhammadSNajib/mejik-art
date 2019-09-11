import React, { Component } from 'react';
import { View, Text, ImageBackground, StyleSheet } from 'react-native';
import { Button, Layout, Input } from 'react-native-ui-kitten';

class SignInOne extends Component {
    constructor(props) {
        super(props);
    }



    render() {
        const {
            bgUrl,
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
                <ImageBackground
                    resizeMode='stretch'
                    style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
                    source={{ uri: bgUrl }}>
                    <View >
                        <Input
                            label='Email'
                            placeholder={emailPlaceholder}
                            value={email}
                            style={styles.input}
                        />
                        <Input
                            label='Password'
                            placeholder={passwordPlaceholder}
                            secureTextEntry={true}
                            value={password}
                            style={{ width: '75%', marginTop: '2%' }}
                        />
                    </View>
                    <Button
                        onPress={onPress()}
                        size="giant" style={styles.button}
                    >{btnText}
                    </Button>
                    <Text style={styles.text}>Do not have an account ? Register Here</Text>
                </ImageBackground>
            </Layout>
        );
    }
}


const styles = StyleSheet.create({
    button: {
        width: '75%',
        position: 'absolute',
        bottom: 40
    },
    wrapper: {
        flex: 1
    },
    text: {
        color: 'white',
        textAlign: 'center',
        alignSelf: 'center',
        bottom: 10,
        position: 'absolute'
    },
    input: {
        width: '75%',
        marginTop: '2%'
    }
})

export default SignInOne;