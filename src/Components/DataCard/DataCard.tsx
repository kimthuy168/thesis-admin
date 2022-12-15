import { Paper } from "@mantine/core";
import React from "react";
import { GenericProps } from "../../util/props.types";
type DataCardProps = {
  title: string;
  icon: React.ReactElement;
  value: number | string;
  trend?: number | string;
  graph?: string | "up" | "down";
};

const DataCard = ({
  value,
  title,
  icon,
  trend,
  graph,
}: DataCardProps & GenericProps) => {
  return (
    <Paper
      shadow="sm"
      p="md"
      radius="md"
      style={{ width: "100%", borderColor: "gray", border: "2px" }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <h2
          style={{
            color: "gray",
            fontSize: "1.87rem",
            lineHeight: "2.25rem",
            fontWeight: 700,
            marginBottom: "1rem",
          }}
        >
          {title}
        </h2>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <h1
          style={{
            fontSize: "2.87rem",
            lineHeight: "2.25rem",
            fontWeight: 700,
          }}
        >
          {value}
        </h1>
        <div>{icon}</div>
      </div>
    </Paper>
  );
};

export default DataCard;
