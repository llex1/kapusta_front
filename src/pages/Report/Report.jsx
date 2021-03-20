import React from "react";
// import { Link } from "react-router-dom";
import Header from "../../components/Header";
import Background from "../../components/Background";
import DiagramsContainer from "../../components/Diagrams";
import CurrentPeriod from "../../components/CurrentPeriod/CurrentPeriod";
import styles from "./Report.module.css";
import BackToMain from "../../components/BackToMain/BackToMain";

export default function Report() {
  return (
    <React.Fragment>
      <Header />
      <div className={ styles.wrapper}>
        <BackToMain />
        <CurrentPeriod />
      </div>
      <DiagramsContainer />
      <Background />
    </React.Fragment>
  );
}
