
import Marquee from "react-fast-marquee";
import styles from "./Logos.module.css";
import { useTheme } from "@/components/theme-provider";

export const Logos = () => {
  const { theme } = useTheme(); 
  return (
    <div className={styles.con}>
      <Marquee direction="left" speed={30} pauseOnHover={true}>
        {[
          "/avast.svg",
          "/gd.svg",
          "/tef.svg",
          "/lobeco.svg",
          "/ssk.svg",
          "/bau.svg",
          "/hg.svg",
          "/cp.svg",
        ].map((imageSrc, index) => (
          <div key={index} className={styles.imageWrapper}>
            <img
              width={100}
              height={100}
              alt={`Logo ${index}`}
              src={imageSrc}
              className={theme === "dark" ? "dark:invert" : ""}
            />
          </div>
        ))}
      </Marquee>
    </div>
  );
};
