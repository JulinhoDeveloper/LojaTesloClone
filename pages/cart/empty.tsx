import NextLink from 'next/link';
import { RemoveShoppingCartOutlined } from '@mui/icons-material';
import { Box, Link,Typography } from '@mui/material';
import { ShopLayout } from '../../components/layouts';

export const EmptyPage = () => {
  return (
   
       <ShopLayout title="carrinho vazio" pageDescription="Não há itens no carrinho">
           <Box 
            display='flex' 
            justifyContent='center' 
            alignItems='center' 
            height='calc(100vh - 200px)'
            sx={{ flexDirection: { xs: 'column', sm: 'row' }}}
        >
            <RemoveShoppingCartOutlined sx= {{ fontsize: 100 }} />
            <Box display='flex' flexDirection='column' alignItems='center'>
                <NextLink href='/' passHref>
                    <Link typography="h4" color='secondary'> 
                    Voltar 
                    </Link>
                </NextLink>
            <Typography>Seu carrinho está vazio</Typography>
            </Box>
            
        </Box>
       </ShopLayout>
  )
}

export default EmptyPage