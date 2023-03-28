import axios from "axios";

export const getParameters = {
  serviceKey: `${import.meta.env.VITE_API_KEY}`,
  returnType: "json",
  numOfRows: "100",
  pageNo: "1",
  sidoName: "서울",
  ver: "1.0",
};

export const fetchData = async (param) => {
  const response = await axios.get(
    `${
      import.meta.env.VITE_API_DOMAIN
    }/B552584/ArpltnInforInqireSvc/getCtprvnRltmMesureDnsty`,
    { params: param }
  );
  return response.data.response.body.items;
};
