import {useEffect, useState} from "react";
import '../../styles/Tabs.scss'

function Tabs(props) {
  const [toggleState, setToggleState] = useState(Object.values(props)[0]);
  const [initValue, setInitValue] = useState(true);
  const datas = Object.values(props)[0];
  const page = Object.values(props)[1];

  const toggleInit = () => {
    setInitValue(false)
  }

  const toggleTab = (index) => {
    setToggleState(index)
  }

  const [matches, setMatches] = useState(
    window.matchMedia("(min-width: 1024px)").matches
  )

  useEffect(() => {
    window
      .matchMedia("(min-width: 1024px)")
      .addEventListener('change', e => setMatches(e.matches));
  }, []);

  return (
    <div className={'tabs-container'}>

      {datas.map(({name, images, description, role, bio, distance, travel}, index) =>
        <div
          key={name}
          className=
            {(initValue === true && index === 0) || (toggleState === index) ? "content active" : "content"}
        >

          {images.png && <div className={'image-container'}><img src={images.png} alt=""/></div>}

          <div className={'steps'}>
            {datas.map(({key, name}, index) =>
              <button
                key={`step-${index}`}
                className={
                  (initValue === true && index === 0) || (toggleState === index) ? "step active" : "step"
                }
                onClick={() => {
                  toggleTab(index);
                  toggleInit();
                }
                }
              >
                {page === 'crew' && '●'}
                {page === 'destination' && name}
                {page === 'technology' && index}
              </button>
            )}
          </div>

          {(matches && (images.portrait || images.landscape)) && (<img src={images.portrait} alt=""/>)}
          {(!matches && (images.portrait || images.landscape)) && (<img src={images.landscape} alt=""/>)}
          {images.description && <p className={'image-description'}>{description}</p>}
          {description && <p className={'description'}>{description}</p>}
          {role && <p className={'role'}>{role}</p>}
          {page === 'technology' && <p className={'terminology'}>The terminology...</p>}
          {name && <h2 className={'name'}>{name}</h2>}
          {bio && <p className={'bio'}>{bio}</p>}

          {(distance || travel) && (
            <div className={'specs'}>
              {distance &&
                <div className={'spec distance'}>
                  <p className={'label'}>Avg. distance</p>
                  <p>{distance}</p>
                </div>
              }
              {travel &&
                <div className={'spec travel'}>
                  <p className={'label'}>Est. travel time</p>
                  <p>{travel}</p>
                </div>
              }
            </div>
          )}

        </div>
      )}
    </div>
  )
}

export default Tabs;