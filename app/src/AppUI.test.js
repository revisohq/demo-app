import { render, screen } from "@testing-library/react";
import AppUI from "./AppUI";

test("renders learn react link", () => {
  render(<AppUI auth={{ user: { name: "luke" } }} records={[]} />);
  const linkElement = screen.getByText(/Logged in as/i);
  expect(linkElement).toBeInTheDocument();
});
