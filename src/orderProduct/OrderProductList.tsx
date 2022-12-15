import { Button } from "@mantine/core";
import * as React from "react";
import { useRef } from "react";
import {
  List,
  Datagrid,
  ListProps,
  TextField,
  DateField,
  ReferenceField,
} from "react-admin";
import { useReactToPrint } from "react-to-print";
import Pagination from "../Components/Pagination";
import { ORDER_TITLE_FIELD } from "../order/OrderTitle";

export const OrderProductList = (props: ListProps): React.ReactElement => {
  const ReftableToPrint = useRef(null);
  const handleToPrint = useReactToPrint({
    content: () => ReftableToPrint.current,
  });
  return (
    <>
      <List
        {...props}
        bulkActionButtons={false}
        title={"Order Products"}
        perPage={50}
        pagination={<Pagination />}
      >
        <Datagrid rowClick="show" ref={ReftableToPrint}>
          <TextField label="Amount" source="amount" />
          <DateField source="createdAt" label="Created At" />
          <TextField label="ID" source="id" />
          <ReferenceField label="Order" source="order.id" reference="Order">
            <TextField source={ORDER_TITLE_FIELD} />
          </ReferenceField>
          <TextField label="Total Price" source="totalPrice" />
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
