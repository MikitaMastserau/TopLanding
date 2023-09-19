import { Header } from "../Header";
import { Main } from "../Main";
import { Questions } from "../Questions";
import { Works } from "../Works";
import { Tariffs } from "../Tariffs";
import { Order } from "../Order";
import { Footer } from "../Footer";

export const HomeLayout = () => {
   return (
      <>
         <Header />
         <Main />
         <Questions />
         <Works />
         <Tariffs />
         <Order />
         <Footer />
      </>
   )
};