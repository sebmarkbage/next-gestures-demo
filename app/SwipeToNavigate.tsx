"use client";

import { useRouter } from "next/navigation";
import SwipeToDismiss from "./SwipeToDismiss";

export default function SwipeToNavigate({
  href,
  children,
}: Readonly<{
  href: string;
  children: React.ReactNode;
}>) {
  const router = useRouter();
  return (
    <SwipeToDismiss
      gesture={() => (router as any).experimental_gesturePush(href)}
      action={() => router.push(href)}
    >
      {children}
    </SwipeToDismiss>
  );
}
