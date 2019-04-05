import { StyleSheet, Dimensions } from "react-native";
import * as constants from "../../constants";

export const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "stretch",
  },
  body: {
    flex: 1,
    marginHorizontal: 0,
    marginVertical: 10,
    alignSelf: "stretch",
    backgroundColor: constants.colors.mainColor,
    overflow: "hidden",
    borderRadius: 5,
    paddingVertical: 8,
    maxWidth: 320,
    paddingHorizontal: 15,
    justifyContent: "space-around",
    height: 50
  },
  text: { color: "white", textAlign: "center", fontSize: 16 }
});
