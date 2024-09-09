import { render, screen } from "@testing-library/react";
import { afterAll, afterEach, beforeAll, describe, expect, it } from "vitest";
import App from "./App";
import { delay, http, HttpResponse } from "msw";
import { setupServer } from "msw/node";

export const handlers = [
  http.get(/food-trucks/, async () => {
    await delay(150);
    return HttpResponse.json([
      {
        id: "1",
        applicant: "Food Truck 1",
        locationDescription: "Location 1",
        foodItems: "Food Items 1",
        comments: [],
      },
    ]);
  }),
];

const server = setupServer(...handlers);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

describe("App", () => {
  it("should render", async () => {
    render(<App />);

    const applicant = await screen.findByText("Food Truck 1");
    const locationDescription = await screen.findByText("Location 1");
    const foodItems = await screen.findByText("Food Items 1");

    expect(applicant).toBeInTheDocument();
    expect(locationDescription).toBeInTheDocument();
    expect(foodItems).toBeInTheDocument();
  });
});
