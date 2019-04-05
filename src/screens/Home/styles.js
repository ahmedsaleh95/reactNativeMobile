import { StyleSheet, Dimensions } from "react-native";
import * as constants from "../../constants";
var screen = Dimensions.get('window')
export const styles = StyleSheet.create({
  container: {
    
    flexGrow: 1,
    flexDirection: "column",
    justifyContent: "space-between",
    backgroundColor: "white"
  },
  text: { margin: 10, padding: 10, textAlign: "center" },
  header: {
    height: 55,
    padding: 0,
    paddingBottom: 0,
    paddingTop: 0,
    flexDirection: "column",
    justifyContent: "space-between",
    backgroundColor: "white",
    // borderBottomWidth: 1,
    // borderColor: "black"
  },
  headerTitle: {
    position: "absolute",
    paddingTop: 15,
    fontSize: 16,
    marginTop: 10,
    marginBottom: 0,
    textAlign: "center",
    alignSelf: "center",
    color: 'white'
  },
  body: {
    // flexGrow: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white"
  },
  logoImage: {
    width: 75,
    height: 75
  },
  welcomeText: {
    fontSize: 20,
    fontWeight: "100",
    color: 'black'
  },
  infoText: {
    fontSize: 16,
    color: "#434343"
  },
  dashboardBody: {
    // marginTop: 15,
    // alignItems: "center",
    alignSelf: "center",
  },
  thumbsContainer: { marginTop: 0 },
  thumb: {
    marginTop: 0,
    marginVertical: 20,
    marginHorizontal: 5,
    paddingBottom: 10,
    padding: 5,
    flex: 1,
    width: screen.width / 2 - 20,
    height: screen.width / 2 - 80,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  thumbText: {
    color: "white",
    fontSize: 14,
    fontWeight: "bold",
    alignSelf: "flex-end",
    backgroundColor: "transparent",
    alignContent: "space-around",
    maxWidth: screen.width / 2 - 60
  },
  percentage: {
    color: "white",
    fontSize: 19,
    fontWeight: "bold",
    // textAlign: "riht",
    alignSelf: "flex-end",
    backgroundColor: "transparent",
    // paddingLeft: 30
  },
  thumbIcon: {
    width: 30,
    height: 30
  },
  offersText: {
    fontSize: 18,
    color: constants.colors.mainColor,
    padding: 5,
    paddingHorizontal: 20,
    paddingBottom: 0
  },
  viewAllText: {
    fontSize: 16,
    color: "gray",
    padding: 5,
    paddingHorizontal: 20,
    paddingBottom: 0,
    fontWeight: "200",
    alignSelf: "flex-end",
    // marginLeft: 185
  },
  offersHeaderSection: {
    paddingTop:15,
    paddingVertical: 10,
    // alignItems: "flex-end",
    justifyContent:'space-between',
    width: screen.width,
    flexDirection: "row"
  },
  toursHeaderSection: {
    marginTop: -10,
    justifyContent:'space-between',
    width: screen.width,
    flexDirection: "row",
    marginBottom: 5
  },
  slide: {
    // marginTop: 10,
    width: Dimensions.get('window').width * 0.75 ,
    height: Dimensions.get('window').height/6,
  },
  slideTours: {
    // marginLeft: 10,
    marginRight: -10,
    width: Dimensions.get('window').width/2.5 ,
    height: Dimensions.get('window').height/4,
    alignSelf: "center",
    alignItems: "center",
    alignContent: "center",
  },
  slideInnerContainer: {
    width: Dimensions.get('window').width,
    flex: 1
    // other styles for the inner container
  },
  modalButton:{
    flex: 1,
    marginHorizontal: 15,
    alignSelf: "stretch",
    backgroundColor: constants.colors.mainColor,
    overflow: "hidden",
    borderRadius: 5,
    marginTop: 30,
    maxWidth: 220,
    paddingHorizontal: 15,
    justifyContent: "space-around",
    height: 30,
  }
});

export const getStyle = () => {
  // const { width } = Dimensions.get('window');
  // let styles = (width > constants.maxWidth) ? maxResetPasswordStyles : resetPasswordStyles
  // return {...styles, ...commonStyles}
  return styles;
};
