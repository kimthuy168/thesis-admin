import { Button } from "@mantine/core";
import * as React from "react";
import { useRef } from "react";
import {
  List,
  Datagrid,
  ListProps,
  DateField,
  TextField,
  ReferenceField,
} from "react-admin";
import { useReactToPrint } from "react-to-print";
import Pagination from "../Components/Pagination";
import { PRODUCT_TITLE_FIELD } from "../product/ProductTitle";

export const ProductOptionList = (props: ListProps): React.ReactElement => {
  const ReftableToPrint = useRef(null);
  const handleToPrint = useReactToPrint({
    content: () => ReftableToPrint.current,
  });
  return (
    <>
      <List
        {...props}
        bulkActionButtons={true}
        title={"Product Options"}
        perPage={50}
        pagination={<Pagination />}
      >
        <Datagrid rowClick="show" ref={ReftableToPrint}>
          <DateField source="createdAt" label="Created At" />
          <TextField label="ID" source="id" />
          <TextField label="Name" source="name" />
          <TextField label="Options" source="options" />
          <ReferenceField
            label="Product"
            source="product.id"
            reference="Product"
          >
            <TextField source={PRODUCT_TITLE_FIELD} />
          </ReferenceField>
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
