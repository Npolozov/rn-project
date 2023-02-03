import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TextInput,
  TouchableOpacity,
} from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("./assets/images/photoHero.jpg")}
        style={styles.image}
      >
        <View style={styles.form}>
          <Text style={styles.title}>Регистрация</Text>
          <View style={styles.viemInput}>
            <TextInput
              style={styles.input}
              textAlign={"left"}
              placeholder="Логин"
            />
          </View>
          <View style={{ marginTop: 20 }}>
            <TextInput
              style={styles.input}
              textAlign={"left"}
              placeholder="Адрес электронной почты"
            />
          </View>
          <View style={{ marginTop: 20, marginBottom: 20 }}>
            <TextInput
              style={styles.input}
              textAlign={"left"}
              secureTextEntry={true}
              placeholder="Пароль"
            />
          </View>
          <TouchableOpacity activeOpacity={0.8} style={styles.btn}>
            <Text>Зарегистрироваться</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
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
  viemInput: {
    marginTop: 33,
  },
  form: {
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    borderTopRightRadius: 25,
    borderTopLeftRadius: 25,
    height: 549,
    padding: 15,
  },
  title: {
    marginTop: 92,
    fontSize: 30,
    fontWeight: "bold",
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
  },
});
