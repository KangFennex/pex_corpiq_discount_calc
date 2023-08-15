import { connect } from "react-redux";

function DiscountRateCalc({ membershipCost }) {
  const savingsMembership = membershipCost * 0.1;
  const total = membershipCost - savingsMembership;
  const totalTax = total * 1.14975;

  return (
    <>
      <div className="amounts">
        <div className="amount">
          {`Économies: ${savingsMembership.toFixed(2)}`} $
        </div>
        <div className="amount">{`Total: ${total.toFixed(2)}`} $</div>
        <div className="amount">{`Avec-taxes: ${totalTax.toFixed(2)}`} $</div>
      </div>
    </>
  );
}
const mapStateToProps = (state) => ({
  savingsMembership: state.savingsMembership,
});

export default connect(mapStateToProps)(DiscountRateCalc);
