import { useState, useRef } from 'react';
import { Alert, StyleSheet, View, useWindowDimensions, KeyboardAvoidingView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import FlatButton from '../UI/FlatButton';
import AuthForm from './AuthForm';
import { GlobalStyles } from '../../constants/styles';
import Lottie from 'lottie-react-native'

function AuthContent({ isLogin, onAuthenticate }) {
    const navigation = useNavigation();
    const { height } = useWindowDimensions();
    const animationRef = useRef();

    const [credentialsInvalid, setCredentialsInvalid] = useState({
        email: false,
        password: false,
        confirmEmail: false,
        confirmPassword: false,
    });

    function switchAuthModeHandler() {
        if (isLogin) {
            navigation.replace('Signup');
        } else {
            navigation.replace('Login');
        }
    }

    function submitHandler(credentials) {
        let { email, confirmEmail, password, confirmPassword } = credentials;

        email = email.trim();
        password = password.trim();

        const emailIsValid = email.includes('@');
        const passwordIsValid = password.length > 6;
        const emailsAreEqual = email === confirmEmail;
        const passwordsAreEqual = password === confirmPassword;

        if (
            !emailIsValid ||
            !passwordIsValid ||
            (!isLogin && (!emailsAreEqual || !passwordsAreEqual))
        ) {
            Alert.alert('Invalid input', 'Please check your entered credentials.');
            setCredentialsInvalid({
                email: !emailIsValid,
                confirmEmail: !emailIsValid || !emailsAreEqual,
                password: !passwordIsValid,
                confirmPassword: !passwordIsValid || !passwordsAreEqual,
            });
            return;
        }
        onAuthenticate({ email, password });
    }

    return (
 <KeyboardAvoidingView> 
        <View style={styles.authContent}>
            
            <Lottie style={[styles.logo, { height: height * 0.3, marginLeft: 20 }]}
                ref={animationRef}
                //style = {{flex:1}}
                source={require('../../assets/animations/131681-add-expenses.json')}
                loop={true}
                autoPlay={true}

            //speed = {0.5}
            />
            <AuthForm
                isLogin={isLogin}
                onSubmit={submitHandler}
                credentialsInvalid={credentialsInvalid}
            />
            <View style={styles.buttons}>
                <FlatButton onPress={switchAuthModeHandler}>
                    {isLogin ? 'Create a new user' : 'Log in instead'}
                </FlatButton>
            </View>
            </View>
        </KeyboardAvoidingView>
    );
}

export default AuthContent;

const styles = StyleSheet.create({
    authContent: {
        marginTop: 64,
        marginHorizontal: 32,
        padding: 16,
        borderRadius: 8,
        backgroundColor: GlobalStyles.colors.primary800,
        elevation: 2,
        shadowColor: 'black',
        shadowOffset: { width: 1, height: 1 },
        shadowOpacity: 0.35,
        shadowRadius: 4,
    },
    buttons: {
        marginTop: 8,
    },
});