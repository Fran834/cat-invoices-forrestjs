import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import {makeStyles} from '@mui/styles';
import { useParams } from 'react-router-dom';
import { Button, Paper, Grid, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { CustomTextField } from './../components/CustomTextField';
import { ReadInvoice } from './read';
import { MUTATION_ADD_INVOICE, MUTATION_UPDATE_INVOICE } from './querys-mutations';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3),
    margin: theme.spacing(3)
  },
  link: {
    textDecoration: 'none !important'
  },
  div: {
    padding: theme.spacing(3)
  }
}))



const Invoice = () => {
  
  //Así se obtiene el parámetro con el que se ha llamado
  const { id } = useParams();
  //console.log (id);

  const navigate = useNavigate();
  const classes = useStyles();

  const [addInvoice, { data, loading, error }] = useMutation(MUTATION_ADD_INVOICE);
  const [updateInvoice, { dataupdate, loadingupdate, errorupdate }] = useMutation(MUTATION_UPDATE_INVOICE);

  const [readInvoice, setReadInvoice] = useState(false);

  const initialState = {
    id: 0,
    number: '',
    date: new Date(),
    client_id: 0,
    client_name: '',
    client_vat: '',
    base: 0,
    vat: 0,
    total: 0
  }

  const [formState, setFormState] = useState(initialState)

  const datainvoice = ReadInvoice(id);
  if (datainvoice && !readInvoice)
  {
    setReadInvoice(true);
    formState.id = datainvoice.id;
    formState.number = datainvoice.number;
    formState.date = datainvoice.date;
    formState.client_id = datainvoice.client_id;
    formState.client_name = datainvoice.client_name;
    formState.client_vat = datainvoice.client_vat;
    formState.base = datainvoice.base;
    formState.vat = datainvoice.vat;
    formState.total = datainvoice.total;
    
    //console.log(`datainvoice: ${datainvoice.number}`);
  }
  
  
  // let datainvoice;
  // if (id && !readInvoice) {
  //   datainvoice = ReadInvoice(id);
  //   if (datainvoice) {
  //     readInvoice = true; 
  //   }
  //   //console.log(datainvoice);
  // }    

  // useEffect(() => {
  //     if (datainvoice) {
  //       console.log(`datainvoice: ${datainvoice}`);
  //       setFormState({ ...formState, number: datainvoice.number });
  //     }        
  //     //console.log(datainvoice);    
  // }, []);  

  if (loading) return 'Submitting...';
  if (error) return `Submission error! ${error.message}`;

  const handleSubmit = event => {

    event.preventDefault();

    if (!id) {
      addInvoice({
            variables: formState,
          });
    } else {
      updateInvoice({
        variables: formState,
      });
    }
    
    setFormState(initialState);
    navigate('/invoices');

  }

  return (
    <Paper className={classes.root} elevation={0}>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={1} >

          <CustomTextField id="number" label ="Number" value = {formState.number}
            onChange={(e) => setFormState({ ...formState, number: e.target.value })} 
            type="text" md={4}/>

          <CustomTextField id="date" label ="Date" value = {formState.date}
            onChange={(e) => setFormState({ ...formState, date: e.target.value })} 
            type="date" md={4}/>
          <Box width="100%"/>

          <CustomTextField id="client_id" label ="Client ID" value = {formState.client_id}
            onChange={(e) => setFormState({ ...formState, client_id: parseInt(e.target.value) })} 
            type="number" md={2}/>
          
          <CustomTextField id="client_name" label ="Client Name" value = {formState.client_name}
            onChange={(e) => setFormState({ ...formState, client_name: e.target.value })} 
            type="text" md={7}/>

          <CustomTextField id="client_vat" label ="Client VAT" value = {formState.client_vat}
            onChange={(e) => setFormState({ ...formState, client_vat: e.target.value })} 
            type="text" md={3}/>

          <CustomTextField id="base" label ="Base" value = {formState.base}
            onChange={(e) => setFormState({ ...formState, base: e.target.value })} 
            type="number" md={4}/>

          <CustomTextField id="vat" label ="Tax" value = {formState.vat}
            onChange={(e) => setFormState({ ...formState, vat: e.target.value })} 
            type="number" md={4}/>

          <CustomTextField id="total" label ="Total" value = {formState.total}
            onChange={(e) => setFormState({ ...formState, total: e.target.value })} 
            type="number" md={4}/>
                            
          <div className={classes.div}>
            <Button variant="outlined" type="submit">Save</Button>
          </div>
        </Grid>   
      </form>         
    </Paper>
  )
}

export { Invoice };