import PropTypes from "prop-types";
import { Box, Divider, ListItem, ListItemText } from "@mui/material";
import { format } from "date-fns";

const Comment = ({ comment, createdAt }) => {
  return (
    <Box>
      <ListItem alignItems="flex-start">
        <ListItemText
          primary={comment}
          secondary={format(createdAt, "MM/dd/yyyy hh:mm a")}
        />
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
