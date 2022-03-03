import type { NextPage } from 'next';
import { Typography } from '@mui/material';
import { ShopLayout}  from '../components/layouts';




const Home: NextPage = () => {
  return (
    <ShopLayout title={'Teslo Shop -  Home'} pageDescription={'Os melhores produtos'}>
      <Typography variant='h1' component='h1'>Loja</Typography>
      <Typography variant='h2' sx={{ mb: 1 }}>Todos os produtos</Typography>
    </ShopLayout>
  )
}

export default Home
