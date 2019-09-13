import React, { Component } from 'react';
import { View, ImageBackground, StyleSheet, TouchableOpacity } from 'react-native';
import { Button, Layout, Input, Text, Icon } from 'react-native-ui-kitten';
import { Formik, } from 'formik';
import * as Yup from 'yup';

class SignInFive extends Component {
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
      socialButtons,
      btnSubmit,
    } = this.props;
    const validationSchema = Yup.object().shape({
      email: Yup.string().required(fields[0].validation.msgRequired).email(fields[0].validation.message),
      password: Yup.string().required(fields[1].validation.msgRequired).min(fields[1].validation.minChr, fields[1].validation.message),
    })
    return (
     
        <ImageBackground
          style={styles.wrapper}
          resizeMode='stretch'
          source={{ uri: bgImg.url }}
        >
          <Layout
           style={styles.titleContainer}
          >
          <Text
            category='h1'
            style={styles.titleText}
          >
            Sign In
          </Text>
          <Text
            category='h1'
            style={[styles.titleText, {fontSize : 20, fontWeight : "100"}]}
          >
            Sign in to your account using email
          </Text>
          </Layout>
          <Formik
            initialValues={{
              email: '',
              password: '',
            }}
            onSubmit={(value) => { btnSubmit.onPress(value) }}
            validationSchema={validationSchema}
          >{formikProps => (
            <Layout style={styles.formContainer}>
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
              <Button
                onPress={formikProps.handleSubmit}
                size="large"
                style={styles.button}
                disabled={!formikProps.isValid}
              >{btnSubmit.label}
              </Button>
              <TouchableOpacity
                style={styles.signUpButton}
              >
                <Text style={styles.text}>Don't have an account ? Sign Up</Text>
              </TouchableOpacity>
            </Layout>
          )}
          </Formik>
          <Layout style={styles.socialSectionContainer}>
          <Text style={[styles.text, { color: 'white' }]}>Login with social account</Text>
          <View style={styles.socialButtonContainer}>
            {socialButtons.map((data) => (
              <Button
                onPress={() => data.onPress()}
                size="giant"
                appearance={'ghost'}
                style={styles.button}

                icon={(style) => {
                  //alert(JSON.stringify(style))
                  return (
                    <Icon
                      name={data.name}
                      {...style}
                      tintColor={data.color}
                      width={30}
                      height={30}
                    />
                  )
                }
                }
              >
              </Button>
            ))}
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
    justifyContent: 'space-evenly',
    
  },
  titleContainer : {
    backgroundColor: 'transparent',
    height : '20%',
    justifyContent : 'flex-end',
    alignItems : "center"
  },
  formContainer: {
    marginHorizontal: '10%',
    paddingVertical: 20,
    paddingHorizontal: 20,
    borderRadius: 10,
    alignSelf: 'stretch'
  },
  socialSectionContainer : {
    backgroundColor: 'transparent',
  },
  bgImage: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    color: 'black',
    textAlign: 'center',
    alignSelf: 'center',
    marginTop: 20,
  },
  titleText : {
    fontSize: 35,
    fontWeight: 'bold',
    color: '#fff'
  },
  input: {
    marginTop: '2%'
  },
  socialButtonContainer: {
    flexDirection: 'row',
    justifyContent : 'space-evenly'
  }
})

export default SignInFive;
