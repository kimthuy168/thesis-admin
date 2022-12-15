import { Button } from "@mantine/core";
import * as React from "react";
import { useRef } from "react";
import { List, Datagrid, ListProps, TextField, DateField } from "react-admin";
import { useReactToPrint } from "react-to-print";
import Pagination from "../Components/Pagination";

export const CouponList = (props: ListProps): React.ReactElement => {
  const ReftableToPrint = useRef(null);
  const handleToPrint = useReactToPrint({
    content: () => ReftableToPrint.current,
  });
  return (
    <>
      <List
        {...props}
        bulkActionButtons={false}
        title={"Coupons"}
        perPage={50}
        pagination={<Pagination />}
      >
        <Datagrid rowClick="show" ref={ReftableToPrint}>
          <TextField label="Code" source="code" />
          <TextField label="couponType" source="couponType" />
          <DateField source="createdAt" label="Created At" />
          <TextField label="End Date" source="endDate" />
          <TextField label="ID" source="id" />
          <TextField label="Limit" source="limit" />
          <TextField label="Start Date" source="startDate" />
          <DateField source="updatedAt" label="Updated At" />
          <TextField label="Used" source="used" />
          <TextField label="value" source="value" />
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
