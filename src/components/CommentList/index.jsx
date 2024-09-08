import PropTypes from "prop-types";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import { Box } from "@mui/material";

export default function CommentList({ comments }) {
  return (
    <List sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
      {comments.map(({ id, comment, createdAt }) => {
        return (
          <Box key={id}>
            <ListItem alignItems="flex-start">
              <ListItemText primary={comment} secondary={createdAt} />
            </ListItem>
            <Divider variant="inset" component="li" />
          </Box>
        );
      })}
    </List>
  );
}

CommentList.propTypes = {
  comments: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      comment: PropTypes.string,
      createdAt: PropTypes.string,
    })
  ),
};
