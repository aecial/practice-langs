import React from "react";
import Greetings from "../components/Greetings";
import BiddingCard from "../components/BiddingCard";

const LandingPage = () => {
  return (
    <>
      <h1>Hello</h1>
      <Greetings name="Teddy" age={22} jobs={["programmer"]} />
      <Greetings name="Maya" age={25} jobs={["designer", "artist"]} />
      <Greetings
        name="Tiny"
        age={12}
        jobs={["cat", "zoomies", "baker", "masseuse"]}
      />
      <div className="bidding-list">
        <BiddingCard name="garlic" price={120} volume={4} />
        <BiddingCard name="tomato" price={240} volume={10} />
        <BiddingCard name="chilis" price={190} volume={8} />
      </div>
    </>
  );
};

export default LandingPage;
