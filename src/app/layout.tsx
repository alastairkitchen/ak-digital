"use client";
import { Provider } from "@/features/chakra/provider";
import { store } from "../store";
import { Provider as ReduxProvider } from "react-redux";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <ReduxProvider store={store}>
          <Provider>{children}</Provider>
        </ReduxProvider>
      </body>
    </html>
  );
}
