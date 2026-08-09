import LogoIcon from "../LogoIcon";
import styles from "./OverlayLoader.module.scss";

const OverlayLoader = () => {
  return (
    <div className={styles.overlay}>
      <LogoIcon color="white"/>
      <p>Dahab Family Freediving</p>
    </div>
  );
};

export default OverlayLoader;
