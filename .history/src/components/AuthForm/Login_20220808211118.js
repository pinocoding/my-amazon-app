import React, { useContext } from "react";
import { useTranslation } from "react-i18next";

import { Link } from "react-router-dom";
import { DataContext } from "../DataLayer/Datalayer";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import "../AuthForm/AuthStyle.css";

function Login() {
  const { t } = useTranslation(["common"]);
  const context = useContext(DataContext);
  const isDark = context.isDark;
  return (
    <div className={`login ${isDark ? "login-dark" : "login-light"}`}>
      <Link to="/">
        <img
          className="login__logo"
          alt="#"
          // src="https://help.pacisoft.com/wp-content/uploads/2017/11/amazon-logo-preview.png"
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAUAAAACeCAMAAAB0DSNzAAAA81BMVEUJBQX///8AAAD3mzQFAACsrKw4NzeVlJT8/Pz08/OAgIDe3t5SUFBubW3FxcXs7OxiYWH/ojcuLS0AAAp2dXWJiIhoZ2cAAAXk5OSenZ3V1dUfHR3Ozc2Pjo4oJia8u7taWVlCQUFLSkq9vLyioaGysrIVExP/pDXrmDhdQB0aGBhFREQRDg4lJCQzMjI+PDxDLxgjHBU0JxrgkTaGXCqgbiypcCeXaDFtSiJLNR27fCz8oz6tcTLOhzaZZCqcayqMXBt6UisADBAwIxgXGRLCfi9QORrnljuAViZkRx3+nDm6fDcvJxgACwSjbCU/MBZAMiKjQsaAAAANO0lEQVR4nO2ceV8iORPHsWjkPppDEFFBORUPxHOAmR1dPPeZnff/ap70la5KpxGBdj64+f01pptO8u1KUlVJTyikpKSkpKSkpKSkpKSkpKSkpKSkpKSkpKSkpKSkpKSkpKSkpKSkpKSkpKSktI7SwJT2iXXBZ9T1KTJ7kz9gOp23Y+BIe7/U+8Od49RBqtH2qUsDzV+y213N0fK5WvkRsQcdlzKV2IapWGU/seNtiNBGgM3SYbVSzWzX0b0AJ4lWtZLMbOf8GgdwVGwl43Zd2Vr02HsnKwFfaWLTWNlBqVWrVJK1SOJUwhD/2Pr7IJox255aBULW1t3KhqBaXWgHtOJZS5UDdgUaVX5vdstuhQbHNV4aj8qsASBXE+vKlsS6QtmNmK82WuRuDY6aWfS0SkmEAptJu+nZlnEJ6m53s4mlpxGGLy52yVB1Dz8ZTt0rhxCCXXKv2S7WlSYFcyC2TYNUUlZXPE36DGnZTa7wzQDbnqcJLwQi7rUzEFtZDS1HEPakXWKK5dCTYdO9sA9CG4wig05GfMQWbZuGu0IVIVDmBwhnWckN1SPy8glAaAk3Z5ciCMcx/4YighRg0XPrLrNKsWVmewk/z+h1dYjf1twAoS6/I76JH0cAljw3V5eYByE/s6XuKKYAJdBPJVTZhEQMawY/8xV8GKAfPzZ8EEEMcPNIcnNpYRPUQDYAXNWkAFviADaUAelMWkT98ExWVCduZXMChLz/8Im78yAGeHIovXdRE/TMZaIaTiswwEMpKvmjqtJXIFXkowA18Ju+DdWkAFPSe3MLmiC0hd7u71dpSUQG8COKtfkT6ACuZCI1aj+uHbwDMGs/UjRp4b1y48cA5bPI/qIASQtKlqe5j8uSywLcqDu93cOlh3tmZQly6zGv7GTGysbJwBG+q5Iy/GnMJ8ZHuu/az3+8KEDkP8fzjpeOq+MG5AEYT1ZkvYxnhVLHDiCKCm1HTYMDfGvCHXSQx2oTP98Zm6ShNcN71qiPEpXdaDayVqPWGlvMkyFGkXIeoZE19lQOMJszDCi6IaiVZ6U50jhncQU0ObihBOnwttsLGskRALG+bYAh1E5nydCITdgmKAIseo3/dDGAyPFwp9wQ4EGckgKMm53QhFYYLTP7jt+AQwUXIu8I+yEteS8EX8Vxzknl3BEhpWmQAbR8U+p1eWKm+QCeSVogDLacFGDaKSVjy1lxSJy37bXAJKoLL2OH0l4A9Y/4fI9NGnmGO+hF1WQAnZ6SJXxrIYBssk4novu1ZHwji2If8m62ZACzfHomg3hHtl407UINcolSq1Zlc2QRD1V0a0YOkHhufKkmlVRR6zEXe1qPSB+AX3NxMYA8z0OyV+8D5KZCRhdy+ZAV8IlNcytz6yITrhSgEODwsUZcHTR7ElqWC0CK+DxBFrBFAfJuaOjf7wPkURecyJoWwoNuW2waSudpdL6UASRDEj+NUEkjgDjWbXoBcp8ZcFCXWA6g3TFL7fyupD4CcMu1KlQadTuHAkQPQFwX7G3OBijkH5IojYAvNBDAHCqveQFy+yer+LIAzQ6dbe22MknBj5MCzEkBJqQAo56mGXXl64lIppql3pgEoJA7cb0NGsWj1CU0UHncA9ANdzQ8TpYDyDpU365KA1w5wLoUYHEegJqxFZCRpzC8ALGfsEFdBRKG4AQhnlWsCxhgZfUAmTk05fB8AaakANNzAGQOrH8CwANQyBYgX1XIw/kCNE0TA0wiG14NQNAkedCAADJ8/q9KApAmi5wQxLrUQFdwOgr6uIpG4AChPqtLiwJEz0QAYXZG1QMQaO6JOLvkWpx4EbhDB0EDlKaRAwIIO7OztyJAoNlemnIiHqg/wGLAAD2Jt2yt1YziMb06gCCmrOPVw2YTr7IiQJJYywo7bdgCY38KoJhiieZN5wxTXSFAmqttpSxP0NcPFF5uSqBLEmG+AFMBAyR92rU37smwXhlAmrmp7YC9lewHkOZ0eEjNL5/iq74Ag11EiNPOUDlRdhAAab/2nfE4A6BfCGJfJm6Mux8lxH4nwQLEBogm+yAAkodibxYVY4BCqjHvdRHxC8F7mLMd6VUChD6qKYZ2Ad/NBy4CEBsUillwRI8ACvvVkv4RHxufAGig8qwnlFspwC2fxuOtphUBpPsEbfdOnNXDbSAhSEZyEo2kCXGMl/M8MTCAOEmB/V18xGVFAElQi/bAfF6isGFZSiRy9T16+o+kGdBmABk/0WAB4lGVkD+Yly8LEIPC+eOmrByONySyzy2C5B68SYAtczNYgNjS3EFAPaxIAABxd3GwEecnDvxDlmQJnC1RfJPmtgjVHbfn388AiNLJ5JCas/2xSoDoCAIu5mkycbNPUBM8duUCIFNgJGCAeAi7+0TCgSd7ElwlwA1+WkEwtYxkxZYoZuZVyRjOcuPFrtlpwABJrOmcl9gRThbYTVsWIEms1JxDEOKJTHsTyHPgWJC9uFI31gps8NIiO8KwUoA0XW6eNYC657yGNbiXBRgiz4xYuy/e09Lm6HznzJ2zjFOrtk72kJPHB0EDFI67ZIrpkmzwmHm4pR1palWV3XRxX3K2JvMBgEIon9zejZBK3M3XwEK59xqKmrs0wPdOItoyTmjNDbAx6yY3gR0cQM/hIKkyKwE4+ywx73X+AwBnd8AN74IDKD+Vy2rBDctYAfnS6Sy/rZc0PmTV8AzhWLaSrCUrZLfVASj5LsBTb5AA/U6CJgHNLo7XtTRAn7eVQ3mapHVCxwEYSzaLm87xk/5ZMeIEyDwW9N9lwfv5Qab0ZWPACN25M5NYjSMdCol7vJbiZ+B67hk7TLN+Xi3uoByCdZbhJFElABnBfclTjTUZfx0Q5KaS96sJ89sn229zv7Uh3ZcD3JoNMASnnrnt0DpQaFlWhIe5zKwism/eDGvcbJH9JQ0S3sW8Qo/74dlj9duaZ2QQxFr2OTczIIm7Z07IQT50QBIxcXctsH+Bv3OAJulste58t5jccFxh8+9+Ys/3CzaAfJF+F3YiGGF2V/z0DnmHGQQQOT2LHtM3G3S2bRzaM2brw2Kf1w2NagZ/LQcHUUfo/cIpL8VJzR1eSs6NsZA/kTHrildq0YZbF7SSaVzXzA8APZlB2NnlB1OymbTnA0wNik5zSugwNOzxVi54vtJtLrTb7T7Nt4VA6AY6s7xgqfNQVplwSfNDhs9Kl2f24CyX3tpK5T2JV+EpmvAzaSs/Ls2b8Q1Mc9dl3Fj49+Xy6vr6+tfN7d39rI5qEkD/bTF4L7+GYd1VeHjTX9pU/oBWYOCLVHr+bcSYEb3qo4v1IwjjyflnIyzD3aQTlkj/vnYAy/1OuPPtaMYMHkCdhTcpPgbweu0AhuAHG0j6uPCJCGGiG3NfR9dH4VE4PNL5WH5dQ4AhuGTmoI++lz8NIVwPp+O/fp4P7u8t/2Xwc2Ih1H+tIcAQ9DqvJsJPs0Lu+Wn87+8mQf1yHQGG4KJrNF8P/wj9qf9qCI5GBsBOby0BhqAwfDUNIDx++GRf1TZ6+NsEqA8+czFboQDG9iSkTx/Ln2aGLLxoW75z2QLYXU8DNAS3jivRGV62PwUhmwNfpqOROe3BufkCp+sLMASDieNM6KO3u6DNkD1/8P1Jd4Yt3Jr/fF5jgMwgrlx/rDO8uQguxmNDt3A7cWrrGwDNKUQ/WmeArBd3T250qo8ml4MgGBo5mJe3sB2L6PqLOYSHxh+T9eZnLIlX+isKrPTh5e+ZibqP18CWjZe3Ljd1fWimD+AhvPYj2BSL8oc4RfLKGI57/dXk4di0BxfPE5yE0X/YSf9ns6ywpk4MFsBzl2aZWMQ6vTkvLGeJRtzxcHs91HEWwTA/e09w8mrSXFEn/qygPcbj2IbYnX7viYn6OZ9nTHr//BwPOzT/p4cv+TbdwCgY9b+AARoykp2SdJORMn67eRyU39nA4LJvfLi9mnZ1MXka1sf37i6fMYI765cL9BXA3UTssA1RD3cn48vexX3Z3QxCMDVUfH9+e3k9CXvZmQHPA3oH5hrc/QozIBfA46QjDmS3+x199DSZji+fe4/nF/+7L3MV+oO73u3z5a/p5Mnc75A/YPov2R/8baQk1zSP4CsDoU//kT0yliN91OUys6O+4Kxfdb4Jewjw/ZWN6C/GL2Qg/D0Oz0b4cXVGv/4RFqJygVGdfMkNS7Z83jz5bF8sIuZV/rz3rD9w29GHX2oCRGJrwt3baDVmqHfHF7LlGyadSeHrDWAugPvbKVs2lqPXGb31fDI80Lspf2F+IdMMC7fT0cIMdf3p+nGGC/5fOLDBGJYfr4Yzl1c5Oz08uQwwM7ZOAmMwj4ejzpwU9U6HBYBGalbRc2TGtefP48mowzDqr69hqbNteNrD6Y/eYBUny76czINmhb/vnq++TYZP3ZGONeoOJ5Prm97vwpwB839VPOYttAe/7x57hh7vHgb9gjrH90GV3fQBzSsoKSkpKSkpKSkpKSkpKSkpKSkpKSkpKSkpKSkpKSkpKSkpKSkpKSkpKSkpKSkpKSkpfVD/B5Nu/8ZXS/LZAAAAAElFTkSuQmCC
        />
      </Link>
      <div className="login__container">
        <div className="login__containertop">
          <h1>{t("Sign-In")}</h1>
          <form className="login__form">
            <h5>{t("Email or mobile phone number")}</h5>
            <input
              className="login__input"
              type="email"
              value={context.email}
              onChange={(e) => context.setEmail(e.target.value)}
            />
            <Link to="/SignIn">
              <p className="login__button">
                <button>{t("Continue")}</button>
              </p>
            </Link>

            <p className="login__text">
              {t("By continuing, you agree to Amazons")}
            </p>
            <p className="login__help">
              <ArrowRightIcon /> <a href="/#">{t("Need help ?")}</a>
            </p>
          </form>
        </div>

        <div className="login__newtoamazone">
          <h5>{t("New to Amazone ?")}</h5>
        </div>

        <button className="login__buttontwo">
          <Link
            style={{ color: "black", textDecoration: "none" }}
            to="/CreateAccount"
          >
            {t("Create your Amazon account")}
          </Link>
        </button>

        <ul className="login__ect">
          <li>
            <a href="/#">{t("Conditions of Use")}</a>
          </li>
          <li>
            <a href="/#">{t("Privacy Notice")}</a>
          </li>
          <li>
            <a href="/#">Help</a>
          </li>
        </ul>
        <span>© 1996-2022, Amazon.com, Inc. or its affiliates</span>
      </div>
    </div>
  );
}

export default Login;
