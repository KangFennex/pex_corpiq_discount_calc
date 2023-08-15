import { connect } from "react-redux";

const calculatePrices = (quantity, priceMember, priceNonMember) => {
  const regPrice = (quantity * priceNonMember).toFixed(2);
  const redPrice = (quantity * priceMember).toFixed(2);
  const savings = (regPrice - redPrice).toFixed(2);
  return { regPrice, redPrice, savings };
};

const DiscountScreeningsAndLeases = ({
  savingsMembership,
  screeningsAndLeases,
}) => {
  const screeningPrices = calculatePrices(screeningsAndLeases, 47.99, 74.9);

  const leasePrices = calculatePrices(screeningsAndLeases, 4.97, 8.29);

  return (
    <>
      <div className="savings-grid">
        <div className="row"></div>
        <div className="row description">Prix régulier</div>
        <div className="row description">Prix réduit</div>
        <div className="row description">Rabais</div>
        <div className="row description">Enquêtes</div>
        <div className="row result">{screeningPrices.regPrice} $</div>
        <div className="row result">{screeningPrices.redPrice} $</div>
        <div className="row result">{screeningPrices.savings} $</div>
        <div className="row description">Baux</div>
        <div className="row result">{leasePrices.regPrice} $</div>
        <div className="row result">{leasePrices.redPrice} $</div>
        <div className="row result">{leasePrices.savings} $</div>
        <div className="row description">Rabais adhésion</div>
        <div className="row description">Rabais enquêtes</div>
        <div className="row description">Rabais baux</div>
        <div className="row description">Rabais totale</div>
        <div className="row result"> {savingsMembership} $</div>
        <div className="row result">{screeningPrices.savings} $</div>
        <div className="row result">{leasePrices.savings} $</div>
        <div className="row"></div>
      </div>
    </>
  );
};

const mapStateToProps = (state) => ({
  savingsMembership: state.savingsMembership,
  screeningsAndLeases: state.screeningsAndLeases,
});

export default connect(mapStateToProps)(DiscountScreeningsAndLeases);
