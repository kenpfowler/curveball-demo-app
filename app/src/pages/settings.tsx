import React from "react";
import { useResource } from "react-ketting";

const SettingsPage: React.FC = () => {
  const { loading, error, data } = useResource<any>("/users");
  if (loading) return <p>Loading...</p>;
  if (error) return <div className="error">{error.message}</div>;

  return (
    <>
      {data.map((user: any) => {
        return (
          <div key={user.id}>
            <h1>{user.name}</h1>
            <p>{user.group}</p>
            <p>{user.permission}</p>
          </div>
        );
      })}
    </>
  );
};

export default SettingsPage;
