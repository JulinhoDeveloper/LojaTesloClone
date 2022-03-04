import type { NextPage } from 'next';
import { Card, CardActionArea, CardMedia, Typography , Grid} from '@mui/material';

import { ShopLayout}  from '../components/layouts';
import { initialData } from '../database/products';



const Home: NextPage = () => {
  return (
    <ShopLayout title={'Teslo Shop -  Home'} pageDescription={'Os melhores produtos'}>
      <Typography variant='h1' component='h1'>Loja</Typography>
      <Typography variant='h2' sx={{ mb: 1 }}>Todos os produtos</Typography>
  

<Grid container spacing={4}>
{
initialData.products.map(  product => (
<Grid item xs={6} sm={4} key={ product.slug }>
<Card>
<CardActionArea>
<CardMedia
component='img'
image={ `products/${ product.images[0] }` }
alt={ product.title }
/>
  </CardActionArea>
</Card>
</Grid>
))
}
</Grid>
</ShopLayout>
  )
}

export default Home
