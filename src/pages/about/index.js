import { Grid, Button, Chip, Stack } from "@mui/material";
import { useRouter } from "next/router";

import PageDescription from "../components/PageDescription";

export default function About({ skills }) {
    const router = useRouter();

    return (
        <section>
            <PageDescription title="About me" description="Here i explain things about me."
            />
            
            <Grid container spacing={2}>
                <Grid item md={6}>
                    <h2>Get to know me!</h2>
                    <p>
                    Hello, I am a student at ITT University studying Biomedical Engineering. 
                    I like the world of technology and science.
                    </p>
                    <Button 
                        variant="contained"
                        size="large"
                        onClick={() => router.push("/contact")}
                    >
                    Contact
                    </Button>
                </Grid>
                <Grid item md={6}>
                    <h2>My Skills</h2>
                    <Stack direction="row" spacing={2} useFlexGap flexWrap="wrap">
                    {skills.map((skill) => (
                        <Chip key={skill} label={skill} />
                    ))}
                    </Stack>
                </Grid>
            </Grid>
        </section>

    );
}

export async function getStaticProps() {
    let skills = [];

    try {
        const response = await fetch(
            "https://mi-skills-api-default-rtdb.firebaseio.com/skills.json"
        );
        const data = await response.json();
        skills = data.split(",");
    } catch (error) {
        console.error(error);
    }

    return {
        props: {
            skills,
        },
        revalidate: 30, //seconds
    };
}
