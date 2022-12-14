import { Button } from "@mantine/core";
import * as React from "react";
import { useRef } from "react";
import { List, Datagrid, ListProps, DateField, TextField } from "react-admin";
import { useReactToPrint } from "react-to-print";
import Pagination from "../Components/Pagination";

export const UserList = (props: ListProps): React.ReactElement => {
  const ReftableToPrint = useRef(null);
  const handleToPrint = useReactToPrint({
    content: () => ReftableToPrint.current,
  });
  return (
    <>
      <List
        {...props}
        bulkActionButtons={true}
        title={"Users"}
        perPage={50}
        pagination={<Pagination />}
      >
        <Datagrid rowClick="show" ref={ReftableToPrint}>
          <DateField source="createdAt" label="Created At" />
          <TextField label="Email" source="email" />
          <TextField label="First Name" source="firstName" />
          <TextField label="ID" source="id" />
          <TextField label="Last Name" source="lastName" />
          <TextField label="Phone" source="phone" />
          <TextField label="Profile" source="profile" />
          <TextField label="Roles" source="roles" />
          <DateField source="updatedAt" label="Updated At" />
          <TextField label="Username" source="username" />
        </Datagrid>
      </List>
      <Button
        onClick={handleToPrint}
        style={{
          marginTop: "6px",
          width: "5rem",
          height: "30px",
          display: "flex",
          justifyContent: "right",
          alignItems: "center",
        }}
      >
        Print
      </Button>
    </>
  );
};
