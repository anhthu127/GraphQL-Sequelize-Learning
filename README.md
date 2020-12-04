* Intro: Project using graphql, sequelize, mysql  to get nested data 
 -  ex:  a user have structure datatype like 
    + user{
      id 
      name 
      post {
         id
         title
         content
      }
   }

* Guide for build in local:
-  clone project
-  Config database in  graphqlLearning\src\database-graphql\db.js
-  Run command: 
   +  npm i 
   +  npm run start

-  Test in url : http://localhost:3000/graphql


* Test api using  POSTMAN  
- URL   "http://localhost:3000/graphql"   
- header: {
   Content-Type:application/graphql
}

- body: {
   people{
  id
  firstName
  lastName
  email
  posts{title
  content
  }
}
} 
   + Note: body in raw/text data 