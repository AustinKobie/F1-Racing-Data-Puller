import { Link } from "react-router-dom";

export default function Post(props) {
    const apiKey = "b3ea2a4711ab7da94bd468543c17af25";
  return (
    <div className="post">
      <h3>{props.post.title}</h3>
      {props.hideLink ? (
        <></>
      ) : (
        <Link
          to={`https://api.openweathermap.org/data/2.5/weather?q=${props.post.city}&units=imperial&appid=${apiKey}`}
        >
          More Info
        </Link>
      )}
    </div>
  );
}
