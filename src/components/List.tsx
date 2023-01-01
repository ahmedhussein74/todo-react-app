import { Stack, Button } from '@mui/material'
import type { RootState } from '../app/store'
import { useSelector, useDispatch } from 'react-redux'
import { deleteTask } from '../app/listSlice'

const List = () => {
  const tasks = useSelector((state: RootState) => state.list)
  const dispatch = useDispatch()
  return (
    <Stack>
      {
      tasks.list.map((e) => {
          return (
            <div key={e.id} className='rounded w-1/2 bg-blue-500 flex justify-between items-center p-3 mx-auto my-3'>
              <span>{e.name}</span>
              <Button
                variant="contained"
                color="error"
                onClick={() => {
                  dispatch(deleteTask(e.id))
                }}
              >
                Delete
              </Button>
            </div>
          );
        })}
    </Stack>
  )
}

export default List