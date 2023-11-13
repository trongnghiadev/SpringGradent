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
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getEmlement } from "../../../Redux/Admin/Element/Action";

const ElementsTable = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { adminsEmlement } = useSelector((store) => store);

  // query
  const searchParams = new URLSearchParams(location.search);
  const page = searchParams.get("page");

  const handlePaginationChange = (event, value) => {
    searchParams.set("page", value - 1);
    const query = searchParams.toString();
    navigate({ search: `?${query}` });
  };

  useEffect(() => {
    const data = {
      pageNumber: page || 0,
      pageSize: 10,
    };
    dispatch(getEmlement(data));
  }, [page, dispatch]);

  //console.log("page", adminsEmlement);
  const handleDeleteProduct = (productId) => {
    //console.log("delete product ", productId);
  };

  return (
    <Box width={"100%"}>
      <Card className="mt-5">
        <TableContainer>
          <Table sx={{ minWidth: 800 }} aria-label="table in dashboard">
            <TableHead>
              <TableRow>
                <TableCell>Tên</TableCell>
                <TableCell sx={{ textAlign: "center" }}>Giá Mua</TableCell>
                <TableCell sx={{ textAlign: "center" }}>Tồn Kho</TableCell>
                <TableCell sx={{ textAlign: "center" }}> </TableCell>
                <TableCell sx={{ textAlign: "center" }}></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {adminsEmlement?.elements?.content?.map((item) => (
                <TableRow
                  hover
                  key={item.name}
                  sx={{ "&:last-of-type td, &:last-of-type th": { border: 0 } }}
                >
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
                        {item.name}
                      </Typography>
                    </Box>
                  </TableCell>
                  <TableCell sx={{ textAlign: "center" }}>
                    {item.price}
                  </TableCell>
                  <TableCell sx={{ textAlign: "center" }}>
                    {item.inventory}
                  </TableCell>
                  <TableCell sx={{ textAlign: "center" }}>
                    <Button
                      onClick={() =>
                        navigate(`/admin/product/update/${item.id}`)
                      }
                      variant="contained"
                    >
                      Sửa
                    </Button>
                  </TableCell>
                  <TableCell sx={{ textAlign: "center" }}>
                    <Button
                      variant="contained"
                      startIcon={<DeleteIcon />}
                      color="error"
                      //onClick={() => handleDeleteProduct(item.id)}
                    >
                      XÓA
                    </Button>
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
            count={adminsEmlement?.elements?.totalPages}
            color="primary"
            className=""
            onChange={handlePaginationChange}
          />
        </div>
      </Card>
    </Box>
  );
};

export default ElementsTable;
