type CustomerTable = {
    ID: string | number;
    nameCustomer: string;
    nameStore: string;
    guestsOfNumber: string;
    checkinTime: Date;
    waitConfirmation: string;
    confirmation: React.ReactNode;
    cancel: React.ReactNode;
  };