import { Box, Button ,Grid, Typography} from '@mui/material';
import { ShopLayout } from '../../components/layouts';
import { initialData } from '../../database/products';
import { ProductSlideshow } from '../../components/products';
import { ItemCounter } from '../../components/ui/ItemCounter';

const product = initialData.products[0];


const ProductPage = () => {
  return (
    <ShopLayout title={ product.title } pageDescription={ product.description }>
    
    <Grid container spacing={3}>

        <Grid item xs={12} sm={ 7 }>
        <ProductSlideshow 
            images={ product.images }
          />
        </Grid>

        <Grid item xs={ 12 } sm={ 5 }>
          <Box display='flex' flexDirection='column'>

{/* títulos */}
            <Typography variant='h1' component='h1'>{ product.title }</Typography>
            <Typography variant='subtitle1' component='h2'>{ `$${product.price}` }</Typography>

 {/* Quantidade */}
         <Box sx={{ my: 2 }}>
              <Typography variant='subtitle2'>Quantidade</Typography>
              <ItemCounter />
            </Box>

 {/* adicionar ao carrinho */}
 <Button color="secondary" className='circular-btn'>
              Adicionar ao carrinho
            </Button>

            {/* Descrição */}
            <Box sx={{ mt:3 }}>
              <Typography variant='subtitle2'>Descrição</Typography>
              <Typography variant='body2'>{ product.description }</Typography>
            </Box>

            </Box>
        </Grid>

        </Grid>
    </ShopLayout>
  )
}

export default ProductPage