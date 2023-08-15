import { connect } from "react-redux";
import { setInputValues } from "./actions";
import PercentageRental from "./PercentageRental";
import DiscountRateCalc from "./DiscountRateCalc";
import DiscountScreeningsAndLeases from "./DiscountScreeningsAndLeases";

const mapStateToProps = (state) => ({
  numberOfDoors: state.numberOfDoors,
  percentageRental: state.percentageRental,
  membershipCost: state.membershipCost,
  savingsMembership: state.savingsMembership,
  screeningsAndLeases: state.screeningsAndLeases,
});

const mapDispatchToProps = (dispatch) => ({
  setInputValues: (values) => dispatch(setInputValues(values)),
});

export const ConnectedPercentageRental = connect(
  mapStateToProps,
  mapDispatchToProps
)(PercentageRental);

export const ConnectedDiscountRateCalc = connect(
  mapStateToProps,
  mapDispatchToProps
)(DiscountRateCalc);

export const ConnectedDiscountScreeningsAndLeases = connect(
  mapStateToProps,
  mapDispatchToProps
)(DiscountScreeningsAndLeases);
