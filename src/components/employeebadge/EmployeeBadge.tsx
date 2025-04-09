import styled from "styled-components";
import { Employee } from "./Employee";

// Styled container for the entire badge
const BadgeContainer = styled.div`
  display: flex;
  border: 1px solid #000;
  width: 100%;
  max-width: 600px; // Arbitrary max-width for layout
`;

// Styled image container (square, cropped)
const ImageContainer = styled.div`
  width: 50%;
  aspect-ratio: 1 / 1; // Ensures square shape
  overflow: hidden;
`;

const EmployeeImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover; // Crops the image to fit the square
  object-position: center;
`;

// Styled text container
const TextContainer = styled.div`
  padding: 16px;
  width: 50%;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const Name = styled.h2`
  margin: 0;
  font-size: 1.5rem;
`;

const JobTitle = styled.p`
  margin: 0;
  font-weight: bold;
`;

const Email = styled.p`
  margin: 0;
`;

const Cohort = styled.p`
  margin: 0;
`;

const Team = styled.p`
  margin: 0;
`;

const EmployeeBadge = ({ employee }: { employee: Employee }) => {
  const { details, imagePath, jobTitle, email, cohort, team } = employee;
  const fullName = [details?.firstName, details?.middleName, details?.lastName]
    .filter(Boolean)
    .join(" ");

  return (
    <BadgeContainer>
      <ImageContainer>
        <EmployeeImage src={imagePath} alt={`${fullName}'s profile`} />
      </ImageContainer>
      <TextContainer>
        <Name>{fullName}</Name>
        <JobTitle>Job Title: {jobTitle}</JobTitle>
        <Email>Email: {email}</Email>
        {cohort && <Cohort>Cohort: {cohort}</Cohort>}
        <Team>Team: {team}</Team>
      </TextContainer>
    </BadgeContainer>
  );
};

export default EmployeeBadge;
