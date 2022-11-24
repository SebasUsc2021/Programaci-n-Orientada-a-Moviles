type RootStackParamList = {
  Login: undefined;
  RecoverPassword: undefined;
  Register: undefined;
  Home: undefined;
  Teacher: {
    id: string;
  };
  CodeRecoverPassword: { email: string };
  NewRecoverPassword: { email: string };
};

export { RootStackParamList };
