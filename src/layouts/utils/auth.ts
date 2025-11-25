export const checkAuthToken = () => {
  const token = localStorage.getItem("access_token");
  if (!token) {
    window.location.href = "/auth/un"; // redirect if token undefined
  }
  return token;
};
