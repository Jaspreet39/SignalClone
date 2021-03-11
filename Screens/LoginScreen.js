import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Button, Input, Image } from 'react-native-elements'
import { StatusBar } from 'expo-status-bar'
import { KeyboardAvoidingView } from 'react-native'
import { auth } from './firebase'

const LoginScreen = ({ navigation }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((authUser) => {
            console.log(authUser);
            if (authUser) {
              navigation.replace("Home")
           }
        });

        return unsubscribe;
    }, []);

    const signIn = () => {};

    return (
        <KeyboardAvoidingView behavior='padding' style={styles.container}>
            <StatusBar style="light" />
            <Image 
               source={{
                  uri: "data:image/png;base64,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",
            }}
                style={{ width: 120, height: 120 }}
            />
            <View style={styles.inputContainer}>
                <Input placeholder="Email"
                    autoFocus
                    type="email"
                    value={email} onChangeText={text => setEmail(text)} />
                <Input placeholder="Password"
                    secureTextEntry
                    type="password"
                    value={password}
                    onChangeText={text => setPassword(text)} />
            </View>

            <Button containerStyle={styles.button} onPress={signIn} title="Login" />
            <Button onPress={() => navigation.navigate("Register")} containerStyle={styles.button} type="outline" title="Register" />
            <View style={{ height: 100 }} />
        </KeyboardAvoidingView>
    )
}

export default LoginScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        padding: 10,
        backgroundColor: "white",

    },
    inputContainer: {
        width: 300,
    },
    button: {
        width: 200,
        marginTop: 10,
    },
});

