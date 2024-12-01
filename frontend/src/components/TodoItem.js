import React from "react";
import {
  Checkbox,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  IconButton,
} from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';

function TodoItem({ todo, onToggle, onDelete }) {
  return (
    <ListItem
      secondaryAction={
        <IconButton edge="end" onClick={() => onDelete(todo.id)}>
          <DeleteIcon />
        </IconButton>
      }
      // disablePadding
    >
      <ListItemButton onClick={() => onToggle(todo.id)} dense>
        <ListItemIcon>
          <Checkbox
            edge="start"
            checked={todo.completed}
            disableRipple
          />
        </ListItemIcon>
        <ListItemText
          primary={todo.title}
          sx={{
            textDecoration: todo.completed ? 'line-through' : 'none',
          }}
        />
      </ListItemButton>
    </ListItem>
  )
}

export default TodoItem;
