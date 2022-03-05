import { Grid, Typography } from "@mui/material"


export const OrderSummary = () => {
  return (
    <Grid container>
        
        <Grid item xs={6}>
            <Typography>Não há produtos</Typography>
        </Grid>
        <Grid item xs={6} display='flex' justifyContent='end'>
            <Typography>3 itens</Typography>
        </Grid>

        <Grid item xs={6}>
            <Typography>SubTotal</Typography>
        </Grid>
        <Grid item xs={6} display='flex' justifyContent='end'>
            <Typography>{ `R$${ 155.36 }` }</Typography>
        </Grid>

        <Grid item xs={6}>
            <Typography>Impostos (15%)</Typography>
        </Grid>
        <Grid item xs={6} display='flex' justifyContent='end'>
            <Typography>{ `R$${ 35.34 }` }</Typography>
        </Grid>

        <Grid item xs={6} sx={{ mt:2 }}>
            <Typography variant="subtitle1">Total:</Typography>
        </Grid>
        <Grid item xs={6} sx={{ mt:2 }} display='flex' justifyContent='end'>
            <Typography variant="subtitle1">{ `R$${ 186.34 }` }</Typography>
        </Grid>

    </Grid>
  )
}