import React, { useState } from 'react';
import { Button, Container, FormControl, FormControlLabel, FormLabel, Radio, RadioGroup, TextField, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { KeyboardArrowRight } from '@mui/icons-material';



const Create = () => {
    const navigate = useNavigate();
    const [title, setTitle] = useState('');
    const [details, setDetails] = useState('');
    const [titleError, setTitleError] = useState(false);
    const [detailsError, setDetailsError] = useState(false);
    const [category, setCategory] = useState('money')

    const handleSubmit = (e) => {
        e.preventDefault();
        setTitleError(false);
        setDetailsError(false);

        if (title === '') {
            setTitleError(true);
        }

        if (details === '') {
            setDetailsError(true)
        }
       
        if (title && details) {
            fetch('http://localhost:8000/notes', {
                method: 'POST',
                headers: { 'Content-type': 'application/json'},
                body: JSON.stringify({ title, details, category})
            }).then(() => navigate('/'))
        }
    }
    
  return (
    <Container>
      <Typography
             sx={{ mt: 3, fontWeight: 400, fontSize: 18 }}
             variant='h6' 
             color='textSecondary' 
             component='h2' 
             gutterBottom
      >
          Create a New Note
      </Typography>
      <form noValidate autoComplete='off' onSubmit={handleSubmit}>
          <TextField 
              sx={{ mt: 1, mb: 1, display: 'block' }}
              variant='outlined'
              color='secondary'
              label='Note Title'
              required
              fullWidth
              error={titleError}
              onChange={(e) => setTitle(e.target.value)}
          />
          <TextField 
              sx={{ mt: 1.5, mb: 1.5, display: 'block' }}
              variant='outlined'
              color='secondary'
              label='Details'
              multiline
              rows={4}
              required
              fullWidth
              error={detailsError}
              onChange={(e) => setDetails(e.target.value)}
          />
          <FormControl sx={{ mt: 1.5, mb: 1.5, display: 'block'}} >
              <FormLabel>Note Category</FormLabel>
              <RadioGroup value={category} onChange={(e) => setCategory(e.target.value)}>
                <FormControlLabel value='money' control={<Radio color='secondary'/>} label='Money'/>
                <FormControlLabel value='reminders' control={<Radio color='secondary'/>} label='Reminders'/>
                <FormControlLabel value='todos' control={<Radio color='secondary'/>} label='Todos'/>
                <FormControlLabel value='work' control={<Radio color='secondary'/>} label='Work'/>
              </RadioGroup>
          </FormControl>
          <Button 
              type='submit' 
              color='secondary' 
              variant='contained'
              endIcon={<KeyboardArrowRight />} 
          >
          Submit
          </Button>
      </form>
    </Container>
  )
}

export default Create
