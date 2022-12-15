import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  TextField,
  ReferenceField,
  DateField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { CART_TITLE_FIELD } from "../cart/CartTitle";
import { PRODUCT_TITLE_FIELD } from "../product/ProductTitle";
import { Button } from "@mantine/core";
import { useRef } from "react";
import { useReactToPrint } from "react-to-print";

export const CartProductList = (props: ListProps): React.ReactElement => {
  const ReftableToPrint = useRef(null);
  const handleToPrint = useReactToPrint({
    content: () => ReftableToPrint.current,
  });
  return (
    <>
      <List
        {...props}
        bulkActionButtons={false}
        title={"Cart Products"}
        perPage={50}
        pagination={<Pagination />}
      >
        <Datagrid rowClick="show" ref={ReftableToPrint}>
          <TextField label="Amount" source="amount" />
          <ReferenceField label="Cart" source="cart.id" reference="Cart">
            <TextField source={CART_TITLE_FIELD} />
          </ReferenceField>
          <DateField source="createdAt" label="Created At" />
          <TextField label="ID" source="id" />
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
