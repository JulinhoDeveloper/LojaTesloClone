import NextLink from 'next/link';

import { Typography, Grid, Chip, Link } from '@mui/material';
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';

import { ShopLayout } from '../../components/layouts';



const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 100 },
    { field: 'fullname', headerName: 'Nome Completo', width: 300 },

    {
        field: 'paid',
        headerName: 'Pago',
        description: 'Mostra a informação se a ordem foi paga ou não',
        width: 200,
        renderCell: (params: GridValueGetterParams) => {
            return (
                params.row.paid
                    ? <Chip color="success" label="Pago" variant='outlined' />
                    : <Chip color="error" label="Não pago" variant='outlined' />
            )
        }
    },
    {
        field: 'orden',
        headerName: 'Ver ordem',
        width: 200,
        sortable: false,
        renderCell: (params: GridValueGetterParams) => {
            return (
               <NextLink href={`/orders/${ params.row.id }`} passHref>
                    <Link underline='always'>
                        Ver ordem
                    </Link>
               </NextLink>
            )
        }
    }
];


const rows = [
    { id: 1, paid: true, fullname: 'Fernando ' },
    { id: 2, paid: false, fullname: 'Melissa ' },
    { id: 3, paid: true, fullname: 'Hernando ' },
    { id: 4, paid: false, fullname: 'Emin ' },
    { id: 5, paid: false, fullname: 'Eduardo ' },
    { id: 6, paid: true, fullname: 'Natalia ' },
]


const HistoryPage = () => {
  return (
    <ShopLayout title={'Histórico de ordens'} pageDescription={'Histórico de ordens dos clientes'}>
        <Typography variant='h1' component='h1'>Histórico de ordens</Typography>


        <Grid container>
            <Grid item xs={12} sx={{ height:650, width: '100%' }}>
                <DataGrid 
                    rows={ rows }
                    columns={ columns }
                    pageSize={ 10 }
                    rowsPerPageOptions={ [10] }
                />

            </Grid>
        </Grid>

    </ShopLayout>
  )
}

export default HistoryPage