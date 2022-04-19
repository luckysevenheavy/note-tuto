import React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import { DeleteOutlined } from '@mui/icons-material';
import { Avatar, IconButton, Typography } from '@mui/material';
import { deepPurple, purple} from '@mui/material/colors';


const NoteCard = ({ note, handleDelete }) => {
  return (
    <div>
       <Card>
           <CardHeader 
                  avatar={
                      <Avatar sx={{ backgroundColor: purple[100], color: deepPurple[900]}}>
                        {note.category[0].toUpperCase()}
                       </Avatar>
                  }
                  action={
                    <IconButton onClick={() => handleDelete(note.id)}>
                      <DeleteOutlined />
                    </IconButton>
                  }
                  title={
                      <Typography sx={{ fontWeight: 500 }}>
                          {note.title}
                      </Typography>
                  }
                  subheader={note.category}
           />
           <CardContent>
               <Typography sx={{ fontSize: 14 }}>
                   {note.details}
               </Typography>
           </CardContent>
       </Card>
    </div>
  )
}

export default NoteCard
