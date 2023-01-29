import { useDispatch } from "react-redux";
import { useFormik } from "formik";

import { createBoard } from "../../../modules/redux/actions";

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

export default function CreateBoardForm({
  closeModal,
}: {
  closeModal: () => void;
}) {
  const dispatch = useDispatch();
  const theme = useTheme();

  // TODO: add form validation
  const formik = useFormik({
    initialValues: {
      name: "",
    },
    onSubmit: (values) => {
      dispatch(createBoard({ name: values.name }));
      closeModal();
    },
  });

  function handleSubmit(event: any) {
    event.preventDefault();
    formik.handleSubmit();
  }

  // TODO: update button and input component to have new sizes.
  return (
    <form className="main-modal-form">
      <Typography fontSize="large">Create New Board</Typography>
      <Divider sx={{ bgcolor: theme.palette.primary.main, my: 2 }} />
      <FormLabel htmlFor="board-name">
        <Typography fontSize="medium" color="black">
          Enter the name of the new board:
        </Typography>
      </FormLabel>
      <TextField
        required
        id="board-name"
        name="name"
        onChange={formik.handleChange}
        value={formik.values.name}
        placeholder="New Board"
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
