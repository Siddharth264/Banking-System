import { Table } from "@radix-ui/themes";

export default function User(props) {
  return (
    <Table.Row>
      <Table.RowHeaderCell>{props.name}</Table.RowHeaderCell>
      <Table.Cell>{props.email}</Table.Cell>
      <Table.Cell>{props.amount}</Table.Cell>
    </Table.Row>
  );
}
