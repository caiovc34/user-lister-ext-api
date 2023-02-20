import { useEffect, useState } from "react";

// MODALS
import EditUser from "@/components/modals/editUser";
import DeleteUser from "@/components/modals/deleteUser";

export default function Home({ data }) {
  //STATE
  const [users, updateUsers] = useState();
  const [selectedLine, updateSelectedLine] = useState();
  const [todosCompleted, updateTodosCompleted] = useState();

  const getUsers = () => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((json) => updateUsers(json));
  };

  const getUserTodosCount = (id) => {
    fetch(`https://jsonplaceholder.typicode.com/users/${id}/todos`)
      .then((response) => response.json())
      .then((json) =>
        updateTodosCompleted(json.filter((item) => item.completed).length)
      );
  };

  useEffect(() => getUsers(), []);

  const addStyleToString = (item) => {
    if (typeof item === "string" || item instanceof String) {
      return "font-normal";
    }
  };

  const editUserList = (index, user) => {
    // create new copy of user list
    const newArr = users;
    // remove user
    newArr.splice(index, 1);
    // add edited user back in if needed
    user && newArr.splice(index, 0, user);
    updateUsers(newArr);
    updateSelectedLine(null);
  };

  return users && users.length ? (
    <section className="pt-16">
      <div>
        <h1 className="font-bold text-4xl text-center uppercase">
          {data.title}
        </h1>
        <p className="mt-2 text-center">{data.text}</p>
      </div>
      <div className="mt-10 mx-6 xl:mx-20 overflow-x-scroll max-h-[50vh]">
        <table className="table-auto relative">
          <thead>
            <tr>
              {data.headerLabels.map((item, index) => (
                <th key={index} className={data.headerStyle}>
                  {item}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {users.map((item, index) => (
              <tr
                key={index}
                role="button"
                onClick={() => {
                  updateTodosCompleted(null);
                  updateSelectedLine(selectedLine === index ? null : index);
                  getUserTodosCount(item.id);
                }}
                className={`${
                  selectedLine === index ? "bg-[#d0433c]" : "hover:bg-[#e59f9b]"
                } transition-all`}
              >
                {/* TABLE DATA */}
                <th className={data.bodyStyle}>{item.id}</th>
                <th
                  className={`${data.bodyStyle} ${addStyleToString(item.name)}`}
                >
                  {item.name}
                </th>
                <th
                  className={`${data.bodyStyle} ${addStyleToString(
                    item.username
                  )}`}
                >
                  {item.username}
                </th>
                <th
                  className={`${data.bodyStyle} ${addStyleToString(
                    item.email
                  )}`}
                >
                  <a className="hover:underline" href={`mailto:${item.email}`}>
                    {item.email}
                  </a>
                </th>
                <th
                  className={`${data.bodyStyle} ${addStyleToString(
                    item.address.street
                  )} min-w-[20rem]`}
                >
                  {`${item.address.street} ${item.address.suite}, ${item.address.city}`}
                  {selectedLine === index && (
                    <>
                      <br />
                      Zip: {`${item.address.zipcode}`}
                      <br />
                      Geo: {`${item.address.geo.lat}, ${item.address.geo.lng}`}
                    </>
                  )}
                </th>
                <th
                  className={`${data.bodyStyle} ${addStyleToString(
                    item.phone
                  )}`}
                >
                  {item.phone}
                </th>
                <th
                  className={`${data.bodyStyle} ${addStyleToString(
                    item.website
                  )}`}
                >
                  {item.website}
                </th>
                <th
                  className={`${data.bodyStyle} ${addStyleToString(
                    item.company.name
                  )} min-w-[20rem]`}
                >
                  {item.company.name}
                  {selectedLine === index && (
                    <>
                      <br />
                      {item.company.catchPhrase}
                      <br />
                      {item.company.bs}
                    </>
                  )}
                </th>
                <th className={data.bodyStyle}>
                  {selectedLine === index && todosCompleted
                    ? todosCompleted
                    : "?"}
                </th>
                {/* ACTIONS */}
                <th className={data.bodyStyle}>
                  <div className="flex gap-4">
                    {/* EDIT BUTTON */}
                    <EditUser
                      key={index}
                      index={index}
                      user={users[index]}
                      editUserList={editUserList}
                    />
                    {/* DELETE BUTTON */}
                    <DeleteUser index={index} editUserList={editUserList} />
                  </div>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  ) : (
    <section className="grid place-content-center h-screen w-screen">
      <div className="text-center">
        <h1 className="font-bold text-4xl uppercase">{data.error.title}</h1>
        <p className="pt-6">{data.error.msg}</p>
      </div>
    </section>
  );
}
