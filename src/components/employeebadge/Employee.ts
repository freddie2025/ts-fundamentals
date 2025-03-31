export type Employee = {
  details: {
    firstName: string;
    middleName?: string;
    lastName: string;
  };
  imagePath: string;
  jobTitle: string;
  email: string;
  cohort?: 12 | 13;
  team:
    | "Client Servicing and Engagement"
    | "Cash Management and Payments"
    | "Commercial Lending Platform"
    | "Client Data and Analytics";
};
