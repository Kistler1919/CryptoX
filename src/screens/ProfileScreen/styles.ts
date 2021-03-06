import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  root: {
    flex: 1,
    padding: 20,
    alignItems: "center",
    backgroundColor: "white",
  },
  image: {
    height: 180,
    resizeMode: "contain",
  },
  userContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    height: 50,
    marginVertical: 10,
    width: '100%',
  },
  profileImage: {
    height: 100,
    width: 100,
    marginRight: 10,
    borderRadius: 120,
  },
  left: {
    flexDirection: "row",
    alignItems: "center",
  },
  name: {
    fontWeight: "bold",
    marginBottom: 5,
  },
  email: {
    marginBottom: 5,
  },
  value: {
    fontSize: 18,
    fontWeight: "600",
    marginBottom: 5,
  },
  symbol: {
    color: "#6b6b6b",
    fontWeight: "700",
  },
  button: {
    marginTop: 'auto',
    padding: 15,
    margin: 10,
    height: 50,
    borderRadius: 25, 
    backgroundColor: '#555a86',
    alignItems: 'center',
    justifyContent: 'center'
  },
  buttonText: {
    color: 'white'
}
});

export default styles;
