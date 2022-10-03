import React, { useState,useEffect } from "react";
import Colors from "../components/HomePageComponents/Colors";
import StarPlus from "../components/HomePageComponents/StarPlus";
import ZeeTV from "../components/HomePageComponents/ZeeTV";
import styles from "./home.module.css";

export default function HomePage() {
  const [colorsclick, setcolorclick] = useState(false);
  const [starplusclick, setstarplusclick] = useState(false);
  const [zeetvclick, setzeetvclick] = useState(false);

  const sequencer = () => {
    setTimeout(() => setcolorclick(true), 0);
    setTimeout(() => setstarplusclick(true), 4000);
    setTimeout(() => setzeetvclick(true), 8000);

  };

  sequencer();

  useEffect(() => {}, [colorsclick, starplusclick, zeetvclick]);

  return (
    <>
    <div className={styles.wholecontainer}>
      {colorsclick ? <Colors channelName={"Colors"} /> : null}
      {starplusclick ? <StarPlus channelName={"StarPlus"} /> : null}
      {zeetvclick ? <ZeeTV channelName={"Zee-TV"} /> : null}
    </div>
    </>
  );
}
