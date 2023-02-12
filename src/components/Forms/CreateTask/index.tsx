import { useDispatch } from "react-redux";
import { useFormik } from "formik";

import { createTask } from "../../../modules/redux/actions";
import useCurrentBoard from "../../../hooks/useCurrentBoard";

import { ColumnType } from "../../../ts/types";
import {
  Button,
  Divider,
  FormLabel,
  MenuItem,
  Select,
  Stack,
  TextField,
  Typography,
  useTheme,
} from "@mui/material";

import "../style.scss";

export default function CreateTask({
  closeModal,
  columns,
}: {
  closeModal: () => void;
  columns: ColumnType[];
}) {
  const [currentBoard] = useCurrentBoard();
  const dispatch = useDispatch();
  const theme = useTheme();

  // TODO: add form validation
  const formik = useFormik({
    initialValues: {
      defenition: "",
      column: columns[0].id,
    },
    onSubmit: (values) => {
      if (currentBoard) {
        dispatch(
          createTask(
            { defenition: values.defenition },
            currentBoard.id,
            values.column
          )
        );
      }
    },
  });

  function handleSubmit(event: any) {
    event.preventDefault();
    formik.handleSubmit();
    closeModal();
  }

  // TODO: update button and input component to have new sizes.
  return (
    <form className="main-modal-form">
      <Typography fontSize="large">Create New Column</Typography>
      <Divider sx={{ bgcolor: theme.palette.primary.main, my: 2 }} />
      <FormLabel htmlFor="task-name">
        <Typography fontSize="medium" color="black">
          Task Defenetion
        </Typography>
      </FormLabel>
      <TextField
        required
        id="task-name"
        name="defenition"
        onChange={formik.handleChange}
        value={formik.values.defenition}
        placeholder="Drink Water"
        sx={{ my: 1, width: "100%" }}
      />
      <Divider sx={{ my: 1 }} />
      <FormLabel htmlFor="task-column">
        <Typography fontSize="medium" color="black">
          Select the Column
        </Typography>
      </FormLabel>
      <Select
        id="task-column"
        name="column"
        value={formik.values.column}
        label="Column"
        onChange={formik.handleChange}
        variant="filled"
      >
        {columns.map((column) => (
          <MenuItem value={column.id} key={column.id}>
            {column.name}
          </MenuItem>
        ))}
      </Select>
      <Divider sx={{ my: 1 }} />
      <Stack direction="row" spacing={2}>
        <Button
          color="primary"
          variant="contained"
          type="submit"
          onClick={handleSubmit}
        >
          Create
        </Button>
        <Button color="primary" variant="outlined" onClick={closeModal}>
          Dismiss
        </Button>
      </Stack>
    </form>
  );
}
