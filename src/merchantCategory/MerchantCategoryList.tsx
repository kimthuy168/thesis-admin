import { Button } from "@mantine/core";
import * as React from "react";
import { useRef } from "react";
import { List, Datagrid, ListProps, DateField, TextField } from "react-admin";
import { useReactToPrint } from "react-to-print";
import Pagination from "../Components/Pagination";

export const MerchantCategoryList = (props: ListProps): React.ReactElement => {
  const ReftableToPrint = useRef(null);
  const handleToPrint = useReactToPrint({
    content: () => ReftableToPrint.current,
  });
  return (
    <>
      <List
        {...props}
        bulkActionButtons={true}
        title={"Merchant Categories"}
        perPage={50}
        pagination={<Pagination />}
      >
        <Datagrid rowClick="show" ref={ReftableToPrint}>
          <DateField source="createdAt" label="Created At" />
          <TextField label="Description" source="description" />
          <TextField label="ID" source="id" />
          <TextField label="Image" source="image" />
          <TextField label="Name" source="name" />
          <DateField source="updatedAt" label="Updated At" />
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
