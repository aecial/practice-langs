import { Link } from "react-router-dom";

function NavigationBar() {
  const objectNav = [
    {
      id: 0,
      name: "Home",
      link: "/",
    },
    {
      id: 1,
      name: "About",
      link: "/about",
    },
    {
      id: 2,
      name: "Login",
      link: "/login",
    },
  ];

  return (
    <>
      <nav>
        <ul>
          {objectNav.map((item) => {
            return (
              <li key={item.id}>
                <Link to={item.link}>{item.name}</Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </>
  );
}
export default NavigationBar;
