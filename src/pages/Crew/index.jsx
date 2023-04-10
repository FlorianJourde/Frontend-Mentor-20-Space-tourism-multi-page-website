import Tabs from "../../components/Tabs";
import datas from "../../datas/data.json";
import setBackground from "../../utils/setBackground";
import '../../styles/Crew.scss'

function Crew() {
  setBackground('crew');

  return  (
    <section className={'crew-section padding-top-medium padding-bottom-medium'}>
      <div className={'wrapper'}>
        <h1><span className={'number'}>02</span> Meet your crew</h1>
        <Tabs crew={datas.crew} name={'crew'}/>
      </div>
    </section>
  )
}

export default Crew;