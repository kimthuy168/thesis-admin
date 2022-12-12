import React, { useState } from "react";
import { Button, Card, CardContent, Paper, Snackbar } from "@material-ui/core";
import { Title } from "react-admin";
import { makeStyles } from "@material-ui/core/styles";
import CameraAltRoundedIcon from "@material-ui/icons/CameraAltRounded";
import S3 from "react-aws-s3";

// @ts-ignore
window.Buffer = window.Buffer || require("buffer").Buffer;

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
    },
  },
  input: {
    display: "none",
  },
  button: {
    margin: theme.spacing(1),
    color: "white",
  },
  imgPreview: {
    width: "90%",
    height: "auto",
  },
  margin: {
    margin: theme.spacing(1),
  },
  copyText: {
    color: "#06b6d4",
    cursor: "pointer",
    "&:hover": {
      color: "#0284c7",
      textDecoration: "underline",
    },
  },
}));

const ImageUpload = () => {
  const classes = useStyles();

  const [image, setImage] = useState<any>();
  const [link, setLink] = useState<string>("");
  const [open, setOpen] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(link);
    setOpen(true);
  };

  const handleUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files![0];
    const filename = new Date().toISOString() + file.name.replace(/\s/g, "");
    const config = {
      bucketName: "amp",
      region: "sgp1",
      accessKeyId: "DO00VE3ZXWDV84A93EHG",
      secretAccessKey: "Q5Zfsnyfmas5FODQAdXhNqG1yixf8qZEQ52UlxOvomM",
      s3Url: "https://amp.sgp1.digitaloceanspaces.com",
    };
    const client = new S3(config);
    client
      .uploadFile(file, filename)
      .then((data: any) => {
        if (data.status === 204) {
          console.log("success");
          setLink(data.location);
          setImage(data.location);
        }
      })
      .catch((err: any) => console.log(err));
  };

  return (
    <Card>
      <Snackbar
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
        open={open}
        onClose={() => setOpen(false)}
        message="Copied to clipboard"
        key={"topcenter"}
        autoHideDuration={1000}
      />
      <Title title="My Page" />
      <CardContent>
        {" "}
        <div style={{ marginBottom: "1rem" }}>
          <div className={classes.root}>
            <input
              accept="image/*"
              className={classes.input}
              onChange={handleUpload}
              type="file"
              id="contained-button-file"
              multiple
            />
            <label htmlFor="contained-button-file">
              <Button
                variant="contained"
                color="primary"
                component="span"
                className={classes.button}
              >
                Upload Image
                <CameraAltRoundedIcon />
              </Button>
            </label>
          </div>
        </div>
        {image && (
          <>
            <p onClick={copyToClipboard}>
              {link} <span className={classes.copyText}>copy</span>
            </p>
            <Paper
              elevation={3}
              style={{
                padding: "1rem",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <img src={image} alt="uploaded" className={classes.imgPreview} />
            </Paper>
          </>
        )}
      </CardContent>
    </Card>
  );
};

export default ImageUpload;
