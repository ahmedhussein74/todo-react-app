import { useState } from "react";
import { addTask } from "../app/listSlice";
import type { RootState } from "../app/store";
import { useSelector, useDispatch } from "react-redux";
import { TextField, Button, Stack } from "@mui/material";

const Form = () => {
  const dispatch = useDispatch();
  const [task, setTask] = useState("");
  const tasks = useSelector((state: RootState) => state.list);
  return (
    <Stack
      spacing={5}
      direction="row"
      className="w-1/2 mx-auto shadow-lg rounded py-3 my-5 flex justify-center"
    >
      <TextField
        label="Task"
        variant="outlined"
        size="small"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        className="w-1/2"
      />
      <Button
        variant="contained"
        onClick={() => {
          if (task) {
            dispatch(addTask({ id: tasks.list.length + 1, name: task }));
            setTask("");
          }
        }}
        className="w-1/4"
      >
        Add Task
      </Button>
    </Stack>
  );
};

export default Form;
