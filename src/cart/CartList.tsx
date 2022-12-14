import { Button } from "@mantine/core";
import * as React from "react";
import { useRef } from "react";

import {
  List,
  Datagrid,
  ListProps,
  DateField,
  TextField,
  BooleanField,
  ReferenceField,
} from "react-admin";
import { useReactToPrint } from "react-to-print";

import Pagination from "../Components/Pagination";
import { MERCHANT_TITLE_FIELD } from "../merchant/MerchantTitle";
import { ORDER_TITLE_FIELD } from "../order/OrderTitle";
import { USER_TITLE_FIELD } from "../user/UserTitle";

export const CartList = (props: ListProps): React.ReactElement => {
  const ReftableToPrint = useRef(null);
  const handleToPrint = useReactToPrint({
    content: () => ReftableToPrint.current,
  });
  return (
    <>
      <List
        {...props}
        bulkActionButtons={false}
        title={"Carts"}
        perPage={50}
        pagination={<Pagination />}
      >
        <Datagrid rowClick="show" ref={ReftableToPrint}>
          <DateField source="createdAt" label="Created At" />
          <TextField label="ID" source="id" />
          <BooleanField label="isCheckout" source="isCheckout" />
          <ReferenceField
            label="Merchant"
            source="merchant.id"
            reference="Merchant"
          >
            <TextField source={MERCHANT_TITLE_FIELD} />
          </ReferenceField>
          <ReferenceField label="Orders" source="order.id" reference="Order">
            <TextField source={ORDER_TITLE_FIELD} />
          </ReferenceField>
          <DateField source="updatedAt" label="Updated At" />
          <ReferenceField label="User" source="user.id" reference="User">
            <TextField source={USER_TITLE_FIELD} />
          </ReferenceField>
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
