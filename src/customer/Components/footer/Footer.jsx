import { Grid, Link, Typography } from "@mui/material";

const Footer = () => {
  return (
    <Grid
      className=" text-white mt-10 text-center"
      container
      color={"white"}
      sx={{ bgcolor: "#A94D63", color: "white", py: 3 }}
    >
      <Grid item xs={12} sm={6} md={3}>
        <Typography className="pb-5" variant="h6" gutterBottom>
          SPRING GARDEN
        </Typography>
        <Typography variant="body2" component="p" gutterBottom>
          Blog
        </Typography>
        <Typography variant="body2" component="p" gutterBottom>
          Hotline: 0822 223 471
        </Typography>
        <Typography variant="body2" component="p" gutterBottom>
          Địa chỉ: 828 Sư Vạn Hạnh,
        </Typography>
        <Typography variant="body2" component="p" gutterBottom>
          Phường 13, Quận 10, TP. HCM
        </Typography>
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        <Typography className="pb-5" variant="h6" gutterBottom>
          CHĂM SÓC KHÁCH HÀNG
        </Typography>
        <Typography variant="body2" component="p" gutterBottom>
          Câu hỏi thường gặp
        </Typography>
        <Typography variant="body2" component="p" gutterBottom>
          Hình thức thanh toán
        </Typography>
        <Typography variant="body2" component="p" gutterBottom>
          Xử lý khiếu nại
        </Typography>
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        <Typography className="pb-5" variant="h6" gutterBottom>
          THEO DÕI
        </Typography>
        <Typography variant="body2" component="p" gutterBottom>
          Facebook
        </Typography>
        <Typography variant="body2" component="p" gutterBottom>
          Instagram
        </Typography>
        <Typography variant="body2" component="p" gutterBottom>
          Tiktok
        </Typography>
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        <Typography className="pb-5" variant="h6" gutterBottom>
          CHÍNH SÁCH
        </Typography>
        <Typography variant="body2" component="p" gutterBottom>
          Chính sách hoàn tiền
        </Typography>
        <Typography variant="body2" component="p" gutterBottom>
          Chính sách giao hàng
        </Typography>
        <Typography variant="body2" component="p" gutterBottom>
          Chính sách bảo mật
        </Typography>
        <Typography variant="body2" component="p" gutterBottom>
          Quy định & Chính sách
        </Typography>
      </Grid>
      <Grid className="pt-10" item xs={12}>
        <Typography variant="body2" component="p" align="center">
          &copy; 2023 My Company. All rights reserved.
        </Typography>
        <Typography variant="body2" component="p" align="center">
          Made with love by Me.
        </Typography>
        <Typography variant="body2" component="p" align="center">
          Icons made by{" "}
          <Link
            href="https://www.freepik.com"
            color="inherit"
            underline="always"
          >
            Freepik
          </Link>{" "}
          from{" "}
          <Link
            href="https://www.flaticon.com/"
            color="inherit"
            underline="always"
          >
            www.flaticon.com
          </Link>
        </Typography>
      </Grid>
    </Grid>
  );
};

export default Footer;
