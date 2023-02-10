import "../styles/globals.css";
import type { AppType } from "next/app";
import { ClerkProvider } from "@clerk/nextjs";
import type { Session } from "next-auth";
import { SessionProvider } from "next-auth/react";

import { api } from "~/utils/api";

const MyApp: AppType = ({ Component, pageProps: { ...pageProps } }) => {
  return (
    <ClerkProvider {...pageProps}>
      {/* <SessionProvider session={session}> */}
      <Component {...pageProps} />
      {/* </SessionProvider> */}
    </ClerkProvider>
  );
};
// const MyApp: AppType<{ session: Session | null }> = ({
//   Component,
//   pageProps: { ...pageProps },
// }) => {
//   return (
//     <ClerkProvider {...pageProps}>
//       {/* <SessionProvider session={session}> */}
//       <Component {...pageProps} />
//       {/* </SessionProvider> */}
//     </ClerkProvider>
//   );
// };

export default api.withTRPC(MyApp);