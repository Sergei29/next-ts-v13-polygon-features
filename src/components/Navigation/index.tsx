import Link from "next/link"

interface IProps {}

const Navigation = ({}: IProps): JSX.Element => {
  return (
    <nav className="flex justify-between">
      <Link href="/">Home</Link>
      <ul className="flex gap-2">
        <li>
          <Link href="/register">register</Link>
        </li>
        <li>
          <Link href="/login">login</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navigation
