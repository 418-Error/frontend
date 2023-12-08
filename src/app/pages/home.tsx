import {Link} from "react-router-dom";

export default function Home () {
  return (
    <div>
      <span className="bg-red-500">Hime</span>
      <Link to={"/admin/home"}>Admin panel</Link>
    </div>
  )
}