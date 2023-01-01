import { useState } from "react";
import { addTask } from "../app/listSlice";
import type { RootState } from "../app/store";
import { useSelector, useDispatch } from "react-redux";
import { TextField, Button, Grid } from "@mui/material";

const Form = () => {
  const dispatch = useDispatch();
  const [task, setTask] = useState("");
  const tasks = useSelector((state: RootState) => state.list);
  return (
    <Grid container spacing={2} justifyContent="center" sx={{ mt: 2 }}>
      <Grid item xs={10} sm={8} md={6} lg={4}>
        <TextField
          label="Task"
          variant="outlined"
          size="small"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          className="w-full rounded"
        />
      </Grid>
      <Grid item xs={6} sm={6} md={3} lg={2}>
        <Button
          variant="contained"
          onClick={() => {
            if (task) {
              dispatch(addTask({ id: tasks.list.length + 1, name: task }));
              setTask("");
            }
          }}
          className="w-full"
        >
          Add Task
        </Button>
      </Grid>
    </Grid>
  );
};

export default Form;
