import Tabs from "../../components/Tabs";
import datas from "../../datas/data.json";
import setBackground from "../../utils/setBackground";

function Technology() {
  setBackground('technology');

  return  (
    <section className={'technology-section'}>
      <h1>Technology</h1>
      <Tabs technology={datas.technology} name={'technology'}/>
    </section>
  )
}

export default Technology;