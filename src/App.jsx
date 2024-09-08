import { Box, Typography } from "@mui/material";
import FoodTruckCard from "./components/FoodTruckCard";
import { useEffect, useState } from "react";
import axios from "./lib/axiosInstance";

export default function App() {
  const [foodTrucks, setFoodTrucks] = useState([]);

  useEffect(() => {
    axios
      .get("/food-trucks")
      .then((response) => {
        setFoodTrucks(response.data);
      })
      .catch((error) => {
        console.error("Error fetching food trucks", error);
      });
  }, []);

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
        }}
      >
        {foodTrucks.map((foodTruck) => (
          <FoodTruckCard key={foodTruck.id} foodTruck={foodTruck} />
        ))}
      </Box>
    </Box>
  );
}
