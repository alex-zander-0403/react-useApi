import { useEffect } from "react";
import useApi from "../hooks/useApi";

//
function UserList() {
  //
  const { data, isLoading, error, get } = useApi(
    "https://68671e3ae3fefb261eddbed3.mockapi.io/api/v1"
  );

  //
  useEffect(() => {
    get("users");
  }, [get]);

  if (isLoading) <h3>Загрузка...</h3>;
  if (error) <h3>Ошибка: {error.message}</h3>;

  //
  return (
    <div>
      <h2>Пользователи:</h2>
      {/* <button onClick={() => get("users")}>Загрузить</button> */}
      <ul>
        {data &&
          data.map((el) => (
            <div key={el.id} style={{ padding: 10 }}>
              <li>
                id: {el.id} - {el.name} ({el.hasCar ? "есть авто" : "нет авто"})
              </li>
              {/* <button onClick={() => put(el.id)}>редактировать</button> */}
            </div>
          ))}
      </ul>
    </div>
  );
}

//
export default UserList;
