import React from 'react';
import {
    View,
    Text,
    Image,
    StyleSheet,
    SafeAreaView,
    StatusBar,
    Pressable,
    Linking,
} from 'react-native';

const colorGitHub = '#010409';
const colorFontGitHub = '#C9D1D9';
const colorDarkFontGitHub = 'brown';

const imageProfileGitHub = 'https://avatars.githubusercontent.com/u/89480113?v=4';

const urlToMyGitHub = 'https://github.com/Cassio000';

const App = () => {
    const handlePressGoToGitHub = async () => {
        const res = await Linking.canOpenURL(urlToMyGitHub);
        if (res) {
            await Linking.openURL(urlToMyGitHub)
        }
    };

    return (
        <SafeAreaView style={style.container}>
            <StatusBar backgroundColor={'colorGitHub'} barStyle="light-content" />
            <View style={style.content}>
                <Image accessibilityLabel="Cassio em preto e branco sem imagem de fundo" style={style.avatar} source={{ uri: imageProfileGitHub }} />
                <Text style={[style.text, style.nome]}>Cassio Carvalho</Text>
                <Text style={[style.text, style.nickname]}>Cassio000</Text>
                <Text style={[style.text, style.description]}>Desenvolvedor Front-end | Angular / JavaScript.       Com conhecimentos básicos em React, React Native, Node.js, Java e Android Studio.</Text>
            </View>
            <Pressable onPress={handlePressGoToGitHub}>
                <View Button style={style.button}>
                    <Text style={[style.description, style.textButoon]}>Open In GitHub</Text>
                </View>
            </Pressable>
        </SafeAreaView>
    );
};

export default App;

const style = StyleSheet.create({
    container: {
        backgroundColor: colorGitHub,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    content: {
        alignItems: 'center',
        padding: 20,
    },
    text: {
        color: colorFontGitHub,
    },
    avatar: {
        height: 200,
        width: 200,
        borderRadius: 100,
        borderColor: 'white',
        borderWidth: 2,
    },
    nome: {
        marginTop: 20,
        fontSize: 24,
        fontWeight: 'bold',
    },
    nickname: {
        fontSize: 18,
        color: colorDarkFontGitHub,
    },
    description: {
        fontSize: 14,
        fontWeight: 'bold',
    },
    button: {
        marginTop: 15,
        backgroundColor: colorDarkFontGitHub,
        borderRadius: 10,
        padding: 15,
    },
    textButoon: {
        fontSize: 14,
        fontWeight: 'bold',
    },
});