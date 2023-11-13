import React, { useEffect, useState } from "react";
import {
  Grid,
  Typography,
  List,
  ListItem,
  ListItemText,
  IconButton,
  Divider,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import DeleteIcon from "@mui/icons-material/Delete";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import { Button } from "@mui/material";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import { useParams } from "react-router-dom";
import {
  addItemIngredienttable,
  getIngredienttable,
} from "../../../Redux/Admin/IngredientTable/Action";
import { useDispatch, useSelector } from "react-redux";
import { getEmlement } from "../../../Redux/Admin/Element/Action";

const IngredienttableTable = () => {
  const { productId } = useParams();
  const dispatch = useDispatch();
  const [ingredientTableData, setIngredientTable] = useState();
  const { adminIngredienttable, adminsEmlement } = useSelector(
    (store) => store
  );

  const dense = false;
  const secondary = false;
  useEffect(() => {
    dispatch(getIngredienttable({ productId }));
  }, [productId]);

  useEffect(() => {
    if (adminIngredienttable?.data) {
      setIngredientTable(adminIngredienttable?.data);
    }
  }, [adminIngredienttable]);
  const handleClick = async (item) => {
    const data = { elementId: item.id };
    await dispatch(addItemIngredienttable(productId, data));

    // Cập nhật ingredientTableData
    const response = await dispatch(getIngredienttable({ productId }));
    setIngredientTable(response.data);
  };
  useEffect(() => {
    const data = {
      pageNumber: 0,
      pageSize: 1000,
    };
    dispatch(getEmlement(data));
  }, [dispatch]);
  console.log("page", adminIngredienttable);

  return (
    <>
      <Grid container>
        <Grid item xs={4} md={4}>
          <Typography sx={{ m: 2, mb: 2 }} variant="h6" component="div">
            Nguyên Liệu Trong Kho
          </Typography>
          <List
            sx={{
              m: 2,
              backgroundColor: "#22092C",
              borderRadius: "12px",
              width: "100%",
              maxWidth: "100%",
              position: "relative",
              overflow: "auto",
              maxHeight: "100%",
              "& ul": { padding: 0 },
            }}
          >
            {adminsEmlement?.elements?.content?.map((item, index) => (
              <>
                <ListItem key={index}>
                  <ListItemText
                    primary={item.name} // Thay thế bằng thuộc tính cụ thể bạn muốn hiển thị
                    secondary={secondary ? "Secondary text" : null}
                    sx={{
                      minWidth: "50%",
                    }}
                  />
                  <ListItemText
                    primary={"Giá " + item.price + "000 VND"} // Thay thế bằng thuộc tính cụ thể bạn muốn hiển thị
                    secondary={secondary ? "Secondary text" : null}
                  />
                  <IconButton
                    edge="end"
                    aria-label="delete"
                    sx={{ backgroundColor: "#2196f3", color: "#ffebee" }}
                    onClick={() => handleClick(item)}
                  >
                    <AddIcon />
                  </IconButton>
                </ListItem>
                <Divider light />
              </>
            ))}
          </List>
        </Grid>
        <Grid item xs={2} md={2}></Grid>
        <Grid item xs={5} md={5}>
          <Typography sx={{ m: 2, mb: 2 }} variant="h6" component="div">
            Bản Công Thức
          </Typography>
          <List
            dense={dense}
            sx={{
              m: 2,
              backgroundColor: "#22092C",
              borderRadius: "12px",
            }}
          >
            {Array.isArray(ingredientTableData) ? (
              ingredientTableData.map((i, index) => (
                <ListItem
                  key={index}
                  secondaryAction={
                    <div className="lg:flex items-center lg:space-x-10 pt-4">
                      <div className="flex items-center space-x-2">
                        <IconButton
                          color="primary"
                          aria-label="decrease quantity"
                        >
                          <RemoveCircleOutlineIcon />
                        </IconButton>
                        <span className="py-1 px-7 border rounded-sm">
                          {i.quantity}
                        </span>
                        <IconButton
                          color="primary"
                          aria-label="increase quantity"
                        >
                          <AddCircleOutlineIcon />
                        </IconButton>
                      </div>
                      <div className="flex text-sm lg:text-base mt-5 lg:mt-0">
                        <Button
                          variant="text"
                          sx={{ backgroundColor: "red", color: "#ffebee" }}
                        >
                          Xóa
                        </Button>
                      </div>
                    </div>
                  }
                >
                  <ListItemText
                    primary={i.element.name}
                    secondary={secondary ? "Secondary text" : null}
                  />
                </ListItem>
              ))
            ) : (
              <ListItem>
                <ListItemText primary="Không có công thức" />
              </ListItem>
            )}
          </List>
        </Grid>
      </Grid>
    </>
  );
};

export default IngredienttableTable;
