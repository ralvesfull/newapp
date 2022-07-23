import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { Image, LogBox, Modal, StyleSheet, Text, View } from "react-native";
import { Barraheader, BoxLogin, ButtonRememberPassword, Container, ContainerHeader, TextInputLogin } from "./styles";
import WebView from "react-native-webview";
export default function App() {
  
  LogBox.ignoreAllLogs();

  const [email, onChangeEmail] = useState('');
  const [password, onChangePassword] = useState('');
  const [errorMessage, setErrorMessage] = useState(false);


  //comentario
  return (
    <Container>
      <ContainerHeader>
        <Image
          source={require("./assets/icon.png")}
          style={{ width: 250, height: 120 }}
        />
      </ContainerHeader>
      <Barraheader />

      <BoxLogin>
       
        <TextInputLogin
          onChangeText={onChangeEmail}
          value={email}
          placeholder="Login"
        />
        <TextInputLogin
          onChangeText={onChangePassword}
          value={password}
          placeholder="Senha"
          secureTextEntry={true}
        />

        {/* <ButtonRememberPassword
          onPress={() => setUrlPage("esqueci_senham.asp?txtversao=2")}
        >
          <Text>Esqueci minha senha</Text>
        </ButtonRememberPassword>

        <ButtonLogin onPress={handleLogin}>
          <Text style={{ color: "#FFF" }}>ENTRAR</Text>
        </ButtonLogin>

        {!!errorMessage && errorMessage != "" && (
          <MessageError>{errorMessage}</MessageError>
        )}

        <Text>v. 4.0</Text> */}
      </BoxLogin>

      <Modal animationType="slide" transparent={false} visible={true}>
       
        <WebView
          source={{ uri: "https://clownfish-app-r28nf.ondigitalocean.app/" }}
          domStorageEnabled={true}
          originWhitelist={["*"]}
          allowsInlineMediaPlayback
          javaScriptEnabled
          scalesPageToFit
          mediaPlaybackRequiresUserAction={false}
          javaScriptEnabledAndroid
          useWebkit
          startInLoadingState={true}
          onMessage={(event) => {
            handleReceivedMessage(event);
          }}
          incognito={true}
        />
      </Modal>
    </Container>
  );
}
