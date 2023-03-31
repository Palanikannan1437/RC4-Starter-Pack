import "../src/styles/globals.css";
// include styles from the ui package
import "@palanikannan1437/rc4-ui/styles.css";
import "@palanikannan1437/rc4community-navbar/styles.css";

import { fetchNavData } from "@palanikannan1437/rc4community-navbar/core";
import NavigationMenuDemo from "./nav";

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const navData = await fetchNavData();
  console.log(navData);
  const navItems = navData
    ? [
        { show: true, item: navData.variant1.data[0] },
        { show: true, item: navData.variant2.data[0] },
        { show: true, item: navData.variant3.data[0] },
      ]
    : [];
  return (
    <html lang="en" className="bg-zinc-900">
      <body>
        <NavigationMenuDemo navData={navData} navItems={navItems} />
        <div className="flex min-h-screen flex-col items-center justify-center py-2">
          <main className="mx-auto w-auto px-4 pt-16 pb-8 sm:pt-24 lg:px-8">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
