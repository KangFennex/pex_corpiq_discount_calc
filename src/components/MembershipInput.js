import { connect } from "react-redux";
import { setInputValues } from "./actions";

const MembershipInput = ({ setInputValues, membershipCost }) => {
  const handleInputChange = (e) => {
    const inputValue = e.target.value;
    const parsedValue = inputValue !== "" ? parseFloat(inputValue) : "";

    setInputValues({
      membershipCost: parsedValue,
    });
  };

  return (
    <>
      <input
        type="number"
        required
        placeholder="Prix ($)"
        value={membershipCost !== 0 ? membershipCost : ""}
        onChange={handleInputChange}
      />
      <div className="bar"></div>
    </>
  );
};

const mapStateToProps = (state) => ({
  membershipCost: state.membershipCost,
});

const mapDispatchToProps = (dispatch) => ({
  setInputValues: (values) => dispatch(setInputValues(values)),
});

export default connect(mapStateToProps, mapDispatchToProps)(MembershipInput);
