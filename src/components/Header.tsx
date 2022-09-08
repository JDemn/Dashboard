import '../styles/header/header.css';
import { Button } from './Button';
export const Header = () => {

  return (
    <div className='header'>
      <Button title='Conexión' boxType='header' />
      <div className='iconsHeaderStyle'>
        <span className="material-symbols-outlined">
          refresh
        </span>
        <span className="material-symbols-outlined">
          share
        </span>
      </div>
    </div>
  )
}
