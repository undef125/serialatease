import ChannelSection from './ChannelSection';
import styles from './channel.module.css'

export default function Colors() {
  return (
    <div className={styles.colorcontainer}>
        <h2>Colors TV:</h2>
        <ChannelSection channelName={'Colors'} />
    </div>
  )
}
