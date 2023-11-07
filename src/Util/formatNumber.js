export function formatNumber(number) {
  // Sử dụng toLocaleString để định dạng số và thêm dấu phân cách
  return number?.toLocaleString("en-US");
}
