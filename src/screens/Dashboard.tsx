import '../styles/dashboard/dash.css'
import '../styles/cont/container.css'
import '../styles/cont/main.css'
import { Box } from '../components/Box';
import { Header } from '../components/Header';
import { Navbar } from '../components/Navbar';
export const Dashboard = () => {
  return (
    <div className='dash'>
      <Header />
      <div className='conteinNavandMainconteiner'>
        <Navbar />
        <div className='container'>
          <Box typeBox='price' title='Precio criptomoneda' />
          <Box typeBox='tImpositivos' title='Tipos impositivos' />
          <Box typeBox='edicion' title='Edición' />
          <Box typeBox='piscinacomunitaria' title='Piscinacomunitaria' />
          <Box typeBox='relacion' title='Relación de apuestas' />
        </div>
      </div>
    </div>
  )
}
