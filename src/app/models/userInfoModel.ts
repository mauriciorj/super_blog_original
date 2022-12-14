/* eslint-disable react/no-this-in-sfc */
export function UserInfoModel(this: any, data: any) {
  if (!data) return null;
  const {
    country,
    day,
    email,
    firstName,
    id,
    language,
    lastName,
    month,
    year,
  } = data;
  this.country = country;
  this.day = day;
  this.email = email;
  this.firstName = firstName;
  this.id = id;
  this.language = language;
  this.lastName = lastName;
  this.year = year;
  this.month = month;
}
