import { Nunito } from "next/font/google";
import "./globals.css";
import { Inter } from "next/font/google";
import Navbar from "./components/navbar/Navbar";
import ClientOnly from "./components/ClientOnly";
import Modal from "./components/modals/Modal";
import RegisterModal from "./components/modals/RegisterModal";
import ToasterProvider from "./providers/ToasterProvider";
import LoginModal from "./components/modals/LoginModal";
import getCurrentUser from "./actions/getCurrentUser";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "AirBnB",
  description: "Airbnb Clone",
};
const font = Nunito({
  subsets: ["latin"],
});
export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const currentUser = await getCurrentUser();
  return (
    <html lang="en">
      <body className={font.className}>
        <ClientOnly>
          <ToasterProvider></ToasterProvider>
          <LoginModal></LoginModal>
          <RegisterModal></RegisterModal>
          <Navbar currentUser={currentUser}></Navbar>
        </ClientOnly>
        {children}
      </body>
    </html>
  );
}
