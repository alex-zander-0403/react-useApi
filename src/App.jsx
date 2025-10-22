import { useState } from "react";
import UserList from "./components/UserList";
import AddUser from "./components/AddUser";
import DeleteUser from "./components/DeleteUser";
import UpdateUser from "./components/UpdateUser";
import "./App.css";

//
function App() {
  const [showForm, setShowForm] = useState(false);

  const toggleForm = () => {
    setShowForm((prev) => !prev);
  };

  //
  return (
    <div>
      <div>
        {showForm && (
          <div>
            <AddUser />
            <DeleteUser />
            <UpdateUser />
          </div>
        )}

        <button onClick={toggleForm}>
          {!showForm ? "Управление списком" : "Скрыть"}
        </button>
      </div>

      <UserList />
    </div>
  );
}

//
export default App;
