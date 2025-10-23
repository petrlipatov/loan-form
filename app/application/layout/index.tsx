import React from "react";
import { Links, Meta, Scripts, ScrollRestoration } from "react-router";
import { Navigation } from "~/widgets/navigation";

interface Props {
  children: React.ReactNode;
}

export function Layout({ children }: Props) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <Navigation />
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}
