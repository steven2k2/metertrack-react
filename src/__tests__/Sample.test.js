import React from "react";
import { render, screen } from "@testing-library/react";
import Sample from "../components/Sample"; // Ensure the correct path

test("renders the Sample component", () => {
  render(<Sample />);
  expect(screen.getByText(/Welcome to MeterTrack/i)).toBeInTheDocument();
});