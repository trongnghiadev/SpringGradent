import { useState } from "react";
import { Typography } from "@mui/material";
import { Grid, TextField, Button } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import { Fragment } from "react";
//import "./CreateElementForm.css";
import { useDispatch } from "react-redux";
import { createElement } from "../../../Redux/Admin/Element/Action";
import ElementsTable from "../Elements/ElementsTable";

const CreateElementForm = () => {
  const [elementData, setProductData] = useState({
    name: "",
    inventory: "",
    price: "",
  });
  const dispatch = useDispatch();
  const jwt = localStorage.getItem("jwt");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProductData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createElement({ data: elementData, jwt }));
  };

  return (
    <Fragment className="createProductContainer ">
      <Typography
        variant="h3"
        sx={{ textAlign: "center" }}
        className="py-10 text-center "
      >
        NGUYÊN LIỆU
      </Typography>

      <form
        onSubmit={handleSubmit}
        className="createProductContainer min-h-screen"
      >
        <Grid container spacing={2}>
          <Grid item xs={12} sm={4}>
            <TextField
              fullWidth
              label="Tên Sản Phẩm"
              name="name"
              value={elementData.name}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} sm={3}>
            <TextField
              fullWidth
              label="Số Lượng"
              name="inventory"
              value={elementData.inventory}
              onChange={handleChange}
              type="number"
            />
          </Grid>
          <Grid item xs={12} sm={3}>
            <TextField
              fullWidth
              label="Giá Mua"
              name="price"
              value={elementData.price}
              onChange={handleChange}
              type="number"
            />
          </Grid>
          <Grid item xs={12} sm={2}>
            <Button
              variant="contained"
              sx={{ p: 1.8 }}
              className="py-20"
              size="large"
              type="submit"
              endIcon={<SendIcon />}
            >
              Thêm
            </Button>
          </Grid>
        </Grid>
      </form>
      <ElementsTable></ElementsTable>
    </Fragment>
  );
};

export default CreateElementForm;
