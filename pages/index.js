import styles from "../styles/Home.module.css";
import HomePage from "./HomePage";
import { ChakraProvider } from "@chakra-ui/react";
import { ToastContainer,Slide } from "react-toastify";

export default function Home() {
  return (
    <div className={styles.container}>
      <ToastContainer limit={1} transition={Slide} height={100} />
      <ChakraProvider>
        <HomePage />
      </ChakraProvider>
    </div>
  );
}
