import {useEffect, useState} from "react";
import '../../styles/Tabs.scss'

function CrewTabs(props) {
  const [toggleState, setToggleState] = useState(Object.values(props)[0]);
  const [initValue, setInitValue] = useState(true);
  const datas = Object.values(props)[0];

  const toggleInit = () => {
    setInitValue(false)
  }

  const toggleTab = (index) => {
    setToggleState(index)
  }

  const [matches, setMatches] = useState(
    window.matchMedia("(min-width: 768px)").matches
  )

  useEffect(() => {
    window
      .matchMedia("(min-width: 768px)")
      .addEventListener('change', e => setMatches( e.matches ));
  }, []);

  return (
    <div className={'tabs-container'}>
      <h2>Tabs</h2>

      {datas.map((key, index) =>
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
          {index}
        </button>
      )}

      {datas.map(({name, images, description, role, bio, distance, travel}, index) =>
          <div
            key={name}
            className=
              {(initValue === true && index === 0) || (toggleState === index) ? "content active" : "content" }
          >
            {name ?? <p>{name}</p>}
            {images.png && <img src={images.png} alt=""/>}
            {(matches && (images.portrait || images.landscape)) && (<img src={images.landscape} alt=""/>)}
            {!matches && (<img src={images.portrait} alt=""/>)}
            {images.description && <p>{description}</p>}
            {description && <p>{description}</p>}
            {distance && <p>{distance}</p>}
            {travel && <p>{travel}</p>}
            {role && <p>{role}</p>}
            {bio && <p>{bio}</p>}
          </div>
        )}
    </div>
  )

/*{datas.map(({name, images, description}, index) =>
  initValue === true && index === 0 ? (
   <div
     key={name}
     className={"content active"}
   >
     <p>{name}</p>
     {images.png ? <img src={images.png} alt=""/> : null}
     <p>{description}</p>
     <p>{index}</p>
   </div>
  ) : (
   <div
     key={name}
     className={toggleState === index ? "content active" : "content"}
   >
     <p>{name}</p>
     {images.png ? <img src={images.png} alt=""/> : null}
     {description ? <p>{description}</p> : ''}
     <p>{index}</p>
   </div>
))}*/

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

export default CrewTabs;