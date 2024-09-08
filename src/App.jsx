import { Box, Typography } from "@mui/material";
import FoodTruckCard from "./components/FoodTruckCard";
import { useEffect, useState } from "react";
import axios from "./lib/axiosInstance";
import { Debounce } from "./utils/debounce";

const LIMIT = 10;
const debounce = new Debounce(null, 1000);

export default function App() {
  const [foodTrucks, setFoodTrucks] = useState([]);
  const [offset, setOffset] = useState(0);

  debounce.addCallback(() => setOffset((prevOffset) => prevOffset + LIMIT));

  useEffect(() => {
    axios
      .get("/food-trucks", {
        params: {
          limit: LIMIT,
          offset: offset,
        },
      })
      .then((response) => {
        setFoodTrucks((prev) => [...prev, ...response.data]);
      })
      .catch((error) => {
        console.error("Error fetching food trucks", error);
      });
  }, [offset]);

  const scrollHandler = (event) => {
    const { scrollTop, clientHeight, scrollHeight } = event.target;

    if (Math.ceil(scrollTop + clientHeight) === scrollHeight) {
      debounce.execute();
    }
  };

  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          height: 64,
          px: 2,
          backgroundColor: "primary.main",
        }}
      >
        <Typography
          variant="h6"
          sx={{
            color: "white",
          }}
        >
          Food Truck App
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          gap: 2,
          padding: 2,
          overflow: "auto",
          height: "calc(100vh - 64px)",
        }}
        onScroll={scrollHandler}
      >
        {foodTrucks.map((foodTruck) => (
          <FoodTruckCard key={foodTruck.id} foodTruck={foodTruck} />
        ))}
      </Box>
    </Box>
  );
}
