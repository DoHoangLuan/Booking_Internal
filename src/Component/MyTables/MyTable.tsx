import {
  Box,
  TableContainer,
  TableHead,
  Table,
  TableRow,
  TableCell,
  TableBody,
} from "@mui/material";



type propsDataBookingTable = {
  dataBooking: CustomerTable[];
};

const MyTable = ({ dataBooking }: propsDataBookingTable) => {
  return (
    <Box>
      
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Tên khách hàng </TableCell>
              <TableCell>Tên cửa hàng</TableCell>
              <TableCell>Số lượng khách đặt bàn</TableCell>
              <TableCell>Thời gian nhận bàn</TableCell>
              <TableCell>Trạng thái</TableCell>
              <TableCell>Xác nhận đặt bàn</TableCell>
              <TableCell>Huỷ đặt bàn</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {dataBooking.map((data) => {
              return (
                <TableRow
                  key={data.ID}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">{data.ID}</TableCell>
                  <TableCell>{data.nameCustomer}</TableCell>
                  <TableCell>{data.nameStore}</TableCell>
                  <TableCell >{data.guestsOfNumber}</TableCell>
                  <TableCell>{data.checkinTime.getDate()}</TableCell>
                  <TableCell>{data.waitConfirmation}</TableCell> 
                  <TableCell>{data.confirmation}</TableCell>
                  <TableCell>{data.cancel}</TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default MyTable;
