"use client"
import styles from "./page.module.css"

import { useState, useEffect } from "react"

function ProgressBar() {

    const [progress, setProgress] = useState(0)

    useEffect(() => {
        const interval = setInterval(() => {
          setProgress((prevProgress) => (prevProgress >= 100 ? 0 : prevProgress + 10));
        }, 600);
    
        return () => clearInterval(interval); // Limpiar el intervalo al desmontar el componente
      }, []);
    

  return (
    <div className={styles.loadingContainer}>
        <div className={styles.loadingBar} style={{width: `${progress}%`}}></div>
    </div>
  )
}

export default ProgressBar