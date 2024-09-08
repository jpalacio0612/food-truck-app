import { Box, OutlinedInput, Typography } from "@mui/material";
import FoodTruckCard from "./components/FoodTruckCard";
import { useEffect, useState } from "react";
import axios from "./lib/axiosInstance";
import SearchIcon from "@mui/icons-material/Search";

const LIMIT = 20;

export default function App() {
  const [foodTrucks, setFoodTrucks] = useState([]);
  const [offset, setOffset] = useState(0);
  const [search, setSearch] = useState("");

  useEffect(() => {
    axios
      .get("/food-trucks", {
        params: {
          limit: LIMIT,
          offset,
          search,
        },
      })
      .then((response) => {
        if (offset === 0) {
          setFoodTrucks(response.data);
          return;
        }

        setFoodTrucks((prev) => [...prev, ...response.data]);
      })
      .catch((error) => {
        console.error("Error fetching food trucks", error);
      });
  }, [offset, search]);

  const scrollHandler = (event) => {
    const { scrollTop, clientHeight, scrollHeight } = event.target;

    console.log(Math.ceil(scrollTop + clientHeight));
    console.log(scrollHeight);

    if (Math.ceil(scrollTop + clientHeight) >= scrollHeight) {
      setOffset((prevOffset) => prevOffset + LIMIT);
    }
  };

  return (
    <Box
      sx={{
        overflow: "hidden",
        height: "100vh",
      }}
    >
      <Box
        as="header"
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
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
          Food Truck
        </Typography>
        <OutlinedInput
          value={search}
          onChange={(event) => {
            setSearch(event.target.value);
            setOffset(0);
          }}
          endAdornment={<SearchIcon />}
          size="small"
          sx={{ backgroundColor: "white" }}
          placeholder="Search..."
        />
      </Box>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          gap: 2,
          padding: 2,
          overflow: "scroll",
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
