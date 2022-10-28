import { Center, Title, Divider,Container, Text, createStyles } from "@mantine/core";


const useStyles = createStyles((theme) => ({
  formFrame: {
    width:"50vw",
    height: "2100px",

    [theme.fn.smallerThan("md")]: {
      height:"3000px"
    },
    [theme.fn.smallerThan("xl")]:{
      width:"90vw",
      height: "2300px"
    },    
  }
}));

export default function Survey() {

  const { classes } = useStyles();
    return (
      <>
      <Center style={{paddingTop:"3rem"}}>
        <Title order={4} size={70} color="clubGreen">Reward Activity</Title>
      </Center>
      <Container style={{paddingTop:"2rem"}}>
      <Divider color="clubGreen" size={6} style={{paddingTop:"4rem"}}></Divider>
      </Container>
      <Center style={{paddingBottom:"4rem"}}>
        <Text style={{textAlign:"center", lineHeight:"2rem"}}>
            From now on, we're going to hide some codes in the videos. <br/>
            In this activity, we'll ask you to answer what code you see, and also some questions about the contents of the broadcast video.<br/>
            You will watch the broadcast video in class and start this activity after the video is done.<br/>
            The activity lasts for 8 minutes after the first valid reply.<br/>
            Good Luck!
            </Text>
      </Center>
      <Center>
        <iframe className={classes.formFrame} allowFullScreen={true} sandbox="allow-scripts allow-popups allow-forms allow-same-origin allow-popups-to-escape-sandbox allow-downloads allow-modals" frameBorder="0" aria-label="Google Forms, Broadcast Video Survey"  src="https://docs.google.com/forms/d/e/1FAIpQLSe9awGYSDWf140WUmGTYVe2qCdoqx46I9sV3Tufnis9lO0EZQ/viewform"></iframe>
      </Center>
      </>
    );
  }
  
