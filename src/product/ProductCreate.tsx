import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  NumberInput,
  ReferenceArrayInput,
  SelectArrayInput,
  TextInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

// import { CartProductTitle } from "../cartProduct/CartProductTitle";
import { MerchantTitle } from "../merchant/MerchantTitle";
import { ProductAddonTitle } from "../productAddon/ProductAddonTitle";
import { ProductCategoryTitle } from "../productCategory/ProductCategoryTitle";
// import { ProductTrackingTitle } from "../productTracking/ProductTrackingTitle";

import { ProductOptionTitle } from "../productOption/ProductOptionTitle";
import { ProductPromotionTitle } from "../productPromotion/ProductPromotionTitle";
// import { Input } from "@mantine/core";
export const ProductCreate = (props: CreateProps): React.ReactElement => {
  return (
    <>
      <Create {...props}>
        <SimpleForm>
          <NumberInput
            label="Base Price"
            source="basePrice"
            style={{
              width: "50%",
              marginLeft: "20%",
            }}
          />
          {/* <ReferenceArrayInput
            style={{
              width: "50%",
              marginLeft: "20%",
            }}
            source="cartProducts"
            reference="CartProduct"
            parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
            format={(value: any) => value && value.map((v: any) => v.id)}
          >
            <SelectArrayInput optionText={CartProductTitle} />
          </ReferenceArrayInput> */}

          <TextInput
            style={{
              width: "50%",
              marginLeft: "20%",
            }}
            label="Description"
            multiline
            source="description"
          />
          <TextInput
            style={{
              width: "50%",
              marginLeft: "20%",
            }}
            label="Image"
            source="image"
          />
          <ReferenceInput
            style={{
              width: "50%",
              marginLeft: "20%",
            }}
            source="merchant.id"
            reference="Merchant"
            label="Merchant"
          >
            <SelectInput optionText={MerchantTitle} />
          </ReferenceInput>
          <TextInput
            style={{
              width: "50%",
              marginLeft: "20%",
            }}
            label="Name"
            source="name"
          />
          <ReferenceArrayInput
            style={{
              width: "50%",
              marginLeft: "20%",
            }}
            source="productAddons"
            reference="ProductAddon"
            parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
            format={(value: any) => value && value.map((v: any) => v.id)}
          >
            <SelectArrayInput optionText={ProductAddonTitle} />
          </ReferenceArrayInput>
          <ReferenceArrayInput
            style={{
              width: "50%",
              marginLeft: "20%",
            }}
            source="productCategory"
            reference="ProductCategory"
            parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
            format={(value: any) => value && value.map((v: any) => v.id)}
          >
            <SelectArrayInput optionText={ProductCategoryTitle} />
          </ReferenceArrayInput>
          {/* <ReferenceInput
            style={{
              width: "50%",
              marginLeft: "20%",
            }}
            source="producttracking.id"
            reference="ProductTracking"
            label="Product Count"
          >
            <SelectInput optionText={ProductTrackingTitle} />
          </ReferenceInput> */}
          <ReferenceArrayInput
            style={{
              width: "50%",
              marginLeft: "20%",
            }}
            source="productOptions"
            reference="ProductOption"
            parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
            format={(value: any) => value && value.map((v: any) => v.id)}
          >
            <SelectArrayInput
              style={{
                width: "50%",
                marginLeft: "20%",
              }}
              optionText={ProductOptionTitle}
            />
          </ReferenceArrayInput>
          <ReferenceArrayInput
            style={{
              width: "50%",
              marginLeft: "20%",
            }}
            source="productPromotions"
            reference="ProductPromotion"
            parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
            format={(value: any) => value && value.map((v: any) => v.id)}
          >
            <SelectArrayInput optionText={ProductPromotionTitle} />
          </ReferenceArrayInput>
        </SimpleForm>
      </Create>
    </>
  );
};
