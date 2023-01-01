import { Grid, Button } from "@mui/material";
import { deleteTask } from "../app/listSlice";
import type { RootState } from "../app/store";
import DeleteIcon from "@mui/icons-material/Delete";
import { useSelector, useDispatch } from "react-redux";

const List = () => {
  const tasks = useSelector((state: RootState) => state.list);
  const dispatch = useDispatch();
  return (
    <Grid container spacing={2} justifyContent="center" sx={{ mt: 2 }}>
      {tasks.list.map((e) => {
        return (
          <Grid key={e.id} item xs={10} sm={8} md={7} lg={7}>
            <div className="task rounded w-full flex justify-between items-center p-2">
              <span>{e.name}</span>
              <Button
                startIcon={<DeleteIcon />}
                variant="contained"
                color="error"
                size='small'
                onClick={() => {
                  dispatch(deleteTask(e.id));
                }}
              >
                Delete
              </Button>
            </div>
          </Grid>
        );
      })}
    </Grid>
  );
};

export default List;
