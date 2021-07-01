import React from "react";
import { UserStats } from '.';

function Stats() {
  return (
    <div className="stats">
      <div className="container">
        <div className="row align-items-center my-5">
          <UserStats />
        </div>
      </div>
    </div>
  );
}

export default Stats;
