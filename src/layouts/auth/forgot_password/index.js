import React, { Component } from 'react';
import { View, ImageBackground, StyleSheet, TouchableOpacity, KeyboardAvoidingView, } from 'react-native';
import { Button, Layout, Input, Text, Icon } from 'react-native-ui-kitten';
import { Formik, } from 'formik';
import * as Yup from 'yup';


class ForgotPassword extends Component {
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
            bgImg,
            fields,
            btnSubmit,
        } = this.props;
        const validationSchema = Yup.object().shape({
            email: Yup.string()
                .required(fields[0].validation.msgRequired)
                .email(fields[0].validation.message),
        })
        return (
            <ImageBackground
                style={styles.wrapper}
                resizeMode='stretch'
                source={{ uri: bgImg.url }}
            >
                <KeyboardAvoidingView style={{ flex: 1 }} behavior="padding" enabled>
                    <Layout
                        style={styles.titleContainer}
                    >
                        <Text
                            category='h1'
                            style={styles.titleText}
                        >Forgot Password</Text>
                        <Text
                            category='h1'
                            style={[styles.titleText, { fontSize: 15, fontWeight: '200' }]}
                        >Please enter your email address</Text>
                    </Layout>
                    <Formik
                        initialValues={{
                            email: '',
                        }}
                        onSubmit={(value) => { btnSubmit.onPress(value) }}
                        validationSchema={validationSchema}
                    >{formikProps => (
                        <View style={styles.formContainer}>
                            <View>
                                <Input
                                    placeholder={fields[0].placeholder || 'Insert email'}
                                    value={formikProps.values.email}
                                    onChangeText={formikProps.handleChange('email')}
                                    onBlur={formikProps.handleBlur('email')}
                                    status={(formikProps.errors.email) ? 'danger' : 'primary'}
                                    style={styles.input}
                                    icon={(style) => (<Icon name='email' {...style} />)}
                                    caption={formikProps.errors.email}
                                    keyboardType={'email-address'}
                                />
                            </View>
                            <View>
                                <Button
                                    onPress={formikProps.handleSubmit}
                                    size="large"
                                    style={styles.button}
                                    disabled={!formikProps.isValid}
                                >{btnSubmit.label}
                                </Button>
                                <TouchableOpacity>
                                    <Text style={styles.text}>Go back to Sign Up</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    )}
                    </Formik>
                </KeyboardAvoidingView>
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
        justifyContent: 'space-between',
        paddingVertical: 35,
    },
    formContainer: {
        paddingVertical: 20,
        paddingHorizontal: 20,
        justifyContent: 'space-between',
        flexGrow: 1,
        backgroundColor: 'transparent'
    },
    text: {
        textAlign: 'center',
        alignSelf: 'center',
        marginTop: 20,
        color: '#fff'
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

export default ForgotPassword;
