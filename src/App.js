import React from "react";
import Review from "./Review";

const App = () => {
  return (
    <React.Fragment>
      <main>
        <section>
          <div>
            <h1>Our Reviews</h1>
          </div>
          <Review />
        </section>
      </main>
    </React.Fragment>
  );
};

export default App;
