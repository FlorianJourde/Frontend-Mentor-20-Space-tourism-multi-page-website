import Tabs from "../../components/Tabs";
import datas from "../../datas/data.json";
import setBackground from "../../utils/setBackground";
import "../../styles/Technology.scss"

function Technology() {
  setBackground('technology');

  return  (
    <section className={'technology-section padding-top-medium  padding-bottom-medium'}>
      <div className={'wrapper'}>
        <h1><span className={'number'}>03</span> Space lauche 101</h1>
        <Tabs technology={datas.technology} name={'technology'}/>
      </div>
    </section>
  )
}

export default Technology;