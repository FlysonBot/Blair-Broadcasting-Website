import { Center, createStyles } from "@mantine/core";


const useStyles = createStyles((theme) => ({
  formFrame: {
    width:"50vw",
    [theme.fn.smallerThan("xl")]:{
      width:"90vw",
    }
  }
}));

export default function Survey() {

  const { classes } = useStyles();

    return (
      <>
      <Center>
        <iframe className={classes.formFrame} style={{ height: "1600px"}} allowFullScreen={true} sandbox="allow-scripts allow-popups allow-forms allow-same-origin allow-popups-to-escape-sandbox allow-downloads allow-modals" frameBorder="0" aria-label="Google Forms, Broadcast Video Survey"  src="https://docs.google.com/forms/d/e/1FAIpQLSfxDrqF6ZMJl7IgMRMzFcH9X0iBsH2nAWrd75xKTi8gmbIqNw/viewform?embedded=true"></iframe>
      </Center>
      </>
    );
  }
  