import http from "../http-common";

const getAll = () => {
  return http.get("http://localhost:8080/endpoint/detail");
};



  const travelService = {
    getAll
  };
  
  export default travelService;
  