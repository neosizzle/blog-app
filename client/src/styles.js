import {makeStyles} from '@material-ui/core/styles'

export default makeStyles((theme) => ({ //theme is declared here


    appBar: {
      borderRadius: "1rem",
      margin: '0.5rem',
      padding : '0.5rem',
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      border : 'solid 1px silver',
      
    },
    heading: {
      color: 'rgba(0,183,255, 1)',
      fontSize : "2rem",
    },
    image: {
      marginLeft: '.2rem',
    },

      //materialui media queries
      [theme.breakpoints.between('sm' , 'md')] : {
        mainContainer : {
          flexDirection : "column-reverse"
    
        }
    
      },
  
  }));