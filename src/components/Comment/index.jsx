import PropTypes from "prop-types";
import { Box, Divider, ListItem, ListItemText } from "@mui/material";

const Comment = ({ comment, createdAt }) => {
  return (
    <Box>
      <ListItem alignItems="flex-start">
        <ListItemText primary={comment} secondary={createdAt} />
      </ListItem>
      <Divider variant="inset" component="li" />
    </Box>
  );
};

Comment.propTypes = {
  comment: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
};

export default Comment;
