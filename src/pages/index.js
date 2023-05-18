import { useRouter } from "next/router";
import styles from "../styles/Home.module.css";
import { Button } from "@mui/material";

export default function Home({ name, summary }) {
  const router = useRouter();

  return (
    <section className={styles.Home}>
      <h1 className={styles.Name}>{name}</h1>
      <div className={styles.Summary}>{summary}</div>
      <div>
        <Button 
          variant="contained"
          size="large"
          onClick={() => router.push("/projects")}
        >
          Projects
        </Button>
      </div>
    </section>
  );
}

export async function getStaticProps() {
  console.log("Running in the server");
  //Get your date from an API
  return {
    props: {
      name: "Vicente",
      summary:
      "I am a student from Biomedical Engineering cursing a Bootcamp."
    },
  };
}