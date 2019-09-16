import React, { Component } from 'react';
import { Text, View, Image, ScrollView, StyleSheet, Dimensions, StatusBar, TouchableOpacity, TextInput, KeyboardAvoidingView } from 'react-native';
import { Button, Layout, Icon, Select } from 'react-native-ui-kitten';
import { Formik } from 'formik';
import * as Yup from 'yup';

class ProfileSettingsOne extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: null,
        };
    }
    render() {
        const {
            data,
            btnSave,
            btnEditAvatar
        } = this.props;
        // const validationSchema = Yup.object().shape(
        //     {
        //         email: Yup.string()
        //             .required(fields[0].validation.msgRequired)
        //             .email(fields[0].validation.message),
        //         phone: Yup.string()
        //             .required(fields[5].validation.msgRequired)
        //             .min(fields[5].validation.minChr, fields[5].validation.message)
        //             .matches(fields[5].validation.regex, fields[5].validation.message),
        //     }
        // )
        return (
            <KeyboardAvoidingView style={{ flex: 1 }} behavior="padding" enabled>
                
                <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
                    <StatusBar translucent={true} />
                    <Layout level='2'
                        style={{
                            paddingVertical: 40
                        }}
                    >
                        <View style={{ alignSelf: "center" }}>
                            <Image source={{ uri: data.avatar }}
                                style={styles.avatar}
                            />
                            <TouchableOpacity
                                style={styles.editButton}
                                onPress={() => { btnEditAvatar.onPress() }}
                            >
                                <Icon
                                    name='edit-outline'
                                    tintColor='#505050'
                                    width={25}
                                    height={25}
                                />
                            </TouchableOpacity>
                        </View>
                    </Layout>
                    <Formik
                        initialValues={{
                            firstName: data.firstName,
                            lastName: data.lastName,
                            gender: data.gender,
                            email: data.email,
                            phone: data.phone,
                            age: data.age.toString(),
                            height: data.height.toString(),
                            weight: data.weight.toString(),
                        }}
                        onSubmit={(value) => { btnSave.onPress(value) }}
                    >
                        {formikProps => (
                            <Layout level='2' style={{ flexGrow: 1 }}>
                                <Layout style={styles.profileData}>
                                    <Text
                                        style={styles.dataText}
                                    >First Name</Text>
                                    <TextInput
                                        value={formikProps.values.firstName}
                                        onChangeText={formikProps.handleChange('firstName')}
                                        style={styles.input}
                                    />
                                </Layout>
                                <Layout style={styles.profileData}>
                                    <Text
                                        style={styles.dataText}
                                    >Last Name</Text>
                                    <TextInput
                                        value={formikProps.values.lastName}
                                        onChangeText={formikProps.handleChange('lastName')}
                                        style={styles.input}
                                    />
                                </Layout>
                                <Layout style={styles.profileData}>
                                    <Text
                                        style={styles.dataText}
                                    >Gender</Text>

                                    <TextInput
                                        value={formikProps.values.gender}
                                        onChangeText={formikProps.handleChange('gender')}
                                        style={styles.input}
                                    />
                                </Layout>
                                <Layout style={styles.profileData}>
                                    <Text
                                        style={styles.dataText}
                                    >Age</Text>
                                    <TextInput
                                        value={formikProps.values.age}
                                        onChangeText={formikProps.handleChange('age')}
                                        style={styles.input}
                                    />
                                </Layout>
                                <Layout style={styles.profileData}>
                                    <Text
                                        style={styles.dataText}
                                    >Weight</Text>
                                    <TextInput
                                        value={formikProps.values.weight}
                                        onChangeText={formikProps.handleChange('weight')}
                                        style={styles.input}
                                    />
                                </Layout>
                                <Layout style={[styles.profileData, { marginBottom: 25 }]}>
                                    <Text
                                        style={styles.dataText}
                                    >Height</Text>
                                    <TextInput
                                        value={formikProps.values.height}
                                        onChangeText={formikProps.handleChange('height')}
                                        style={styles.input}
                                    />
                                </Layout>
                                <Layout style={styles.profileData}>
                                    <Text
                                        style={styles.dataText}
                                    >Email</Text>
                                    <TextInput
                                        value={formikProps.values.email}
                                        onChangeText={formikProps.handleChange('email')}
                                        style={styles.input}
                                    />
                                </Layout>
                                <Layout style={styles.profileData}>
                                    <Text
                                        style={styles.dataText}
                                    >Phone</Text>
                                    <TextInput
                                        value={formikProps.values.phone}
                                        onChangeText={formikProps.handleChange('phone')}
                                        style={styles.input}
                                    />
                                </Layout>
                                <Button
                                    size='large'
                                    style={{
                                        margin: 20
                                    }}
                                    onPress={formikProps.handleSubmit}
                                >{btnSave.label}</Button>
                            </Layout>
                        )}
                    </Formik>
                </ScrollView>
            </KeyboardAvoidingView>
        );
    }
}

const styles = StyleSheet.create({
    avatar: {
        width: 120,
        height: 120,
        resizeMode: 'cover',
        borderRadius: 120 / 2
    },
    dataText: {
        color: '#808080'
    },
    editButton: {
        position: "absolute",
        right: 0,
        bottom: 0,
        borderRadius: 35,
        padding: 10,
        backgroundColor: '#fff'
    },
    profileData: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 20,
        marginBottom: 1
    },
    input: {
        backgroundColor: 'transparent',
        paddingVertical: 8,
        textAlign: "right",
        paddingRight: 0,
        fontWeight: 'bold'
    }



})

export default ProfileSettingsOne;
