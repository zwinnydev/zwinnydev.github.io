import React, { PropsWithChildren } from "react";
import SiteHeader from "./site-header";
import SiteFooter from "./site-footer";

export default function App({ children }: PropsWithChildren) {
  return (
    <div className="flex min-h-dvh flex-col space-y-6">
      <SiteHeader />
      <main className="container flex-1">{children}</main>
      <SiteFooter />
    </div>
  );
}
