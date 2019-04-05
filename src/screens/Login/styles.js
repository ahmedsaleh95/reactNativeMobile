import { StyleSheet, Dimensions } from "react-native";
import * as constants from "../../constants";
// import { moderateScale } from "react-native-text";
import { moderateScale, scale } from "react-native-text";
export const styles = StyleSheet.create({
  view: {
    // flexGrow: 1,
    // justifyContent: "space-between",
    backgroundColor: "white",
    // alignItems: "stretch"
  },
  image: {
    width: moderateScale(500),
    height: moderateScale(500),
    alignSelf: "center",
    marginTop: -100,
    padding: 0,
  },
  icon:{
    width: 40,
    height: 40,
    marginLeft: 62,
    marginBottom: -38,
    tintColor: "white"
  },
  icon2:{
    width: 35,
    height: 35,
    marginLeft: 64,
    marginBottom: -34
  },
  textInput: {
    margin: 15,
    marginTop: 0,
    marginRight: scale(60),
    marginLeft: scale(60),
    marginBottom: 25,
    padding: 5,
    // paddingLeft: 45,
    borderRadius: 7,
    height: 35,
    borderColor: "black",
    borderWidth: 0.5,
    color: "black",
    textAlign: "center",
    fontSize: 14,
    // maxWidth: 300,
    // alignSelf:"center"
  },
  text: {
    textAlign: "center",
    alignSelf: "flex-start",
    fontSize: moderateScale(17),
    color: "black"
    // marginTop: -8
  },
  titleContainer: { flex: 1, justifyContent: "center", alignItems: "center" },
  titleText: {
    fontFamily: "open-sans-bold",
    color: "black",
    fontSize: 36,
    marginBottom: 50
  },
  container: { flex: 1,  },
  signUpContainer: {
    flexDirection: "row",
    justifyContent: "center",
    // alignItems: "center",
    padding: 50,
    paddingBottom: 0,
    marginBottom: 15
  },
  signUpText: {
    textAlign: "center",
    fontSize: moderateScale(14),
    color: "#D93B6C"
  },
  Button:{
    flex: 1,
    marginHorizontal: 30,
    marginTop: -10,
    alignSelf: "stretch",
    backgroundColor: "#40D7FF",
    overflow: "hidden",
    borderRadius: 5,
    maxWidth: 100,
    paddingHorizontal: 15,
    justifyContent: "space-around",
    tintColor: "white",
    height: 35,
    elevation: 4
  }
});
