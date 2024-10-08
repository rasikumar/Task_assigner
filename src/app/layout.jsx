import { ThemeProvider } from "@/components/providers/ThemeProvider";
import "@/styles/globals.css";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
// import Header from '@/components/Header'

export const metadata = {
  title: "Task_assigner",
  description: "Generated by Max",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {/* <Header/> */}
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <ToastContainer />
          <main className="bg-white dark:bg-foreground">{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
}
