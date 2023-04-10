import Tabs from "../../components/Tabs";
import datas from "../../datas/data.json";
import setBackground from "../../utils/setBackground";
import '../../styles/Destination.scss'

function Destination() {
  setBackground( 'destination');

  return  (
    <section className={'destination-section'}>
      <div className={'wrapper'}>
        <h1><span className={'number'}>01</span> Pick your destination</h1>
        <Tabs destination={datas.destinations} name={'destination'}/>
      </div>
    </section>
  )
}

export default Destination;