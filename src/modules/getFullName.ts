type FullName = {
  firstName: string;
  middleName?: string | null;
  lastName: string;
};

export const getFullName = (
  firstName: string,
  lastName: string,
  middleName?: string | null // optional parameters always go last
): string =>
  [firstName.trim(), middleName?.trim(), lastName.trim()]
    .filter(Boolean)
    .join(" ");

export const getFullNameFromObject = (fullName: FullName): string =>
  [
    fullName.firstName.trim(),
    fullName.middleName?.trim(),
    fullName.lastName.trim(),
  ]
    .filter(Boolean)
    .join(" ");
