import { render, screen, fireEvent } from "@testing-library/react";
import EmployeeSearch from "./EmployeeSearch";

describe("EmployeeSearch Component", () => {
  it("renders correctly", () => {
    const { container } = render(<EmployeeSearch onSearch={() => {}} />);
    expect(container).toMatchSnapshot();
  });

  it("calls onSearch when the search button is clicked", () => {
    const onSearch = jest.fn();
    render(<EmployeeSearch onSearch={onSearch} />);

    const input = screen.getByPlaceholderText("Search employees...");
    const button = screen.getByText("Search");

    fireEvent.change(input, { target: { value: "Adams" } });
    fireEvent.click(button);

    expect(onSearch).toHaveBeenCalledWith("Adams");
  });

  it("calls onSearch when Enter key is pressed", () => {
    const onSearch = jest.fn();
    render(<EmployeeSearch onSearch={onSearch} />);

    const input = screen.getByPlaceholderText("Search employees...");

    fireEvent.change(input, { target: { value: "Adams" } });
    fireEvent.keyDown(input, { key: "Enter", code: "Enter", charCode: 13 });

    expect(onSearch).toHaveBeenCalledWith("Adams");
  });

  it("does not call onSearch for other keys", () => {
    const onSearch = jest.fn();
    render(<EmployeeSearch onSearch={onSearch} />);

    const input = screen.getByPlaceholderText("Search employees...");

    fireEvent.change(input, { target: { value: "Adams" } });
    fireEvent.keyDown(input, { key: "A", code: "KeyA" });

    expect(onSearch).not.toHaveBeenCalled();
  });
});
