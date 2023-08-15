import { connect } from "react-redux";
import { setInputValues } from "./actions";

const MembershipInput = ({ setInputValues }) => {
  return (
    <>
      <input
        type="number"
        required
        placeholder="Prix ($)"
        onChange={(e) =>
          setInputValues({
            membershipCost: parseFloat(e.target.value),
          })
        }
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
