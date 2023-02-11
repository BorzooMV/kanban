import { useDispatch } from "react-redux";
import { useFormik } from "formik";

import { createColumn } from "../../../modules/redux/actions";
import useCurrentBoard from "../../../hooks/useCurrentBoard";

import {
  Button,
  Divider,
  FormLabel,
  Stack,
  TextField,
  Typography,
  useTheme,
} from "@mui/material";

import "../style.scss";

export default function CreateColumnForm({
  closeModal,
}: {
  closeModal: () => void;
}) {
  const [currentBoard] = useCurrentBoard();
  const dispatch = useDispatch();
  const theme = useTheme();

  // TODO: add form validation
  const formik = useFormik({
    initialValues: {
      name: "",
    },
    onSubmit: (values) => {
      if (currentBoard) {
        dispatch(createColumn({ name: values.name }, currentBoard.id));
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
      <FormLabel htmlFor="board-name">
        <Typography fontSize="medium" color="black">
          Enter the name of the new column:
        </Typography>
      </FormLabel>
      <TextField
        required
        id="board-name"
        name="name"
        onChange={formik.handleChange}
        value={formik.values.name}
        placeholder="New Column"
        sx={{ my: 1, width: "100%" }}
      />
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
