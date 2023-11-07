import {
  Avatar,
  Box,
  Button,
  Card,
  CardHeader,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Pagination,
  Select,
  Switch,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";

import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  activeProduct,
  deleteProduct,
  findProducts,
} from "../../../Redux/Customers/Product/Action";

const ProductsTable = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { customersProduct } = useSelector((store) => store);
  const [filterValue, setFilterValue] = useState({
    availability: "",
    category: "",
    sort: "",
  });

  // query
  const searchParams = new URLSearchParams(location.search);
  const availability = searchParams.get("availability");
  const category = searchParams.get("category");
  const sort = searchParams.get("sort");
  const page = searchParams.get("page");

  const handlePaginationChange = (event, value) => {
    searchParams.set("page", value - 1);
    const query = searchParams.toString();
    navigate({ search: `?${query}` });
  };
  useEffect(() => {
    const data = {
      category: category || "",
      colors: [],
      sizes: [],
      minPrice: 0,
      maxPrice: 999999999,
      minDiscount: 0,
      sort: sort || "price_low",
      pageNumber: page || 0,
      pageSize: 10,
      stock: availability,
    };
    dispatch(findProducts(data));
  }, [
    availability,
    category,
    sort,
    page,
    customersProduct.deleteProduct,
    customersProduct.activeProduct,
    dispatch,
  ]);
  const [items, setItems] = useState();
  useEffect(() => {
    setItems(customersProduct?.products?.content);
  }, [customersProduct?.products]);
  console.log("data", items);
  const handleFilterChange = (e, sectionId) => {
    console.log(e.target.value, sectionId);
    setFilterValue((values) => ({ ...values, [sectionId]: e.target.value }));
    searchParams.set(sectionId, e.target.value);
    const query = searchParams.toString();
    navigate({ search: `?${query}` });
  };

  const handleDeleteProduct = (productId) => {
    console.log("delete product ", productId);
    dispatch(deleteProduct(productId));
  };

  console.log("data", items);
  const handleCheckedChange = (productId, checked) => {
    const updatedItems = items.map((item) => {
      if (item.id === productId) {
        return {
          ...item,
          active: checked,
        };
      }
      return item;
    });
    setItems(updatedItems);
    dispatch(activeProduct(productId, checked));
  };

  return (
    <Box width={"100%"}>
      <Card className="p-3">
        <CardHeader
          title="Quản lý sản phẩm"
          sx={{
            pt: 0,
            alignItems: "center",
            "& .MuiCardHeader-action": { mt: 0.6 },
          }}
        />
        <Grid container spacing={2}>
          <Grid item xs={4}>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">
                Danh Mục<caption></caption>
              </InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={filterValue.category}
                label="Category"
                onChange={(e) => handleFilterChange(e, "category")}
              >
                <MenuItem value={"pant"}>Hoa Cưới</MenuItem>
                <MenuItem value={"hoabanchay"}>Hoa Tươi</MenuItem>
                <MenuItem value={"saree"}>Hoa Chúc Mừng</MenuItem>
                <MenuItem value={"lengha_choli"}>Hoa Tình Yêu</MenuItem>
                <MenuItem value={"lengha_choli"}>Cây Trong Nhà</MenuItem>
                <MenuItem value={"lengha_choli"}>Cây Ngoài Trời</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={4}>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Trạng Thái</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={filterValue.availability}
                label="Trạng Thái"
                onChange={(e) => handleFilterChange(e, "availability")}
              >
                <MenuItem value={"All"}>Tất Cả</MenuItem>
                <MenuItem value={"in_stock"}>Còn Hàng</MenuItem>
                <MenuItem value={"out_of_stock"}>Hết Hàng</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={4}>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Sắp Xếp</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={filterValue.sort}
                label="Sort By Price"
                onChange={(e) => handleFilterChange(e, "sort")}
              >
                <MenuItem value={"price_high"}>Cao Đến Thấp</MenuItem>
                <MenuItem value={"price_low"}>Thấp Đến Cao</MenuItem>
              </Select>
            </FormControl>
          </Grid>
        </Grid>
      </Card>

      <Button
        variant="contained"
        color="success"
        className="mt-6"
        onClick={() => navigate(`/admin/product/create`)}
      >
        Thêm Sản Phẩm
      </Button>

      <Card className="mt-6">
        <CardHeader
          title="Danh Sách"
          sx={{
            pt: 2,
            alignItems: "center",
            "& .MuiCardHeader-action": { mt: 0.6 },
          }}
        />

        <TableContainer>
          <Table sx={{ minWidth: 800 }} aria-label="table in dashboard">
            <TableHead>
              <TableRow>
                <TableCell>Hình</TableCell>
                <TableCell>Tiêu Đề</TableCell>
                <TableCell sx={{ textAlign: "center" }}>Danh Mục</TableCell>
                <TableCell sx={{ textAlign: "center" }}>Giá</TableCell>
                <TableCell sx={{ textAlign: "center" }}>Số Lượng</TableCell>
                <TableCell sx={{ textAlign: "center" }}>Cập Nhật</TableCell>
                <TableCell sx={{ textAlign: "center" }}>Xóa</TableCell>
                <TableCell sx={{ textAlign: "center" }}>Kích Hoạt</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {items?.map((item) => (
                <TableRow
                  hover
                  key={item.id}
                  sx={{ "&:last-of-type td, &:last-of-type th": { border: 0 } }}
                >
                  <TableCell>
                    <Avatar alt={item.titel} src={item.imageUrl} />
                  </TableCell>

                  <TableCell
                    sx={{ py: (theme) => `${theme.spacing(0.5)} !important` }}
                  >
                    <Box sx={{ display: "flex", flexDirection: "column" }}>
                      <Typography
                        sx={{
                          fontWeight: 500,
                          fontSize: "0.875rem !important",
                        }}
                      >
                        {item.title}
                      </Typography>
                      <Typography variant="caption">{item.brand}</Typography>
                    </Box>
                  </TableCell>
                  <TableCell sx={{ textAlign: "center" }}>
                    {item.category.name}
                  </TableCell>
                  <TableCell sx={{ textAlign: "center" }}>
                    {item.discountedPrice}
                  </TableCell>
                  <TableCell sx={{ textAlign: "center" }}>
                    {item.quantity}
                  </TableCell>
                  <TableCell sx={{ textAlign: "center" }}>
                    <Button
                      onClick={() =>
                        navigate(`/admin/product/update/${item.id}`)
                      }
                      variant="text"
                    >
                      Update
                    </Button>
                  </TableCell>
                  <TableCell sx={{ textAlign: "center" }}>
                    <Button
                      variant="text"
                      onClick={() => handleDeleteProduct(item.id)}
                    >
                      Delete
                    </Button>
                  </TableCell>

                  <TableCell sx={{ textAlign: "center" }}>
                    <Switch
                      onChange={(event) =>
                        handleCheckedChange(item.id, event.target.checked)
                      }
                      checked={item.active}
                    ></Switch>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Card>
      <Card className="mt-2 border">
        {/* <Pagination
          className="py-5 border w-auto"
          size="large"
          count={10}
          color="primary"
          onChange={handlePaginationChange}
        /> */}

        <div className="mx-auto px-4 py-5 flex justify-center shadow-lg rounded-md">
          <Pagination
            count={customersProduct.products?.totalPages}
            color="primary"
            className=""
            onChange={handlePaginationChange}
            // value={page}
          />
        </div>
      </Card>
    </Box>
  );
};

export default ProductsTable;
