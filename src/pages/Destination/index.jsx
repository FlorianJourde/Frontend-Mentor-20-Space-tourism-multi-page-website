import Tabs from "../../components/Tabs";
import datas from "../../datas/data.json";
import setBackground from "../../utils/setBackground";

function Destination() {
  setBackground( 'destination');

  return  (
    <section className={'destination-section'}>
      <h1>Destination</h1>
      <Tabs destination={datas.destinations} name={'destination'}/>
    </section>
  )
}

export default Destination;