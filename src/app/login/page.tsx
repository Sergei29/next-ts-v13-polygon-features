interface IProps {}

const LoginPage = ({}: IProps): JSX.Element => {
  return (
    <form className="flex flex-col gap-2 mx-auto mt-10 max-w-md">
      <input type="email" className="border border-black px-2 py-1 rounded" />
      <input
        type="password"
        className="border border-black px-2 py-1 rounded"
      />
      <button
        type="submit"
        className="px-2 py-1 rounded w-full bg-black text-white font-semibold"
      >
        login
      </button>
    </form>
  )
}

export default LoginPage
