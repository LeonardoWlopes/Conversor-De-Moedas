import { createContext, useEffect, useState } from "react";
import axios from "axios";
import IUsdBr from "../Interfaces/UsdBrl";

interface IValoresContext {
  usdBrl: IUsdBr;
}

const ValoresContext = createContext({} as IValoresContext);

export const ValoresProvider: React.FC = ({ children }) => {
  const [usdBrl, setUsdBrl] = useState<IUsdBr>({} as IUsdBr);

  console.log(usdBrl);

  useEffect(() => {
    axios.get("https://economia.awesomeapi.com.br/last/USD-BRL").then((res) => {
      //console.log(res.data);
      setUsdBrl(res.data.USDBRL);
    });
  }, []);

  return (
    <ValoresContext.Provider value={{ usdBrl }}>
      {children}
    </ValoresContext.Provider>
  );
};

export default ValoresContext;
