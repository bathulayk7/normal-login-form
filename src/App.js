import React from "react";
import Header from "./component/shared/header/header.component";
import Footer from "./component/shared/Footer/footer.component";
import Login from "./component/Login/login.component";

function App() {
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <Header />
        </div>
        {/* <div className="col col-md-4">
          <Header />
        </div>
        <div className="col">
          <Header />
        </div> */}
      </div>

      <div className="row">
        <div className="col col-md-4 offset-md-4">
          <Login/>
        </div>
      </div>

      <div className="row">
        <div className="col">
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
