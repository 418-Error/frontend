import {Link} from "react-router-dom";

export default function Home() {
  return (
    <div className="h-screen bg-linear pt-40">
      <div>
        <Link to={'/questions/'}>
          <div className="bg-white p-2 m-4">
            Questions
          </div>
        </Link>
      </div>
    </div>
  )
}
