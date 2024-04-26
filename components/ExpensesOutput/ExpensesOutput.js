import { StyleSheet, View, Text, useWindowDimensions } from "react-native";
import { useState, useRef } from "react";
import Lottie from "lottie-react-native";
import { GlobalStyles } from "../../constants/styles";
import ExpensesList from "./ExpensesList";
import ExpensesSummary from "./ExpensesSummary";
// import { BannerAd, BannerAdSize, TestIds } from 'react-native-google-mobile-ads';

// const adUnitId = __DEV__ ? TestIds.ADAPTIVE_BANNER : 'ca-app-pub-xxxxxxxxxxxxx/yyyyyyyyyyyyyy';

// import  { AdsConsentInterface } from "react-native-google-mobile-ads";

// let AdsConsent= undefined;

// if (isExpoGo) {
//     AdsConsent = require("react-native-google-mobile-ads").AdsConsent;
// }

function ExpensesOutput({ expenses, expensesPeriod, fallbackText }) {
  let content = <Text style={styles.infoText}>{fallbackText}</Text>;

  if (expenses.length > 0) {
    content = <ExpensesList expenses={expenses} />;
  }

  const { height } = useWindowDimensions();
  const animationRef = useRef();
  return (
    <View style={styles.container}>
      {/*   <BannerAd
      unitId={adUnitId}
      size={BannerAdSize.ANCHORED_ADAPTIVE_BANNER}
    /> */}
      <ExpensesSummary expenses={expenses} periodName={expensesPeriod} />
      {content}
      <Lottie
        style={[styles.logo, { height: height * 0.3, marginLeft: 20 }]}
        ref={animationRef}
        //style = {{flex:1}}
        source={require("../../assets/animations/58861-piggy-bank-coins-out.json")}
        loop={true}
        autoPlay={true}

        //speed = {0.5}
      />
    </View>
  );
}

export default ExpensesOutput;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: 24,
    paddingBottom: 0,
    backgroundColor: GlobalStyles.colors.primary700,
  },
  infoText: {
    color: "white",
    fontSize: 16,
    textAlign: "center",
    marginTop: 32,
  },
});
