import React, { useState, useEffect } from "react";
import axios from "./api/api";
import { Dna } from "react-loader-spinner";
import styles from "./home.module.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function VideoPlay() {

  const [source, setsource] = useState("");
  const [loading, setloading] = useState(true);

  const getFinalLink = async () => {
    setloading(true);
    toast.info("Scraping takes time please be patient. Thank you.", {
      autoClose: 3000,
      toastId: "patient",
    });
    let channelName = localStorage.getItem("channelName");
    let serialName = localStorage.getItem("serialName");
    try {
      let data = await axios.post("/getvideolink", {
        channelname: channelName,
        serialname: serialName,
      });
      setsource(data.data);
      setloading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getFinalLink();
  }, []);

  return (
    <div className={styles.noscrollcontainer}>
      {loading ? (
        <>
          <ToastContainer />
          <div className={styles.dnaholder}>
            <Dna
              visible={true}
              height="140"
              width="140"
              ariaLabel="dna-loading"
              wrapperStyle={{}}
              wrapperClass="dna-wrapper"
            />
          </div>
        </>
      ) : (
        <iframe
          src={source}
          frameBorder="0"
          style={{ height: "100vh", width: "100vw", overflow: "hidden" }}
        ></iframe>
      )}
    </div>
  );
}
