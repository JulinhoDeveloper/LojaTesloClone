import type { NextPage } from 'next';
import { Typography } from '@mui/material';

import { ShopLayout}  from '../components/layouts';
import { initialData } from '../database/products';
import { ProductList } from '../components/products';



const Home: NextPage = () => {
  return (
    <ShopLayout title={'Teslo Shop -  Home'} pageDescription={'Os melhores produtos'}>
      <Typography variant='h1' component='h1'>Loja</Typography>
      <Typography variant='h2' sx={{ mb: 1 }}>Todos os produtos</Typography>
  

      <ProductList
      products={ initialData.products as any }
      />

</ShopLayout>
  )
}

export default Home
