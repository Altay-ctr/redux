import { useSelector } from "react-redux";

const Home = () => {
  const theme = useSelector(state => state.ui.theme);
  const { username, age, city } = useSelector(state => state.ui);

  const mainStyle = {
    padding: "40px",
    minHeight: "calc(100vh - 160px)",
    textAlign: "center",
    background: theme === "light" ? "#fff" : "#222",
    color: theme === "light" ? "#000" : "#fff",
    transition: "0.3s"
  };

  return (
    <main style={mainStyle}>
      <h2>Главная страница</h2>
      <p>Имя: {username}</p>
      <p>Возраст: {age}</p>
      <p>Город: {city}</p>
    </main>
  );
};

export default Home;