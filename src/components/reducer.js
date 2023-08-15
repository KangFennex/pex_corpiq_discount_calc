import { calculateTotal } from "./utils";

const initialState = {
  numberOfDoors: 0,
  percentageRental: 0,
  membershipCost: 0,
  savingsMembership: 0,
  screeningsAndLeases: 0,
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_INPUT_VALUES":
      const { membershipCost, numberOfDoors, percentageRental } =
        action.payload;
      const savingsMembership = membershipCost * 0.1;
      const calculatedScreeningsAndLeases = calculateTotal(
        numberOfDoors,
        percentageRental
      );
      return {
        ...state,
        ...action.payload,
        savingsMembership,
        screeningsAndLeases: calculatedScreeningsAndLeases,
      };
    default:
      return state;
  }
};

export default rootReducer;
