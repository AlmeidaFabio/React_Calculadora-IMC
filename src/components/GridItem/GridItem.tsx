import { level } from "../../helpers/imc"
import Styles from './GridItem.module.css'
import { MdThumbDown, MdThumbUp } from 'react-icons/md'

type Props = {
    item: level;
}

export function GridItem({item}:Props) {
    return(
        <div className={Styles.main} style={{backgroundColor:item.color}}>
            <div className={Styles.icon}>
                {item.icon === 'down' && <MdThumbDown size={40}/>}
                {item.icon === 'up' && <MdThumbUp size={40}/>}
            </div>
            <div className={Styles.title}>{item.title}</div>
            {item.yourImc && 
                <div className={Styles.yourImc}>Seu IMC é {item.yourImc.toFixed(2)} kg/m</div>
            }
            <div className={Styles.info}>
                <>
                    Seu IMC está entre <strong>{item.imc[0]}</strong> e <strong>{item.imc[1]}</strong>
                </>
            </div>
        </div>
    )
}