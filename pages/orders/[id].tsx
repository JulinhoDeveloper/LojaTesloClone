import NextLink from 'next/link';

import { Link, Box, Card, CardContent, Divider, Grid, Typography, Chip } from '@mui/material';
import { CreditCardOffOutlined, CreditScoreOutlined } from '@mui/icons-material';

import { ShopLayout } from '../../components/layouts/ShopLayout';
import { CartList, OrderSummary } from '../../components/cart';


const OrderPage = () => {
  return (
    <ShopLayout title='Resumo da ordem 123671523' pageDescription={'Resumo da ordem'}>
        <Typography variant='h1' component='h1'>Ordem: ABC123</Typography>

        {/* <Chip 
            sx={{ my: 2 }}
            label="Pendende de pagamento"
            variant='outlined'
            color="error"
            icon={ <CreditCardOffOutlined /> }
        /> */}
        <Chip 
            sx={{ my: 2 }}
            label="Ordem já foi paga"
            variant='outlined'
            color="success"
            icon={ <CreditScoreOutlined /> }
        />

        <Grid container>
            <Grid item xs={ 12 } sm={ 7 }>
                <CartList />
            </Grid>
            <Grid item xs={ 12 } sm={ 5 }>
                <Card className='summary-card'>
                    <CardContent>
                        <Typography variant='h2'>Resumo (3 produtos)</Typography>
                        <Divider sx={{ my:1 }} />

                        <Box display='flex' justifyContent='space-between'>
                            <Typography variant='subtitle1'>endereço da entrega</Typography>
                            <NextLink href='/checkout/address' passHref>
                                <Link underline='always'>
                                    Editar
                                </Link>
                            </NextLink>
                        </Box>

                        
                        <Typography>Julio Cesar</Typography>
                        <Typography>Rua blabla</Typography>
                        <Typography>São Paulo, SP</Typography>
                        <Typography>Brasil</Typography>
                        <Typography>+55 911222</Typography>

                        <Divider sx={{ my:1 }} />

                        <Box display='flex' justifyContent='end'>
                            <NextLink href='/cart' passHref>
                                <Link underline='always'>
                                    Editar
                                </Link>
                            </NextLink>
                        </Box>

                        <OrderSummary />

                        <Box sx={{ mt: 3 }}>
                            {/* TODO */}
                            <h1>Pagar</h1>

                            <Chip 
                                sx={{ my: 2 }}
                                label="Ordem já foi paga"
                                variant='outlined'
                                color="success"
                                icon={ <CreditScoreOutlined /> }
                            />
                        </Box>

                    </CardContent>
                </Card>
            </Grid>
        </Grid>


    </ShopLayout>
  )
}

export default OrderPage;