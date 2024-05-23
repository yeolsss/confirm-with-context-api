import { PropsWithChildren } from "react";

function Row({ children }: PropsWithChildren) {
  return <div className="flex justify-center gap-5">{children}</div>;
}

export default Row;
