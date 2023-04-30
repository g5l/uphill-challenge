import Header from "@/components/Header/Header";
import React, {Fragment} from "react";

function Home(props) {
  return (
    <Fragment>
      <Header/>
      {props.children}
    </Fragment>
  );
}

export default Home;