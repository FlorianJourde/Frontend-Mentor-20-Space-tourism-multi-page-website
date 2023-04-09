import Tabs from "../../components/Tabs";
import datas from "../../datas/data.json";
import setBackground from "../../utils/setBackground";

function Crew() {
  setBackground('crew');

  return  (
    <section className={'crew-section'}>
      <div className={'wrapper'}>
        <h1>Crew</h1>
        <Tabs crew={datas.crew} name={'crew'}/>
      </div>
    </section>
  )
}

export default Crew;