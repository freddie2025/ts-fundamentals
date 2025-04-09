import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import EmployeesPage from "./EmployeesPage";
import { Employee } from "./Employee";

const mock = new MockAdapter(axios);

const mockEmployees: Employee[] = [
  {
    firstName: "Garner",
    surName: "Rosario",
    company: "ISODRIVE",
    email: "garnerrosario@isodrive.com",
    phone: "+1 (852) 576-3231",
    address: "943 Langham Street, Adamtown, Vermont, 7722",
    team: "CD&A",
  },
  {
    firstName: "Gibbs",
    surName: "Adams",
    company: "VIASIA",
    email: "gibbsadams@viasia.com",
    phone: "+1 (968) 423-2117",
    address: "266 Grove Place, Fedora, Virginia, 1865",
    team: "CS&E",
  },
];

const EMPLOYEES_API_URL = "http://localhost:4000/employees-api/employees";

describe("EmployeesPage Component", () => {
  beforeEach(() => {
    mock.reset();
  });

  it("fetches and displays employees on initial load", async () => {
    mock.onGet(EMPLOYEES_API_URL).reply(200, mockEmployees);

    render(<EmployeesPage />);

    // Check loading state
    expect(screen.getByAltText("Loading...")).toBeInTheDocument();

    // Wait for API call to resolve
    await waitFor(() => {
      expect(screen.getByText("Garner")).toBeInTheDocument();
    });
    await waitFor(() => {
      expect(screen.getByText("Gibbs")).toBeInTheDocument();
    });

    expect(screen.queryByAltText("Loading...")).not.toBeInTheDocument();
  });

  it("displays employees based on search term", async () => {
    // Initial load
    mock
      .onGet(EMPLOYEES_API_URL, {
        params: { search: "" },
      })
      .reply(200, mockEmployees);
    // Search load
    mock
      .onGet(EMPLOYEES_API_URL, {
        params: { search: "Adams" },
      })
      .reply(200, [mockEmployees[1]]);

    render(<EmployeesPage />);

    // Wait for initial load
    await waitFor(() => {
      expect(screen.getByText("Garner")).toBeInTheDocument();
    });
    await waitFor(() => {
      expect(screen.getByText("Gibbs")).toBeInTheDocument();
    });

    // Perform search
    const input = screen.getByPlaceholderText("Search employees...");
    fireEvent.change(input, { target: { value: "Adams" } });
    fireEvent.click(screen.getByText("Search"));

    // Wait for search results
    await waitFor(() => {
      expect(screen.queryByText("Garner")).not.toBeInTheDocument();
    });
    await waitFor(() => {
      expect(screen.getByText("Gibbs")).toBeInTheDocument();
    });
  });

  it("handles API error gracefully", async () => {
    mock.onGet(EMPLOYEES_API_URL).reply(500);

    render(<EmployeesPage />);

    // Check loading state
    expect(screen.getByAltText("Loading...")).toBeInTheDocument();

    // Wait for API call to fail
    await waitFor(() => {
      expect(screen.queryByText("Garner")).not.toBeInTheDocument();
    });
    await waitFor(() => {
      expect(screen.queryByAltText("Loading...")).not.toBeInTheDocument();
    });
  });

  it("shows loading spinner during long API call", async () => {
    mock.onGet(EMPLOYEES_API_URL).reply(() => {
      return new Promise((resolve) => {
        setTimeout(() => resolve([200, mockEmployees]), 2000);
      });
    });

    render(<EmployeesPage />);

    // Check loading state
    expect(screen.getByAltText("Loading...")).toBeInTheDocument();

    // Wait for API call to resolve
    await waitFor(
      () => {
        expect(screen.getByText("Garner")).toBeInTheDocument();
      },
      { timeout: 3000 }
    );

    expect(screen.queryByAltText("Loading...")).not.toBeInTheDocument();
  });
});
