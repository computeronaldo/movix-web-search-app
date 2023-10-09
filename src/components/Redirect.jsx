import { useNavigate } from "react-router-dom";

const Redirect = () => {
  const navigate = useNavigate();
  return navigate("/");
};

export default Redirect;
