import React from 'react';
import ChannelSection from './ChannelSection';
import styles from './channel.module.css'

export default function ZeeTV() {
  return (
    <div className={styles.zeecontainer}>
        <h2>Zee-TV:</h2>
        <ChannelSection channelName={'Zee-TV'} />
    </div>
  )
}
