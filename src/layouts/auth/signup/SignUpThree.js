import React, { Component } from 'react';
import { View,StyleSheet,ImageBackground,KeyboardAvoidingView,ScrollView } from 'react-native';
import { Button, Layout, Input, Text, Icon,  CheckBox, } from 'react-native-ui-kitten';
import {Formik} from 'formik'
import * as Yup from 'yup';

class CustomInput extends Component {
  constructor(props) {
      super(props);
      this.state = {
          passwordVisible: false,
      };
  }
  onPasswordIconPress = (isVisible) => {
      this.setState({ passwordVisible: isVisible })
  };


  render() {
      const {
          field,
          onChange,
          onBlur,
          value,
          error,
          secure,
          touched
      } = this.props
      return (
          <Input
              label={field.label}
              placeholder={field.placeholder}
              onBlur={onBlur}
              value={value}
              onChangeText={onChange}
              status={(touched && error) ? 'danger' : 'primary'}
              style={styles.input}
              icon={(style) => (
                  <Icon
                      name={!secure ? this.props.iconName : (this.state.passwordVisible ? 'eye' : 'eye-off')}
                      {...style}
                  />
              )}
              caption={(touched && error) || ' '}
              onIconPress={secure ? (() => this.onPasswordIconPress(!this.state.passwordVisible)) : (() => { })}
              secureTextEntry={secure && !this.state.passwordVisible}
          />
      )
  }
}

class SignUpThree extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {

    const {
      fields,
      btnSubmit,
      socialButtons,
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
          
      }
    )
    return (
      
      <ImageBackground
        style={styles.wrapper}
        source={{ uri: bgImg.url }}
      >
        {/* <KeyboardAvoidingView behavior="padding" enabled> */}
          <View style={styles.titleContainer}>
            <Text category='h1'style={styles.titleText}>SignUp</Text>

          </View>
            <ScrollView>
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
                 <View style={styles.container}>
                  <CustomInput
                      field={fields[3]}
                      onChange={formikProps.handleChange('firstName')}
                      onBlur={formikProps.handleBlur('firstName')}
                      touched={formikProps.touched.firstName}
                      value={formikProps.values.firstName}
                      error={formikProps.errors.firstName}
                      iconName={'person-outline'}
                  />
                  <CustomInput
                      field={fields[4]}
                      formikProps={formikProps}
                      onChange={formikProps.handleChange('lastName')}
                      onBlur={formikProps.handleBlur('lastName')}
                      touched={formikProps.touched.lastName}
                      value={formikProps.values.lastName}
                      error={formikProps.errors.lastName}
                      iconName={'person-outline'}
                  />
                  <CustomInput
                      field={fields[0]}
                      formikProps={formikProps}
                      onChange={formikProps.handleChange('email')}
                      onBlur={formikProps.handleBlur('email')}
                      touched={formikProps.touched.email}
                      value={formikProps.values.email}
                      error={formikProps.errors.email}
                      iconName={'email-outline'}
                  />
                  <CustomInput
                      field={fields[5]}
                      formikProps={formikProps}
                      onChange={formikProps.handleChange('phone')}
                      onBlur={formikProps.handleBlur('phone')}
                      touched={formikProps.touched.phone}
                      value={formikProps.values.phone}
                      error={formikProps.errors.phone}
                      iconName={'phone-outline'}
                  />
                  <CustomInput
                      field={fields[1]}
                      formikProps={formikProps}
                      onChange={formikProps.handleChange('password')}
                      onBlur={formikProps.handleBlur('password')}
                      touched={formikProps.touched.password}
                      value={formikProps.values.password}
                      error={formikProps.errors.password}
                      secure={true}
                  />
                  <CustomInput
                      field={fields[2]}
                      formikProps={formikProps}
                      onChange={formikProps.handleChange('confirmPassword')}
                      onBlur={formikProps.handleBlur('confirmPassword')}
                      touched={formikProps.touched.confirmPassword}
                      value={formikProps.values.confirmPassword}
                      error={formikProps.errors.confirmPassword}
                      secure={true}
                  />

                  <Button
                      onPress={formikProps.handleSubmit}
                      size="large"
                      style={styles.button}
                      disabled={!formikProps.isValid}
                  >{btnSubmit.label}
                  </Button>   
               </View>
              )}


            </Formik>
           
            
          </ScrollView>

        {/* </KeyboardAvoidingView> */}

      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    alignItems: 'stretch'
  },
  container : {
    marginTop:'30%',
    justifyContent : 'center',
    alignItems : 'center',
    paddingVertical : 20,
    paddingHorizontal : 20,

  },
  button : {
    width : '100%',
  },
  input : {
    marginTop : '2%'
  },
  titleContainer : {
    alignSelf : 'center',
    alignItems : 'center',
    height : 150,
    justifyContent :'center'
  },
  titleText: {
    fontSize: 35,
    fontWeight: 'bold',
    color: '#fff'
  },
  
})

export default SignUpThree;
