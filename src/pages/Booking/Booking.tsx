import MyButton from "../../Component/MyButtons/MyButtons";
import MyTable from "../../Component/MyTables/MyTable";

const Booking = () => {
  const dataTableBooking: CustomerTable[] = [
    {
      ID: 1,
      nameCustomer: "Đỗ Hoàng Luân",
      nameStore: "OLA",
      guestsOfNumber: "4",
      checkinTime: new Date(),
      waitConfirmation: "Chờ xác nhận",
      confirmation: <MyButton>Xác nhận đơn</MyButton>,
      cancel: <MyButton>Huỷ đơn</MyButton>,
    },
    {
      ID: 2,
      nameCustomer: "Đỗ Hoàng B",
      nameStore: "Ume",
      guestsOfNumber: "5",
      checkinTime: new Date(),
      waitConfirmation: "Chờ xác nhận",
      confirmation: <MyButton>Xác nhận đơn</MyButton>,
      cancel: <MyButton>Huỷ đơn</MyButton>,
    },
  ];
  return (
    <div>
      <MyTable dataBooking={dataTableBooking} />
    </div>
  );
};

export default Booking;
