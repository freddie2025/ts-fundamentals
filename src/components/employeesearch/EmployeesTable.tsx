import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";
import { Employee } from "./Employee";

const EmployeesTable = ({ employees }: { employees: Employee[] }) => {
  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>First Name</TableCell>
            <TableCell>Last Name</TableCell>
            <TableCell>Company</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>Phone</TableCell>
            <TableCell>Address</TableCell>
            <TableCell>Team</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {employees.map((employee, index) => (
            <TableRow key={index}>
              <TableCell>{employee.firstName}</TableCell>
              <TableCell>{employee.surName}</TableCell>
              <TableCell>{employee.company}</TableCell>
              <TableCell>{employee.email}</TableCell>
              <TableCell>{employee.phone}</TableCell>
              <TableCell>{employee.address}</TableCell>
              <TableCell>{employee.team}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default EmployeesTable;
