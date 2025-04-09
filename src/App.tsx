import "./App.css";
import Alert from "./components/alert/Alert";
import EmployeeBadge from "./components/employeebadge/EmployeeBadge";
import EmployeesPage from "./components/employeesearch/EmployeesPage";
import { MyFirstComponent } from "./components/myfirstcomponent/MyFirstComponent";

function App() {
  return (
    <div className="App">
      <EmployeesPage />

      <MyFirstComponent message="Hello World" />
      <div>
        <Alert $variant="success" $dismissible={false}>
          This is a success alert!
        </Alert>
        <Alert $variant="danger" $dismissible={true}>
          This is a dismissible danger alert!
        </Alert>
        <Alert $variant="warning" $dismissible={false}>
          This is a warning alert!
        </Alert>
      </div>

      <EmployeeBadge
        employee={{
          details: {
            firstName: "Fred",
            middleName: undefined,
            lastName: "James",
          },
          imagePath: "/tinky-winky.jpg",
          jobTitle: "Developer",
          email: "fred.james-allison@lloydsbanking.com",
          cohort: undefined,
          team: "Client Servicing and Engagement",
        }}
      />
    </div>
  );
}

export default App;
