import { Box, Button, FormControl, Grid,  MenuItem, Select, TextField, Typography } from "@mui/material"
import { ShopLayout } from "../../components/layouts"

const AddressPage = () => {
  return (
    <ShopLayout title="Endereço" pageDescription="Confirmar o endereço">
        <Typography variant="h1" component='h1'>Endereço</Typography>

        <Grid container spacing={ 2 } sx={{ mt: 2 }}>
            
            <Grid item xs={12} sm={ 6 }>
                <TextField label='Nome' variant="filled" fullWidth />
            </Grid>
            <Grid item xs={12} sm={ 6 }>
                <TextField label='SobreNome' variant="filled" fullWidth />
            </Grid>

            <Grid item xs={12} sm={ 6 }>
                <TextField label='Endereço' variant="filled" fullWidth />
            </Grid>
            <Grid item xs={12} sm={ 6 }>
                <TextField label='Endereço 2 (opcional)' variant="filled" fullWidth />
            </Grid>

            <Grid item xs={12} sm={ 6 }>
                <TextField label='CEP' variant="filled" fullWidth />
            </Grid>
            <Grid item xs={12} sm={ 6 }>
                <TextField label='Cidade' variant="filled" fullWidth />
            </Grid>
            
            <Grid item xs={12} sm={ 6 }>
                <FormControl fullWidth>
                    <Select
                        variant="filled"
                        label="País"
                        value={1}
                    >
                        <MenuItem value={1}>Brasil</MenuItem>
                        <MenuItem value={2}>Costa Rica</MenuItem>
                        <MenuItem value={3}>Honduras</MenuItem>
                        <MenuItem value={4}>El Salvador</MenuItem>
                        <MenuItem value={5}>México</MenuItem>
                    </Select>
                </FormControl>
            </Grid>
            <Grid item xs={12} sm={ 6 }>
                <TextField label='Telefone' variant="filled" fullWidth />
            </Grid>

        </Grid>


        <Box sx={{ mt: 5 }} display='flex' justifyContent='center'>
            <Button color="secondary" className="circular-btn" size="large">
                Revisar pedido
            </Button>
        </Box>

    </ShopLayout>
  )
}

export default AddressPage