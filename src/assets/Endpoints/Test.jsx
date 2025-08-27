import '../cssfiles/test.css'
import { FaGithub } from 'react-icons/fa'
const github=<FaGithub  onClick={()=>{openInNewTab("https://github.com/AVJ125")}}  title='Github' style={{ fontSize: '2rem', color: '#000000ff', cursor: 'pointer' }} />

import Tooltip from '../components/tooltip'
function Test(){
    return(
        <div style={{paddingLeft:"500px"}}>
            <Tooltip imagehover="public/leetcode.png" butt={github}/>
        </div>
    )
}

export default Test