# quiz-app-client
This is a basic full-stack quiz-app, with multiple choice questions. The client app is built with React.JS, server with Node/Express.js, database - MongoDB (Atlas)

This is a simple quiz web app to fetch questions from a proxy-server that talks with a real-time database.

The back-end REST-API is built with node.js and express.js, it has end points to fetch the QuizdData from a Mongoo Database

The back-end server is deployed over Heroku Cloud platform, the database is hosted on Atlas with AWS. 

— Client Side

The client side app is built over React.js and is bootstrapped from create-react-app. 
The app handles state management with redux and context-provider, and has structured functional components that render specific UI components when prompted.

The front-end is deployed and hosted with Github Pages.

QuizSchema = 
  ({
    questionID: {
      type: Number,
    },
    questionString: {
      type: String,
    },
    choices: {
      type: Array,
    },
    rightChoice: {
      type: String,
    },
  });
