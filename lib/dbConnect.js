"use client"
import { useEffect, useState } from "react";

export default function MyComponent() {
  const [now, setNow] = useState<number | null>(null);

  useEffect(() => {
    setNow(Date.now());
  }, []);

  return <div>{now}</div>;
}