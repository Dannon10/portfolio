export default function Pad({color, on}) {

    const styles = {
        backgroundColor: color
    }

  return (
    <div className='pad-container'>
        <button
        className={on ? 'on' : '' }
        style={styles}></button>
    </div>
  )
}
