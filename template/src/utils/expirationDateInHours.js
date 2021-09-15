const expirationDateInHours = hours => new Date(new Date().getTime() + hours * 60 * 60 * 1000);

export default expirationDateInHours;
