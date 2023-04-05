import {useEffect, useState} from "react";
import '../../styles/Tabs.scss'

function Tabs(props) {
  // const [toggleState, setToggleState] = useState(1);
  const [toggleState, setToggleState] = useState(Object.values(props)[0]);
  const [initValue, setInitValue] = useState(true);
  // const [datas, setDatas] = useState(props);
  // const [datas, setDatas] = useState(props);
  // const [toggleState, setToggleState] = useState([]);
  // const elements = props;
  const datas = Object.values(props)[0];

  // console.log(props);
  // console.log(Object.values(props)[0]);
  // console.log();

  // function toggleTab(index) {
  //   setToggleState(index);
  //   // console.log(index);
  // }

  console.log(datas);

  const toggleInit = () => {
    setInitValue(false)
    // console.log(setInitValue);
  }

  const toggleTab = (index) => {
    setToggleState(index)
    // console.log(index);
  }

  // useEffect(() => {
  //   // Met à jour le titre du document via l’API du navigateur
  //   toggleState = 1;
  // });

  return (
    <div className={'tabs-container'}>
      <h2>Tabs</h2>

      {/*{initValue === true ? (*/}
      {/*  <p>Hello</p>*/}
      {/*) : (*/}
      {/*  <p>Goodbye</p>*/}
      {/*)}*/}

      {datas.map((key, index) =>
        // <button
        //   key={`tab-${index}`}
        //   className={index === 0 ? "tabs active" : "tabs"}
        //   onClick={() => toggleTab(index)}
        // >

        <button
          key={`tab-${index}`}
          className={
            toggleState === index ? "tabs active" : "tabs"
          }
          onClick={() => {
            toggleTab(index);
            toggleInit();
          }
          }
        >
          Tab {index}
        </button>
      )}

      {datas.map(({name, images, description}, index) =>
        initValue === true && index === 0 ? (
          <div
            key={name}
            className={"content active"}
          >
            <p>{name}</p>
            <p>{description}</p>
            <p>{index}</p>
          </div>
        ) : (
          <div
            key={name}
            className={toggleState === index ? "content active" : "content"}
          >
            <p>{name}</p>
            <p>{description}</p>
            <p>{index}</p>
          </div>
        ))}
    </div>
  )

  /*return (
    <div className={'tabs-container'}>
      <h2>Tabs</h2>
      <div className="bloc-tabs">
        <button
          className={toggleState === 1 ? "tabs active" : "tabs"}
          onClick={() => toggleTab(1)}
        >
          Tab 1
        </button>
        <button
          className={toggleState === 2 ? "tabs active" : "tabs"}
          onClick={() => toggleTab(2)}
        >
          Tab 2
        </button>
        <button
          className={toggleState === 3 ? "tabs active" : "tabs"}
          onClick={() => toggleTab(3)}
        >
          Tab 3
        </button>
      </div>

      <div className="content-tabs">
        <div
          className={toggleState === 1 ? "content  active" : "content"}
        >
          <h2>Content 1</h2>
          <hr/>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
            praesentium incidunt quia aspernatur quasi quidem facilis quo nihil
            vel voluptatum?
          </p>
        </div>

        <div
          className={toggleState === 2 ? "content  active" : "content"}
        >
          <h2>Content 2</h2>
          <hr/>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente
            voluptatum qui adipisci.
          </p>
        </div>

        <div
          className={toggleState === 3 ? "content  active" : "content"}
        >
          <h2>Content 3</h2>
          <hr/>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos sed
            nostrum rerum laudantium totam unde adipisci incidunt modi alias!
            Accusamus in quia odit aspernatur provident et ad vel distinctio
            recusandae totam quidem repudiandae omnis veritatis nostrum
            laboriosam architecto optio rem, dignissimos voluptatum beatae
            aperiam voluptatem atque. Beatae rerum dolores sunt.
          </p>
        </div>
      </div>
    </div>
  )*/
}

export default Tabs;