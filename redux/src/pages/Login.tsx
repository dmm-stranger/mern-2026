import { useLoginMutation }
  from "../features/auth/authApi"

export default function Login() {

  const [ login ] =
    useLoginMutation()

  const handleLogin =
    async () => {

      await login({
        email:
          "admin@gmail.com",

        password:
          "123456",
      })
    }

  return (
    <button
      onClick={handleLogin}
    >
      Login
    </button>
  )
}