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
        style={styles.wrapper}
      >
        <ImageBackground
          resizeMode='stretch'
          style={styles.bgImage}
          source={{ uri: bgUrl }}
        >
          <Text
            category='h1'
            style={{
              fontSize: 50,
              fontWeight: 'bold',
              color: '#fff'
            }}
          >
            Hello
          </Text>
          <Text
            category='h1'
            style={{
              fontSize: 20,
              fontWeight: 'bold',
              color: '#fff'
            }}
          >
            Sign in to your account
          </Text>
          <Layout
            style={styles.formContainer}
          >
            <Input
              label='Email'
              placeholder={emailPlaceholder}
              value={email}
              style={styles.input}
              icon={(style) => (<Icon name='email-outline' {...style}/>)}
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
            <Button
              onPress={onPressBtn()}
              size="giant" style={styles.button}
            >{btnText}
            </Button>
            <Text style={styles.text}>Do not have an account ? Register Here</Text>
          </Layout>

        </ImageBackground>

      </Layout>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    marginTop: 10
  },
  wrapper: {
    flex: 1
  },
  formContainer: {
    marginHorizontal: '10%',
    paddingVertical: 20,
    paddingHorizontal: 20,
    borderRadius: 10,
    alignSelf: 'stretch'
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
  input: {
    marginTop: '2%'
  }
})

export default SignInTwo;
