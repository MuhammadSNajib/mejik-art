import React, { Component } from 'react';
import { View, Text, ImageBackground } from 'react-native';
import { Button, Layout, Input } from 'react-native-ui-kitten';

class SignInOne extends Component {
    constructor(props) {
        super(props);
        console.log(props.form);
    }



    render() {
        const {
            bgUrl,
            form,
            validation,
            btnText,
            onPressBtn,
        } = this.props;
        const {
            emailPlaceholder,
            passwordPlaceholder,
            email,
            password,
        } = form
        return (     
            <Layout
                style={{
                    flex: 1
                }}
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
                        style={{ width: '75%', marginTop: '2%' }}
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
                        onPress={onPressBtn()}
                        size="giant" style={{ width: '75%', position: 'absolute', bottom: 40 }}
                    >{btnText}
                    </Button>
                    <Text style={{ color: 'white', textAlign: 'center', alignSelf: 'center', bottom: 10, position: 'absolute' }}>Do not have an account ? Register Here</Text>

                </ImageBackground>

            </Layout>
        );
    }
}

export default SignInOne;