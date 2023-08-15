import "./discountCalcul.css";
import { connect } from "react-redux";
import corpiqLogo from "./assets/corpiq logo.png";
import PEXlogo from "./assets/PEX logo.png";
import MembershipInput from "./components/MembershipInput";
import { setInputValues } from "./components/actions";
import { ConnectedDiscountRateCalc } from "./components/containerComponents";
import { ConnectedPercentageRental } from "./components/containerComponents";
import { ConnectedDiscountScreeningsAndLeases } from "./components/containerComponents";

const DiscountCalcul = ({
  setInputValues,
  numberOfDoors,
  percentageRental,
}) => {
  const handleNumberOfDoorsChange = (e) => {
    const inputValue = e.target.value;
    const parsedValue = inputValue !== "" ? parseFloat(inputValue) : "";

    setInputValues({
      numberOfDoors: parsedValue,
      percentageRental,
    });
  };

  const handlePercentageRentalChange = (e) => {
    const inputValue = e.target.value;
    const parsedValue = inputValue !== "" ? parseFloat(inputValue) : "";

    setInputValues({
      numberOfDoors,
      percentageRental: parsedValue,
    });
  };

  return (
    <div>
      <div className="discount-calcul-grid">
        <div className="row logos span-three">
          <img src={corpiqLogo} alt="CORPIQ logo" />
          <img src={PEXlogo} alt="ProprioExpert logo" />
        </div>
        <div className="col description">Forfait PEX</div>
        <div className="col description">%</div>
        <div className="col description">Rabais sur PEX</div>
        <div className="row input">
          <MembershipInput setInputValues={setInputValues} />
        </div>
        <div className="row discount">x 10%</div>
        <div className="row result">
          <ConnectedDiscountRateCalc />
        </div>
        <div className="row description">Nombre de portes</div>
        <div className="row description">Unités en location</div>
        <div className="row description">Besoins</div>
        <div className="row input">
          <input
            type="number"
            required
            placeholder="Nombre de portes"
            onChange={handleNumberOfDoorsChange}
          />
          <div className="bar"></div>
        </div>
        <div className="row input">
          <input
            type="number"
            required
            placeholder="Pourcentage (%)"
            onChange={handlePercentageRentalChange}
          />
          <div className="bar"></div>
        </div>
        <div className="row input">
          <ConnectedPercentageRental />
        </div>
      </div>
      <ConnectedDiscountScreeningsAndLeases />
    </div>
  );
};

const mapStateToProps = (state) => ({
  membershipCost: state.membershipCost,
  numberOfDoors: state.numberOfDoors,
  percentageRental: state.percentageRental,
  savingsMembership: state.savingsMembership,
});

const mapDispatchToProps = (dispatch) => ({
  setInputValues: (values) => dispatch(setInputValues(values)),
});

export default connect(mapStateToProps, mapDispatchToProps)(DiscountCalcul);
