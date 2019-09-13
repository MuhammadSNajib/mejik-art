import React, { Component } from 'react';
import { View, ImageBackground, StyleSheet, TouchableOpacity } from 'react-native';
import { Button, Layout, Input, Text, Icon } from 'react-native-ui-kitten';
import { Formik, } from 'formik';
import * as Yup from 'yup';



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
            fields,
            btnSubmit,
        } = this.props;
        const validationSchema = Yup.object().shape({
            email: Yup.string().required(fields[0].validation.msgRequired).email(fields[0].validation.message),
            password: Yup.string().required(fields[1].validation.msgRequired).min(fields[1].validation.minChr, fields[1].validation.message),
        })
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
                    style={{flexGrow : 1}}
                >   
                    <Formik
                        initialValues={{
                            email: '',
                            password: '',
                        }}
                        onSubmit={(value) => { btnSubmit.onPress(value)}}
                        validationSchema={validationSchema}
                    >{formikProps =>(
                    <View style={styles.formContainer}>
                        <View>
                        <Input
                            label={fields[0].label || 'Email'}
                            placeholder={fields[0].placeholder || 'Insert email'}
                            value={formikProps.values.email}
                            onChangeText={formikProps.handleChange('email')}
                            status={(formikProps.errors.email) ? 'danger' : 'primary'}
                            style={styles.input}
                            icon={(style) => (<Icon name='email-outline' {...style} />)}
                            caption={formikProps.errors.email}
                            
                        />
                        <Input
                            label={fields[1].label || 'Password'}
                            placeholder={fields[1].placeholder || 'Insert Password'}
                            value={formikProps.values.password}
                            onChangeText={formikProps.handleChange('password')}
                            status={(formikProps.errors.password) ? 'danger' : 'primary'}
                            caption={formikProps.errors.password || ''}
                            value={formikProps.values.password}
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
                            onPress={formikProps.handleSubmit}
                            size="large"
                            style={styles.button}
                            disabled={!formikProps.isValid}
                        >{btnSubmit.label}
                        </Button>
                        <TouchableOpacity>
                            <Text style={styles.text}>Don't have an account ? Sign Up</Text>
                        </TouchableOpacity>
                        </View>
                    </View>
                    )}
                    </Formik>
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
