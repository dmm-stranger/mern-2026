import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();

  const loginAsUser = () => {
    localStorage.setItem("token", "123");
    localStorage.setItem("role", "user");

    navigate("/account");
  };

  const loginAsAdmin = () => {
    localStorage.setItem("token", "123");
    localStorage.setItem("role", "admin");

    navigate("/admin");
  };

  return (
    <div>
      <h1>Login</h1>

      <button onClick={loginAsUser}>
        Login as User
      </button>

      <button onClick={loginAsAdmin}>
        Login as Admin
      </button>
    </div>
  );
}