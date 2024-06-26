import React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { StyledButton } from "./styles/Button.styled";
const Rules = () => {
    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
      };
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <div className="App">
      <StyledButton onClick={handleOpen} variant="contained">Rules</StyledButton>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            <p>Game Rules</p>
            Rock break scissor and therefore rock wins over scissors. Rock loses
            against paper. Scissors cut paper therefore scissors win over paper.
            scissors lose against rock. paper covers rock therefore paper wins
            over rock. Paper loses against scissors. If the player and computer
            make samse selection, there is a tie.
          </Typography>
        </Box>
      </Modal>
    </div>
  );
};

export default Rules;
