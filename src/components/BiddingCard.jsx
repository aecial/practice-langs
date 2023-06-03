function BiddingCard({ name, price, volume }) {
  return (
    <div className="bid-card">
      <h1>{name}</h1>
      <h2>{price} pesos</h2>
      <h4>{volume} kilograms</h4>
    </div>
  );
}
export default BiddingCard;
