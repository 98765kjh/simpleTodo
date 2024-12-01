import React, { useState } from 'react';
import { Paper, TextField, Button, Box } from '@mui/material';

function TodoForm({ onAdd }) {
  const [title, setTitle] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim()) return;
    onAdd({ title });
    setTitle('');
  };

  return (
    <Paper sx={{ p: 2, mb: 2 }}>
      <form onSubmit={handleSubmit}>
        <Box sx={{ display: 'flex', gap: 1 }}>
          <TextField
            fullWidth
            variant="outlined"
            size="small"
            placeholder="할 일을 입력하세요"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <Button type="submit" variant="contained" size="small">
            추가
          </Button>
        </Box>
      </form>
    </Paper>
  );
}

export default TodoForm;
