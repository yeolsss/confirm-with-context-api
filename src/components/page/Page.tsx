import { PropsWithChildren } from "react";

function Page({ children }: PropsWithChildren) {
  return <main className="flex w-screen flex-col gap-5">{children}</main>;
}

export default Page;
