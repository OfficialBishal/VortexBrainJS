import { v4 as uuidv4 } from "uuid";
const users = [
  {
    userName: "pujan7",
    email: "pujansapkota7@gmail.com",
    password: "Admin@12345",
    uid: "23156a17-5f8d-49f9-b5c5-3513a01a5dc5",
  },
  {
    userName: "pujan8",
    email: "pujansapkota8@gmail.com",
    password: "Admin@12345",
  },
  {
    userName: "pujan9",
    email: "pujansapkota9@gmail.com",
    password: "Admin@12345",
  },
];

export const checkPassword = async (userName, email, password) => {
  // Search for a user with matching userName, email, and password values
  const user = users.find((user) => {
    return (
      user.userName === userName &&
      user.email === email &&
      user.password === password
    );
  });

  // If a user is found, return a success response object
  if (user) {
    return { status: 200, message: "Login" };
  }

  // If no user is found, throw an error with a failed login message and status code
  const error = new Error("Failed Login");
  error.status = 403;
  throw error;
};
