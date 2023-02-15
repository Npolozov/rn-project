"use strict";

import { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TextInput,
  TouchableOpacity,
  Platform,
  KeyboardAvoidingView,
  Keyboard,
  TouchableWithoutFeedback,
} from "react-native";
import * as SplashScreen from "expo-splash-screen";
import { useFonts } from "expo-font";

const initialState = {
  name: "",
  email: "",
  password: "",
};

export default function App() {
  const [isShowKeyboard, setIsShowKeyboard] = useState(false);
  const [state, setstate] = useState(initialState);

  console.log(state);

  const [fontsLoaded] = useFonts({
    "Roboto-Regular": require("./assets/fonts/Roboto-Regular.ttf"),
    "Roboto-Italic": require("./assets/fonts/Roboto-Italic.ttf"),
  });

  useEffect(() => {
    async function prepare() {
      await SplashScreen.preventAutoHideAsync();
    }
    prepare();
  }, []);

  if (!fontsLoaded) {
    return;
  } else {
    SplashScreen.hideAsync();
  }

  const changeForm = () => {
    setIsShowKeyboard(true);
  };

  const keyboardHide = () => {
    setIsShowKeyboard(false);
    Keyboard.dismiss();
  };

  const submitForm = () => {
    console.log(state);
    setstate(initialState);
  };

  console.log(isShowKeyboard);
  return (
    <TouchableWithoutFeedback onPress={keyboardHide}>
      <View style={styles.container}>
        <ImageBackground
          source={require("./assets/images/photoHero.jpg")}
          style={styles.image}
        >
          <KeyboardAvoidingView
            behavior={Platform.OS == "ios" ? "padding" : "height"}
          >
            <View style={styles.form}>
              <View style={styles.avatarcontainer}></View>
              <Text style={styles.title}>Регистрация</Text>
              <View>
                <TextInput
                  style={styles.input}
                  textAlign={"left"}
                  placeholder="Логин"
                  onFocus={changeForm}
                  value={state.name}
                  onChangeText={(value) =>
                    setstate((prevState) => ({ ...prevState, name: value }))
                  }
                />
              </View>
              <View style={{ marginTop: 20 }}>
                <TextInput
                  style={styles.input}
                  textAlign={"left"}
                  placeholder="Адрес электронной почты"
                  onFocus={changeForm}
                  value={state.email}
                  onChangeText={(value) =>
                    setstate((prevState) => ({ ...prevState, email: value }))
                  }
                />
              </View>
              <View style={{ marginTop: 20 }}>
                <TextInput
                  style={styles.input}
                  textAlign={"left"}
                  secureTextEntry={true}
                  placeholder="Пароль"
                  onFocus={changeForm}
                  value={state.password}
                  onChangeText={(value) =>
                    setstate((prevState) => ({ ...prevState, password: value }))
                  }
                />
              </View>
              {!isShowKeyboard && (
                <TouchableOpacity
                  activeOpacity={0.8}
                  style={styles.btn}
                  onPress={submitForm}
                >
                  <Text>Зарегистрироваться</Text>
                </TouchableOpacity>
              )}
            </View>
          </KeyboardAvoidingView>
        </ImageBackground>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "flex-end",
  },
  avatarcontainer: {
    position: "absolute",
    top: -60,
    width: 120,
    height: 120,
    backgroundColor: "#f0f8ff",
    borderRadius: 16,
  },
  form: {
    position: "relative",
    alignItems: "center",
    backgroundColor: "#FFFFFF",

    borderTopRightRadius: 25,
    borderTopLeftRadius: 25,
    width: "100%",
    padding: 15,
  },

  title: {
    marginTop: 92,
    marginBottom: 33,
    fontFamily: "Roboto-Regular",
    fontSize: 30,
    textAlign: "center",
    color: "#212121",
  },
  input: {
    borderColor: "#f0f8ff",
    padding: 10,
    width: 350,
    height: 50,
    borderRadius: 8,
    backgroundColor: "#F6F6F6",
  },
  btn: {
    height: 50,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    padding: 16,
    paddingLeft: 32,
    paddingRight: 32,
    backgroundColor: "#FF6C00",
    borderRadius: 100,
    marginTop: 43,
    ...Platform.select({
      ios: {
        backgroundColor: "#FF6C00",
      },
      android: {
        backgroundColor: "green",
      },
    }),
  },
});
