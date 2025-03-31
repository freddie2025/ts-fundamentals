import { render, screen } from "@testing-library/react";
import { MyFirstComponent } from "./MyFirstComponent";

test("should render the correct heading passed in by the props", () => {
  render(<MyFirstComponent message="Hello World" />);

  const headingElement = screen.getByText(/hello world/i);
  expect(headingElement).toBeInTheDocument();
});

test("should render my component and match the snapshot", () => {
  const { asFragment } = render(
    <MyFirstComponent message="Snapshot Test Message" />
  );

  expect(asFragment()).toMatchSnapshot();
});
