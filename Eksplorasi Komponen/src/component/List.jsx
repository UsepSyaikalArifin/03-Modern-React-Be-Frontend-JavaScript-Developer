const List = () => {
  const users = ["Usep", "Syaikal", "Arifin"];
  const usersVIP = [
    { id: 1, nama: "Jackson", gender: "Male" },
    { id: 2, nama: "Jacon", gender: "Male" },
    { id: 3, nama: "Anastasya", gender: "Female" },
    { id: 4, nama: "Sarah", gender: "Female" },
  ];
  return (
    <div>
      {usersVIP.length &&
        usersVIP.map((data) => (
          <li key={data?.id}>
            Nama : {data?.nama} - Gender : {data?.gender}{" "}
          </li>
        ))}
      <ul>
        {users.length > 0 && users.map((name) => <li key={name}>{name}</li>)}
      </ul>
      <table className="border-separate border border-slate-500">
        <thead>
          <tr>
            <th className="border border-slate-950">ID</th>
            <th className="border border-slate-950">Name</th>
            <th className="border border-slate-950">Gender</th>
          </tr>
        </thead>
        <tbody>
          {usersVIP.length > 0 &&
            usersVIP.map((data) => (
              <tr key={data.id}>
                <td className="border border-slate-900">{data.id}</td>
                <td className="border border-slate-900">{data.nama}</td>
                <td className="border border-slate-900">{data.gender}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default List;
