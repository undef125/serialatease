import React from 'react';
import ChannelSection from './ChannelSection';
import styles from './channel.module.css'

export default function StarPlus() {
  return (
    <div className={styles.starcontainer}>
        <h2>Starplus TV:</h2>
        <ChannelSection channelName={'StarPlus'} />
    </div>
  )
}
