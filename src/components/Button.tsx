import './button.css'

interface PropsButton {
    title ?:  string,
    // colorss():void,    epecificar que va a recibir funciones
    styles ?: string,
    boxType ?: 'header' |'impositivos'|'piscinaComunitaria'|'precioCripto',
}


export const Button = ({styles, title, boxType}:PropsButton) => {
    return (
        // <button className={ (boxType === 'header')?styles='bHeader':styles = 'impositivos'} >{title = "iuugui"}</button>
        // styles = 'bHeader'
        <>
            {
                ((boxType === 'header')&&<button className= {styles='bHeader'}>{title}</button>)||
                ((boxType === 'impositivos')&&<button className= {styles='impositivos'}>{title}</button>)||
                ((boxType === 'piscinaComunitaria' && <button className= {styles='piscinaComunitaria'}>{title}<span className="material-symbols-outlined">keyboard_arrow_down</span></button>))||
                ((boxType === 'precioCripto') && <button className={styles = 'precioCripto'}>{title}</button>)
            }
            
        </>
    )
}