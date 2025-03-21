import Image, { type ImageProps } from "next/image";
import styles from "./page.module.css";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className={styles.page}>
      Hello <Button className="cursor-pointer">Hello</Button>
    </div>
  );
}
