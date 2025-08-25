import { Link } from 'react-router-dom';
import '../cssfiles/Navigation.css'


function Navigations(props){














    return (
    <div>
      <div className='svgHolder'>
        <svg className="svg" id="eKF7ChQ0URo1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 1920 1080" shape-rendering="geometricPrecision" text-rendering="geometricPrecision" project-id="bcb16f36de0c4ec18f23ddcdf8b9b146" export-id="bcd36f764629476b81362b2fd0a9a89e" cached="false"><defs><linearGradient id="eKF7ChQ0URo4-stroke" x1="400" y1="400" x2="-400" y2="400" spreadMethod="pad" gradientUnits="userSpaceOnUse" gradientTransform="translate(0 0)"><stop id="eKF7ChQ0URo4-stroke-0" offset="0%" stop-color="#ff8a00"/><stop id="eKF7ChQ0URo4-stroke-1" offset="15%" stop-color="#ff8a00"/><stop id="eKF7ChQ0URo4-stroke-2" offset="35%" stop-color="#8a2be2"/><stop id="eKF7ChQ0URo4-stroke-3" offset="50%" stop-color="#07f"/><stop id="eKF7ChQ0URo4-stroke-4" offset="65%" stop-color="#8a2be2"/><stop id="eKF7ChQ0URo4-stroke-5" offset="85%" stop-color="#ff8a00"/><stop id="eKF7ChQ0URo4-stroke-6" offset="100%" stop-color="#ff8a00"/></linearGradient><filter id="eKF7ChQ0URo5-filter" x="-150%" y="-150%" width="400%" height="400%"><feGaussianBlur id="eKF7ChQ0URo5-filter-blur-0" stdDeviation="4,4" result="result"/></filter><filter id="eKF7ChQ0URo6-filter" x="-150%" y="-150%" width="400%" height="400%"><feGaussianBlur id="eKF7ChQ0URo6-filter-blur-0" stdDeviation="4,4" result="result"/></filter></defs><g transform="matrix(3.141365 0.346064-.209119 1.898259-54.545965-484.827936)" paint-order="stroke markers fill"><g transform="matrix(.298704-.027463 0.029624 0.322204 247.769596 330.558263)"><circle r="250" transform="matrix(1.252055 0.738474-1.193667 2.023815 332.222973 479.311624)" fill="none" stroke="url(#eKF7ChQ0URo4-stroke)" stroke-width="150" stroke-linecap="round" stroke-linejoin="round"/><circle r="187.194872" transform="matrix(-1.122209-.669876-1.101362 1.845056 318.280134 481.853486)" filter="url(#eKF7ChQ0URo5-filter)" fill="none" stroke="#000" stroke-width="40"/><circle r="187.194872" transform="matrix(-2.197622-1.311818-2.086551 3.495493 310.489222 475.478038)" filter="url(#eKF7ChQ0URo6-filter)" fill="none" stroke="#000" stroke-width="40"/></g></g></svg>
      </div>
      <div className='container sansation-light'>
        <div className="left">

        </div>
        <div className='middle'>

          <div className={`About  ${props.whichpage === "About" ? "active" : "nav-link"}` }><Link to="/about">About</Link></div>
          <div className={`Projects  ${props.whichpage === "Projects" ? "active" : "nav-link"}` }><Link to="/projects">Projects</Link></div>
          <div className={`Experience  ${props.whichpage === "Experience" ? "active" : "nav-link"}` }><Link to="/experience">Experience</Link></div>
        </div>
        <div className="right">
          <div className='contactMe'>Contact me</div>
        </div>


      </div>
    </div>
    )
}


export default Navigations