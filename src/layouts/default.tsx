import CursorFollow from "@/components/cursor-follow";
// import { Navbar } from "@/components/navbar";

export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative flex flex-col h-screen">
      {/* <Navbar /> */}
      <CursorFollow />
      <main className="flex-grow">
        {children}
      </main>
    </div>
  );
}
