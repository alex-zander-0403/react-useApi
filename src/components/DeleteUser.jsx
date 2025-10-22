import { useState } from "react";
import useApi from "../hooks/useApi";

//
function DeleteUser() {
  //
  const [userId, setUserId] = useState(null);
  const { isLoading, error, remove } = useApi(
    "https://68671e3ae3fefb261eddbed3.mockapi.io/api/v1"
  );

  const handleDelete = () => {
    remove(`/users/${userId}`)
      .then(() => {
        alert(`Пользователь с id ${userId} удален!`);
        setUserId("");
      })
      .catch((error) => {
        alert("Ошибка удаления пользователя", error);
      });
  };

  return (
    <div>
      <h2>Удаление пользователя</h2>
      <input
        type="text"
        placeholder="введите id пользователя"
        onChange={(e) => setUserId(e.target.value)}
      />
      <button onClick={handleDelete} disabled={isLoading}>
        {isLoading ? "Загрузка..." : "Удалить"}
      </button>
      {error && <p>Ошибка: {error.message}</p>}
    </div>
  );
}

export default DeleteUser;
