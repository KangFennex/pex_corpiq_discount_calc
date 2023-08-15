import { connect } from "react-redux";
import { calculateTotal } from "./utils";

function PercentageRental({ numberOfDoors, percentageRental }) {
  const screeningsAndLeases = calculateTotal(numberOfDoors, percentageRental);

  return (
    <>
      <div className="amounts">
        <div className="amount">{`No. d'enquêtes:  ${screeningsAndLeases}`}</div>
        <div className="amount">{`No. de baux:  ${screeningsAndLeases}`}</div>
      </div>
    </>
  );
}

const mapStateToProps = (state) => ({
  numberOfDoors: state.numberOfDoors,
  percentageRental: state.percentageRental,
});

export default connect(mapStateToProps)(PercentageRental);
