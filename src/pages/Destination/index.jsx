import Tabs from "../../components/Tabs";
import datas from "../../datas/data.json";

function Destination() {
  return  (
    <section className={'destination-section'}>
      <h1>Destination</h1>
      {/*<Tabs destination={datas.destinations} name={'destination'}/>*/}
      <Tabs destination={datas.destinations} name={'destination'}/>
    </section>
  )
}

export default Destination;