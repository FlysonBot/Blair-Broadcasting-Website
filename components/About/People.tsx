import { createStyles, Grid } from "@mantine/core";
import { UserInfoAction } from "./UserInfoAction";

const mockdata = [
    {
      title: 'Founder of club (+ a rando image above)',
      image:
        'https://images.unsplash.com/photo-1527004013197-933c4bb611b3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80',
      job: 'Founder, Interviewer, etc.',
      contact: "so0247ha0525@pusd.us"
    },
    {
      title: 'Flyson Lin  (+ a rando image above)',
      image:
        'https://images.unsplash.com/photo-1448375240586-882707db888b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80',
      job: 'Original Website Designer',
      contact: "li7155zi0517@pusd.us"
    },
    {
      title: 'Eduardo A. Maroto Campos (ultracodez)',
      image:
        'https://media.istockphoto.com/photos/hacker-dark-face-using-laptop-picture-id1133604495?k=20&m=1133604495&s=612x612&w=0&h=QX5zvMG1qvfiz10hE5bSUXMj4eRMRTZF4qg3EIr-ffo=',
      job: 'Experienced Video Editor & Coder',
      contact: "eduardomarotocampos@outlook.com"
    },
    {
      title: 'Member Example (+ Placeholder Skeleton)',
      image:'',
      job: 'N/A',
      contact: "TMP"
    },
    {title:"RandomUser64",image:"", job:"N/A", contact:"RandomUser64@gmail.com"}
  ];


  const useStyles = createStyles((theme) => ({
    rootish: {
        paddingLeft:"2rem",
        paddingRight:"2rem"
      
    }
  }));
export function PeopleGroup() {

  const { classes } = useStyles();
    return (<><Grid className={classes.rootish} grow>{mockdata.map((mockItem)=>{
        return (
        <Grid.Col  key={mockItem.title} span={4}><UserInfoAction name={mockItem.title} avatar={mockItem.image} email={mockItem.contact} job={mockItem.job}/></Grid.Col>)
    })}</Grid></>);
  }