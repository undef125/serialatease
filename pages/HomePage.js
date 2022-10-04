import React, { useState,useEffect } from "react";
import Colors from "../components/HomePageComponents/Colors";
import StarPlus from "../components/HomePageComponents/StarPlus";
import ZeeTV from "../components/HomePageComponents/ZeeTV";
import styles from "./home.module.css";

export default function HomePage() {
  const [colorsclick, setcolorclick] = useState(false);
  const [starplusclick, setstarplusclick] = useState(false);
  const [zeetvclick, setzeetvclick] = useState(false);
  const [isCookieAvailable, setisCookieAvailable] = useState(false);

  const sequencer = (timea, timeb, timec) => {
    setTimeout(() => setcolorclick(true), timea);
    setTimeout(() => setstarplusclick(true), timeb);
    setTimeout(() => setzeetvclick(true), timec);

  };
//if name of serial are available in cookie no need to do api call
  isCookieAvailable ? sequencer(0,0,0) : sequencer(0, 4000, 8000);

  useEffect(() => {}, [colorsclick, starplusclick, zeetvclick]);

  return (
    <>
    <div className={styles.wholecontainer}>
      {colorsclick ? <Colors channelName={"Colors"} setisCookieAvailable={setisCookieAvailable}/> : null}
      {starplusclick ? <StarPlus channelName={"StarPlus"} setisCookieAvailable={setisCookieAvailable}/> : null}
      {zeetvclick ? <ZeeTV channelName={"Zee-TV"} setisCookieAvailable={setisCookieAvailable}/> : null}
    </div>
    </>
  );
}
