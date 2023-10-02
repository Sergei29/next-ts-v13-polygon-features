import AuthForm from "@/components/AuthForm"

interface IProps {}

const LoginPage = ({}: IProps): JSX.Element => {
  return <AuthForm isRegister={false} />
}

export default LoginPage
