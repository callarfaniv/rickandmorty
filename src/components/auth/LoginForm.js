import { View, Text, TextInput, StyleSheet, Button, Image, TouchableOpacity } from 'react-native'
import React, { useContext, useState } from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { user, userDetail } from '../../utils/userDb'
import AppContext from '../../context/AppContext'
//import { user, userDetail } from '../auth/UserData.js'
export default function LoginForm(props) {

    const { login } = useContext(AppContext)

    const [error, setError] = useState("")

    const formik = useFormik({
        initialValues: initialValues(),
        validationSchema: Yup.object(validationSchema()),
        validateOnChange: false,
        onSubmit: (formData) => {
            setError("")
            const { username, password } = formData
            if (username !== user.username || password !== user.password) {
                console.log("Nel")
                setError("Usuario o contraseña incorrecto")
            } else {
                login(userDetail)
            }
        },
    })

    return (
        <>
            <Image
                source={require('../../assets/logo.gif')}
                style={styles.image}
                resizeMode='contain'
            />
            <Text style={styles.title}>Iniciar sesión</Text>
            <TextInput
                placeholder="Nombre de usuario"
                style={styles.input}
                autoCapitalize='none'
                onChangeText={(text) => formik.setFieldValue('username', text)}
            />
            {formik.errors.username && <Text style={styles.error} >{formik.errors.username}</Text>}
            <TextInput
                placeholder="Contraseña"
                style={styles.input}
                autoCapitalize='none'
                secureTextEntry={true}
                onChangeText={(text) => formik.setFieldValue('password', text)}
            />
            {formik.errors.password && <Text style={styles.error} >{formik.errors.password}</Text>}
            <TouchableOpacity style={styles.button} onPress={formik.handleSubmit}  >
                <Text style={styles.buttonText} >Iniciar sesión</Text>
            </TouchableOpacity>
            <Text style={styles.error} >{error}</Text>
            <Text style={styles.signupText} >¿Aún no tienen cuenta? Registrate<Text style={{ color: 'white', fontWeight: 'bold' }} > aquí</Text></Text>

        </>
    )
}

function initialValues() {
    return {
        username: '',
        password: ''
    }
}

function validationSchema() {
    return {
        username: Yup.string().required('El nombre de usuario es obligatorio'),
        password: Yup.string().required('La contraseña es obligatoria')
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        height: '100%'
    },
    title: {
        textAlign: 'center',
        fontSize: 28,
        fontWeight: 'bold',
        marginBottom: 20,
        color: '#fff'
    },
    input: {
        height: 40,
        marginHorizontal: 12,
        marginTop: 15,
        borderWidth: 1,
        padding: 10,
        borderRadius: 10,
        backgroundColor: '#fff',
        borderColor: 'green'
    },
    error: {
        marginLeft: 15,
        fontSize: 14,
        color: 'red',
        fontWeight: 'bold',
    },
    image: {
        width: 400,
        height: 200,
        alignSelf: 'center',

    },
    button: {
        backgroundColor: '#97ce4c',
        width: 200,
        height: 40,
        alignSelf: 'center',
        borderRadius: 25,
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 20
    },
    buttonText: {
        fontWeight: 'bold',
        fontSize: 16
    },
    signupText: {
        color: 'white',
        alignSelf: 'center'
    }
})