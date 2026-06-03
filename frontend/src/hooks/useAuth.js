import { getUser } from "../utils/auth";

const useAuth = () => {
  return getUser();
};

export default useAuth;