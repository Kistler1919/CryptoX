import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  root: {
    flex: 1,
    padding: 20,
    alignItems: "center",
    backgroundColor: "white",
  },
  image: {
    height: 200,
    resizeMode: "contain",
  },
  title: {
    fontSize: 24,
    fontWeight: "800",
    marginTop: 20,
  },
  subTitle: {
    fontSize: 18,
    marginVertical: 10,
    color: "#5f5f5f",
  },
  inputsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    alignItems: "center",
  },
  inputContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    borderWidth: 1,
    borderColor: "#b1b1b1",
    padding: 15,
    borderRadius: 8,
    margin: 20,
  },
  button: {
    backgroundColor: "#555a86",
    marginTop: "auto",
    width: "100%",
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 50,
  },
  buttonText: {
    color: "white",
    fontSize: 18,
  },
});

export default styles;
