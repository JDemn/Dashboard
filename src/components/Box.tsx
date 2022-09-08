import React from 'react'
import '../styles/box/box.css'
import { Button } from './Button'
interface Props {
    title?: string,
    typeBox?: string,
}
export const Box = (props: Props) => {
    //NOTE: condicionar caja por tipo de 'precio luna dar cierto estilo', 'tipos impositivos', 'edición', 'piscina comunitaria' y 'relacón de apuestas'
    return (
        <>
            {(props.typeBox === 'price' && (<>
                <div className='box'>
                    <header className='headder'>
                        {props.title}
                        <span className="material-symbols-outlined">
                            chevron_right
                        </span>
                    </header>
                    <div className='boxBody'>
                        <h4>1726w172 USD</h4>
                        <Button title='UST' boxType='precioCripto'/>
                    </div>
                </div>
            </>))
                || (props.typeBox === 'tImpositivos' && (<div className='box'>
                    <header className='headder'>
                        {props.title}
                    </header>
                    <div className='boxBody'>
                        <h4>1726w172 USD</h4>

                        <Button title='Con límite de un SDT' boxType='impositivos'/>
                    </div>
                </div>))
                || (props.typeBox === 'edicion' && (<div className='box'>
                    <header className='headder'>
                        {props.title}
                    </header>
                    <div className='boxBody'>
                        <h4>1726w172 USD</h4>
                        <Button boxType='piscinaComunitaria' title='Luna'/>
                    </div>
                </div>))
                || (props.typeBox === 'piscinacomunitaria' && (<div className='box'>
                    <header className='headder'>
                        {props.title}
                    </header>
                    <div className='boxBody'>
                        <h4>1726w172 USD</h4>
                        <Button boxType='piscinaComunitaria' title='Luna'/>
                    </div>
                </div>))
                || (props.typeBox === 'relacion' && (<div className='box'>
                    <header className='headder'>
                        {props.title}
                    </header>
                    <div className='boxBody'>
                        <h4>1726w172 USD</h4>
                        <Button title='Estacas cripto /Total cripto' boxType='impositivos'/>
                    </div>
                </div>))
            }
        </>
    )
}
