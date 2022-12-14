import React, {useState, useEffect} from "react";
import axios from "../../pages/api/api";
import styles from "./channel.module.css";
import Router from 'next/router'
import cookieCutter from 'cookie-cutter';
//from chakra ui
import { Stack, Skeleton } from "@chakra-ui/react";

export default function ChannelSection({ channelName,setisCookieAvailable }) {

  const [serialNames, setSerialNames] = useState([]);
  const [loading, setLoading] = useState(true);

  const getSerialNames = async () => {
    setLoading(true);
    try {
      let data = await axios.get(`/getnames/${channelName}`);
      setSerialNames(data.data);
      cookieCutter.set(`${channelName}`, data.data, {expires: new Date().getTime() + 1000*60*60*24});
      setLoading(false);
    } catch (error) {
      console.log(`error: ${error}`);
    }
  };
  useEffect(() => {
    if(cookieCutter.get('Colors') && cookieCutter.get('StarPlus') && cookieCutter.get('Zee-TV')){
      setisCookieAvailable(true);
      setSerialNames(cookieCutter.get(`${channelName}`).split(",")); 
      setLoading(false);
    } else {
      getSerialNames();
    }
  }, []);

  return (
    <div className={styles.namecontainer}>
      {loading ? (
        <Stack style={{width: "100vw", display: 'flex', flexDirection: 'row', gap: '2rem', flexWrap: 'wrap'}}>
          <Skeleton
            height="5rem"
            width="9.5rem"
            startColor="#212a3f "
            endColor="#26314a"
            style={{ borderRadius: "10px", padding: '.5rem',}}
          />
          <Skeleton
            height="5rem"
            width="9.5rem"
            startColor="#212a3f "
            endColor="#26314a"
            style={{ borderRadius: "10px", padding: '.5rem',}}
          />
          <Skeleton
            height="5rem"
            width="9.5rem"
            startColor="#212a3f "
            endColor="#26314a"
            style={{ borderRadius: "10px", padding: '.5rem',}}
          />
          <Skeleton
            height="5rem"
            width="9.5rem"
            startColor="#212a3f "
            endColor="#26314a"
            style={{ borderRadius: "10px", padding: '.5rem'}}
          />
          <Skeleton
            height="5.5rem"
            width="9.5rem"
            startColor="#212a3f "
            endColor="#26314a"
            style={{ borderRadius: "10px", padding: '.5rem'}}
          />
          <Skeleton
            height="5.5rem"
            width="9.5rem"
            startColor="#212a3f "
            endColor="#26314a"
            style={{ borderRadius: "10px", padding: '.5rem'}}
          />
          <Skeleton
            height="5.5rem"
            width="9.5rem"
            startColor="#212a3f "
            endColor="#26314a"
            style={{ borderRadius: "10px", padding: '.5rem'}}
          />
          <Skeleton
            height="5.5rem"
            width="9.5rem"
            startColor="#212a3f "
            endColor="#26314a"
            style={{ borderRadius: "10px", padding: '.5rem'}}
          />
          <Skeleton
            height="5.5rem"
            width="9.5rem"
            startColor="#212a3f "
            endColor="#26314a"
            style={{ borderRadius: "10px", padding: '.5rem'}}
          />
          <Skeleton
            height="5.5rem"
            width="9.5rem"
            startColor="#212a3f "
            endColor="#26314a"
            style={{ borderRadius: "10px", padding: '.5rem'}}
          />
          <Skeleton
            height="5.5rem"
            width="9.5rem"
            startColor="#212a3f "
            endColor="#26314a"
            style={{ borderRadius: "10px", padding: '.5rem'}}
          />
        </Stack>
      ) : (
        // fast 
        // ? (
        //   console.log('gg')
        // ) 
        // : (
          serialNames?.map((name) => (
            <div className={styles.individualnamecontainer} key={Math.random()} onClick={async() => {
              
              localStorage.setItem('channelName', `${channelName}`)
              localStorage.setItem('serialName', `${name}`)
              Router.push('/videoplay')
  
            }}>
              {name}
            </div>
          ))
        )
        
      // )
      }
    </div>
  );
}
