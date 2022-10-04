import styles from "../styles/Home.module.css";
import HomePage from "./HomePage";
import { ChakraProvider } from "@chakra-ui/react";
import { ToastContainer, toast, Slide } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Home() {
  toast.info("Wecome to SerailAtEase. Loading first time takes time", {
    autoClose: 3000,
    toastId: "welcome",
  });
  return (
    <div className={styles.container}>
      <ToastContainer limit={1} transition={Slide} height={100} />
      <ChakraProvider>
        <HomePage />
      </ChakraProvider>
    </div>
  );
}
