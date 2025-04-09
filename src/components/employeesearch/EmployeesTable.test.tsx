import { render } from "@testing-library/react";
import EmployeesTable from "./EmployeesTable";
import { Employee } from "./Employee";

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

describe("EmployeesTable Component", () => {
  it("renders correctly with employees", () => {
    const { container } = render(<EmployeesTable employees={mockEmployees} />);
    expect(container).toMatchSnapshot();
  });

  it("renders correctly with no employees", () => {
    const { container } = render(<EmployeesTable employees={[]} />);
    expect(container).toMatchSnapshot();
  });
});
