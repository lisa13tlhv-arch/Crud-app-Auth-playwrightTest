// User Models
const hardcodedUser = {
  email: 'admin@example.com',
  password: 'yourpassword', // Use a strong password in production
  confirmed: true,
};

// Function to check credentials
export const authenticateUser = (email, password) => {
  return (
    email === hardcodedUser.email &&
    password === hardcodedUser.password &&
    hardcodedUser.confirmed
  );
};
