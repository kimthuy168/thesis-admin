import { Button } from "@mantine/core";
import React, { useRef } from "react";
import { List, Datagrid, ListProps, TextField, DateField } from "react-admin";
import { useReactToPrint } from "react-to-print";
import Pagination from "../Components/Pagination";
export const BannerList = (props: ListProps): React.ReactElement => {
  const ReftableToPrint = useRef(null);
  const handleToPrint = useReactToPrint({
    content: () => ReftableToPrint.current,
  });

  return (
    <>
      <List
        {...props}
        bulkActionButtons={false}
        title={"Banners"}
        perPage={50}
        pagination={<Pagination />}
      >
        <Datagrid rowClick="show" ref={ReftableToPrint}>
          <TextField label="Banner Type" source="bannerType" />
          <DateField source="createdAt" label="Created At" />
          <DateField label="End Date" source="endDate" />
          <TextField label="foreignKey" source="foreignKey" />
          <TextField label="forField" source="forField" />
          <TextField label="ID" source="id" />
          <TextField label="Image" source="image" />
          <TextField label="Name" source="name" />
          <DateField label="Start Date" source="startDate" />
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
