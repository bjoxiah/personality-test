
### How to Run
This application is a MERN stack app with a Node JS backend and a React frontend.

To start the Node server run
````ts
npm run dev
````
and add the questions via postman or any api client.
Valid payload 

````ts
{  
    "question": "You are taking part in a guided tour of a museum. You:",
    "answers": [
      {
        "option": "A",
        "value": "Are a bit too far towards the back so don’t really hear what the guide is saying",
        "score": {
          "introvert": 0,
          "extrovert": 10
        }
      },
      {
        "option": "B",
        "value": "Follow the group without question",
        "score": {
          "introvert": 10,
          "extrovert": 0
        }
      },
      {
        "option": "C",
        "value": "Make sure that everyone is able to hear properly",
        "score": {
          "introvert": 0,
          "extrovert": 10
        }
      },
      {
        "option": "D",
        "value": "Are right up the front, adding your own comments in a loud voice",
        "score": {
          "introvert": 10,
          "extrovert": 0
        }
      }
    ]
}
````

````ts
POST / api / question
````
and to start the React client app cd into the client directory

````ts
cd client
````

and run the code 

````ts
npm run start
````

The React app is connected to the backend app via a proxy set on the client's package.json file.


