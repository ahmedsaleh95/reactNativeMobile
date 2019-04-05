import { StyleSheet, Dimensions } from "react-native";
import * as constants from "../../constants";
import { moderateScale, scale } from "react-native-text";

export const commonStyles = StyleSheet.create({});
export const styles = StyleSheet.create({
  header: {
    padding: 10,
    paddingBottom: 10,
    paddingTop: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "white",
    borderBottomWidth: 1,
    borderColor: constants.colors.headerBorderColor
  },
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  headerTitle: {
    color: 'black',
    fontSize: 32,
    marginTop: 0,
    marginBottom: 0
  },
  headerLeftImage: {
    tintColor: "black",
    marginTop: 0,
    marginLeft: 10,
    width: 20,
    height: 20,
    padding: 13,
    paddingTop: 0
  },
  icon:{
    width: 20,
    height: 20,
    marginLeft: 65,
    marginBottom: -28,
    tintColor: "white"
  },
  icon2:{
    width: 40,
    height: 40,
    marginLeft: 56,
    marginBottom: -37,
    tintColor: "white"
  },
  icon3:{
    alignSelf: "flex-start",
    width: 20,
    height: 20,
    marginLeft: Dimensions.get("window").width/6,
    marginBottom: -26,
    tintColor: "white"
  },
  icon4:{
    alignSelf: "flex-start",
    width: 35,
    height: 35,
    marginLeft: Dimensions.get("window").width/7,
    marginBottom: -33,
    tintColor: "white"
  },
  info: {
    textAlign: "center",
    marginTop: 20,
    fontSize: 20,
    margin: 20,
    color: "#424242",
    lineHeight: 28
  },
  image: {
    width: moderateScale(150),
    height: moderateScale(150),
    alignSelf: "center",
    marginTop: 0,
    padding: 0,
  },
  codeBody: {
    alignItems: "center"
  },
  headerNext: {
    color: constants.colors.mainColor,
    fontSize: 16,
    textAlign: "center",
    margin: 20,
    marginLeft: 0,
    fontWeight: 'bold'
  },
  welcomeText: {
    color: "black",
    fontSize: 18,
    textAlign: "center",
    margin: 30,
    marginTop: 0,
  },
  view: { flex: 1, backgroundColor: "white", alignItems: "stretch" },
  textInput: {
    marginTop: 0,
    // marginRight: scale(50),
    // marginLeft: scale(50),
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
    width: Dimensions.get("window").width/1.6
    // maxWidth: 300,
    // alignSelf:"center"
  },
  patientActiveButton: {
    margin: 10,
    paddingTop: 10,
    paddingBottom: 10,
    backgroundColor: "#D93B6C",
    borderRadius: 41,
    color: "white",
    textAlign: "center",
    textAlignVertical: "center",
  },
  doctorActiveButton: {
    marginHorizontal: 0,
    backgroundColor: "#00B7F3",
    borderWidth: 1,
    borderColor: "#00B7F3",
  },
  textDoctorActiveButton: {
    color: "white",
    fontSize: 12,
  },
  inactiveButton: {
    marginHorizontal: 0,
    backgroundColor: "white",
    borderWidth: 1,
    borderColor: "#B2B2B2",
  },
  textInactiveButton: {
    color: "black",
    fontSize: 12,
  },
  body: {
    // flexGrow: 1,
    flexDirection: "column",
    justifyContent: "space-between",
    // backgroundColor: "white",
    padding: 15,
    // alignItems: "stretch"
  },
  mainBody: {
    flexGrow: 1,
    flexDirection: "column",
    justifyContent: "space-between",
    backgroundColor: "white",
  },
  logo: { margin: 10, padding: 10, fontSize: 30, textAlign: "center" },
  text: { margin: 10, padding: 10, textAlign: "center" },
  licenseInactiveButton: {
    margin: 20,
    paddingTop: 10,
    paddingBottom: 10,
    backgroundColor: "#da3b6c",
    borderRadius: 40,
    marginBottom: 35
  },
  licenseActiveButton: {
    margin: 20,
    paddingTop: 10,
    paddingBottom: 10,
    borderWidth: 1,
    borderColor: "#da3b6c",
    backgroundColor: "white",
    borderRadius: 40,
    marginBottom: 35
  },
  textLicenseInactiveButton: {
    color: "white",
    textAlign: "center",
    textAlignVertical: "center",
  },
  textLicenseActiveButton: {
    color: "#da3b6c",
    textAlign: "center",
    textAlignVertical: "center",
  },
  info: {
    textAlign: "center",
    margin: 20,
    fontSize: 15,
    lineHeight: 20
  },
  imagePlaceholder: {
    margin: 50,
    marginBottom: 0,
    fontSize: 36,
    textAlign: "center",
    color: '#CDCDCD'
  },
  buttonContainer: {
    flexDirection: "row",
    backgroundColor: "white",
    paddingTop: 10,
    paddingBottom: 35,
    justifyContent: 'space-between',
    borderTopWidth: 0.5,
    borderColor: '#C0C0C0',
    paddingLeft: 20,
    paddingRight: 20,
  },
  countryPicker: {
    height: 0,
    width: 0,
    flex: 0,
  },phoneContainer: { 
    borderRadius: 7,
    height: 35,
    marginTop: 8,
    marginBottom: 25,
    borderColor: "black",
    borderWidth: 0.5,
    color: "black",
    textAlign: "center",
    alignItems: "center",
    width: Dimensions.get("window").width/1.6
  },
  textInput1 : {
    fontSize: moderateScale(14),
    textAlign: 'left',
    color: "black",
  },
  textInput2 : {
    flex: 1,
    fontSize: moderateScale(14), 
    textAlign: 'left',
  },
  autocompleteContainer: {
    flex: 1,
    left: 0,
    position: 'absolute',
    right: 0,
    top: 0,
    zIndex: 1
  },
  inputLayout: {
    marginTop: 5,
    marginHorizontal: 10,
    borderRadius: 10,
    height: 45,
    borderColor: "white",
    borderWidth: 1,
    
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
  },
  modalButton:{
    flex: 1,
    marginHorizontal: 15,
    alignSelf: "stretch",
    backgroundColor: "#40D7FF",
    overflow: "hidden",
    borderRadius: 5,
    marginTop: 30,
    maxWidth: 150,
    paddingHorizontal: 15,
    justifyContent: "space-around",
    height: 30,
  }

});
export const getStyle = () => {
  const { width } = Dimensions.get("window");
  return styles;
};
