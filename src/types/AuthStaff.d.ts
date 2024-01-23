export interface Staff {
  email: string;
  password: string;
}
export interface RegisterStaff {
  email: string;
  staffname: string;
  password: string;
}

export interface RootState {
  authStaff: {
    login: {
      currentStaff: {
        email: string;
        staffname: string;
        id: string;
        role:string
        accessToken:string
      };
    };
  };
}
