import { useState } from "react";
import PropTypes from "prop-types";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Box, Button, TextField } from "@mui/material";
import CommentList from "../CommentList";
import axios from "../../lib/axiosInstance";
import ExpandMore from "../ExpandMore";
import { avatarToString } from "../../utils/avatarToString";

const FoodTruckCard = ({ foodTruck }) => {
  const [expanded, setExpanded] = useState(false);
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState(() => foodTruck.comments);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const sendComment = () => {
    axios
      .post(`/comments/food-truck/${foodTruck.id}`, {
        comment,
      })
      .then((response) => {
        setComment("");
        setComments([
          ...comments,
          {
            id: response.data.id,
            comment: response.data.comment,
            createdAt: response.data.createdAt,
          },
        ]);
      })
      .catch((error) => {
        console.error("Error sending comment", error);
      });
  };

  const { applicant, locationDescription, foodItems } = foodTruck;

  return (
    <Card
      sx={{
        width: 345,
      }}
    >
      <CardHeader
        avatar={<Avatar {...avatarToString(applicant)} />}
        title={applicant}
      />
      <CardContent>
        <Box>
          <Typography
            variant="body2"
            sx={{ color: "text.secondary", fontWeight: "bold" }}
          >
            Menu:
          </Typography>
          <Typography variant="body2" sx={{ color: "text.secondary" }}>
            {foodItems}
          </Typography>
        </Box>
        <Box>
          <Typography
            variant="body2"
            sx={{ color: "text.secondary", fontWeight: "bold" }}
          >
            Address:
          </Typography>
          <Typography variant="body2" sx={{ color: "text.secondary" }}>
            {locationDescription}
          </Typography>
        </Box>
      </CardContent>
      <CardActions disableSpacing>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-label="show comments"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 1,
            }}
          >
            <TextField
              label="Enter your comment..."
              variant="outlined"
              fullWidth
              multiline
              rows={3}
              value={comment}
              onChange={(e) => setComment(e.target.value)}
            />
            <Button variant="contained" onClick={sendComment}>
              Send
            </Button>
          </Box>
          <CommentList comments={comments} />
        </CardContent>
      </Collapse>
    </Card>
  );
};

FoodTruckCard.propTypes = {
  foodTruck: PropTypes.shape({
    id: PropTypes.string.isRequired,
    applicant: PropTypes.string.isRequired,
    locationDescription: PropTypes.string.isRequired,
    foodItems: PropTypes.string.isRequired,
    comments: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        comment: PropTypes.string.isRequired,
        createdAt: PropTypes.string.isRequired,
      })
    ).isRequired,
  }).isRequired,
};

export default FoodTruckCard;
