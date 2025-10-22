import { useState } from "react";
import useApi from "../hooks/useApi";

//
function AddUser() {
  const [name, setName] = useState("");
  const [hasCar, setHasCar] = useState(false);

  const { isLoading, error, post } = useApi(
    "https://68671e3ae3fefb261eddbed3.mockapi.io/api/v1"
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    const newUser = {
      name,
      hasCar,
    };
    post("users", newUser)
      .then(() => {
        alert("Добавлено");
        setName("");
        setHasCar(false);
      })
      .catch(() => {
        alert("Новый пользователь не добавлен");
      });
  };

  //
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h2>Добавить пользователя</h2>
        <div>
          <input
            required
            type="text"
            placeholder="введите имя"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="hasCar">Наличие авто</label>
          <input
            type="checkbox"
            id="hasCar"
            checked={hasCar}
            onChange={(e) => setHasCar(e.target.checked)}
          />
        </div>

        <button type="submit" disabled={isLoading}>
          {isLoading ? "Загрузка..." : "Добавить"}
        </button>
        {error && <p>Ошибка: {error.message}</p>}
      </form>
    </div>
  );
}

export default AddUser;
