import React, { Component } from 'react';
import { View, ImageBackground, StyleSheet, ScrollView, KeyboardAvoidingView } from 'react-native';
import { Button, Layout, Input, Text, Icon } from 'react-native-ui-kitten';
import { Formik, } from 'formik';
import * as Yup from 'yup';

class NormalInput extends Component {
    render() {
        const {
            field,
            handleChange,
            value,
            error,
        } = this.props
        return (
            <Input
                label={field.label}
                placeholder={field.placeholder}
                value={value}
                onChangeText={handleChange}
                status={(error) ? 'danger' : 'primary'}
                style={styles.input}
                icon={(style) => (
                    <Icon
                        name={this.props.iconName}
                        {...style}
                    />
                )
                }
                caption={error || ' '}
            />
        )
    }
}
class SignUpOne extends Component {
    constructor(props) {
        super(props);
        this.state = {
            passwordVisible: false,
            confirmPasswordVisible: false,

        };
    }
    onPasswordIconPress = (isVisible, state) => {
        this.setState({ [state]: isVisible });
    };



    render() {
        const {
            fields,
            btnSubmit,
            bgImg,
        } = this.props;
        const validationSchema = Yup.object().shape(
            {
                email: Yup.string()
                    .required(fields[0].validation.msgRequired)
                    .email(fields[0].validation.message),
                password: Yup.string()
                    .required(fields[1].validation.msgRequired)
                    .min(fields[1].validation.minChr, fields[1].validation.message),
                confirmPassword: Yup.string()
                    .required(fields[2].validation.msgRequired)
                    .oneOf([Yup.ref('password')], fields[2].validation.message),
                firstName: Yup.string()
                    .required(fields[3].validation.msgRequired)
                    .min(fields[3].validation.minChr, fields[3].validation.message),
                lastName: Yup.string()
                    .required(fields[4].validation.msgRequired)
                    .min(fields[4].validation.minChr, fields[4].validation.message),
                phone: Yup.string()
                    .required(fields[5].validation.msgRequired)
                    .min(fields[5].validation.minChr, fields[5].validation.message)
                    .matches(fields[5].validation.regex, fields[5].validation.message)
            }
        )

        return (

            <ImageBackground
                style={styles.wrapper}
                resizeMode='stretch'
                source={{ uri: bgImg.url }}
            >
                <KeyboardAvoidingView style={styles.container} behavior="padding" enabled>
                    <ScrollView>
                        <View
                            style={styles.titleContainer}
                        >
                            <Text
                                category='h1'
                                style={styles.titleText}
                            >
                                SignUp
                    </Text>
                            <Text
                                category='h1'
                                style={[styles.titleText, { fontSize: 15, fontWeight: '200' }]}
                            >
                                Register your account
                    </Text>
                        </View>
                        <Formik
                            initialValues={
                                {
                                    email: '',
                                    password: '',
                                    confirmPassword: '',
                                    firstName: '',
                                    lastName: '',
                                    phone: '',
                                }
                            }
                            onSubmit={(value) => { btnSubmit.onPress(value) }}
                            validationSchema={validationSchema}
                        >
                            {formikProps => (
                                <View style={styles.formContainer}>
                                    <View>
                                        <NormalInput
                                            field={fields[3]}
                                            handleChange={formikProps.handleChange('firstName')}
                                            value={formikProps.values.firstName}
                                            error={formikProps.errors.firstName}
                                            iconName={'person-outline'}
                                        />
                                        <NormalInput
                                            field={fields[4]}
                                            formikProps={formikProps}
                                            handleChange={formikProps.handleChange('lastName')}
                                            value={formikProps.values.lastName}
                                            error={formikProps.errors.lastName}
                                            iconName={'person-outline'}
                                        />
                                        <NormalInput
                                            field={fields[0]}
                                            formikProps={formikProps}
                                            handleChange={formikProps.handleChange('email')}
                                            value={formikProps.values.email}
                                            error={formikProps.errors.email}
                                            iconName={'email-outline'}
                                        />
                                        <NormalInput
                                            field={fields[5]}
                                            formikProps={formikProps}
                                            handleChange={formikProps.handleChange('phone')}
                                            value={formikProps.values.phone}
                                            error={formikProps.errors.phone}
                                            iconName={'phone-outline'}
                                        />
                                        
                                        <Input
                                            label={fields[1].label || 'Password'}
                                            placeholder={fields[1].placeholder || 'Insert password'}
                                            value={formikProps.values.password}
                                            onChangeText={formikProps.handleChange('password')}
                                            status={(formikProps.errors.password) ? 'danger' : 'primary'}
                                            caption={formikProps.errors.password || ' '}
                                            style={styles.input}
                                            icon={(style) => (
                                                <Icon
                                                    name={this.state.passwordVisible ? 'eye' : 'eye-off'}
                                                    {...style}
                                                />
                                            )
                                            }
                                            onIconPress={() => this.onPasswordIconPress(!this.state.passwordVisible, 'passwordVisible')}
                                            secureTextEntry={!this.state.passwordVisible}
                                        />

                                        <Input
                                            label={fields[2].label || 'Confirm password'}
                                            placeholder={fields[2].placeholder || 'Confirm password'}
                                            value={formikProps.values.confirmPassword}
                                            onChangeText={formikProps.handleChange('confirmPassword')}
                                            status={(formikProps.errors.confirmPassword) ? 'danger' : 'primary'}
                                            caption={formikProps.errors.confirmPassword || ' '}
                                            style={styles.input}
                                            icon={(style) => (
                                                <Icon
                                                    name={this.state.confirmPasswordVisible ? 'eye' : 'eye-off'}
                                                    {...style}
                                                />
                                            )
                                            }
                                            onIconPress={() => this.onPasswordIconPress(!this.state.confirmPasswordVisible, 'confirmPasswordVisible')}
                                            secureTextEntry={!this.state.confirmPasswordVisible}
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
                                        <Text style={styles.text}>Do not have an account ? Register Here</Text>
                                    </View>
                                </View>
                            )}
                        </Formik>
                    </ScrollView>
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
        alignItems: 'center',
        height: 180,
        justifyContent: 'center'
    },
    formContainer: {
        paddingVertical: 20,
        paddingHorizontal: 20,
        justifyContent: 'space-between',
        flexGrow: 1,
        backgroundColor: '#fff',
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

export default SignUpOne;
