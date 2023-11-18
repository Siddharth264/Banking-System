import { Table } from "@radix-ui/themes";
import User from "./User";
import { useEffect, useState } from "react";
export default function Users() {

  const [userData, setUserData] = useState([])

  useEffect(()=>{
     fetch('api/v1/user/',{method: 'GET'})
     .then(res => res.json())
     .then(data => setUserData(data))
  },[])

     const userElements = userData.map((user)=>{
        return <User key={user.name} name={user.name} email={user.email} amount={user.amount}/>
     })
  return (
    <div className="max-w-3xl mx-auto">
      <Table.Root>
        <Table.Header>
          <Table.Row>
            <Table.ColumnHeaderCell>Full name</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell>Email</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell>Amount</Table.ColumnHeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {userElements}
        </Table.Body>
      </Table.Root>
    </div>
  );
}
