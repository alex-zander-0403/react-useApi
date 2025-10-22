import { useState } from "react";
import useApi from "../hooks/useApi";

//
function UpdateUser() {
  //
  const [userId, setUserId] = useState("");
  const [name, setName] = useState("");
  const [hasCar, setHasCar] = useState(false);

  const { isLoading, error, put } = useApi(
    "https://68671e3ae3fefb261eddbed3.mockapi.io/api/v1"
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    const editedUser = {
      
      name,
      hasCar,
    };
    put(`users/${userId}`, editedUser)
      .then(() => {
        alert("Отредактировано!");
        setName("");
        setHasCar(false);
      })
      .catch(() => {
        alert("Пользователь не отредактирован");
      });
  };

  //
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h2>Редактирование</h2>
        <div>
          <input
            type="number"
            required
            placeholder="введите id"
            value={userId}
            onChange={(e) => setUserId(e.target.value)}
          />
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
          {isLoading ? "Загрузка..." : "Редактировать"}
        </button>
        {error && <p>Ошибка: {error.message}</p>}
      </form>
    </div>
  );
}

export default UpdateUser;
