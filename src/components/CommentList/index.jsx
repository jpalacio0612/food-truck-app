import PropTypes from "prop-types";
import List from "@mui/material/List";
import Comment from "../Comment";

export default function CommentList({ comments }) {
  return (
    <List sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
      {comments.map(({ id, comment, createdAt }) => {
        return <Comment key={id} comment={comment} createdAt={createdAt} />;
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
