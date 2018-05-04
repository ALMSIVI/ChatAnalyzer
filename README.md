# Chat Analyzer
A Chrome extension that uses IBM Watson's tone analyzer to analyze the tone of Facebook chats. The extension will grab the newest messages in chats, send them to a backend, which makes the connection to the analyzer to get the emotions, and show the emotions as the extension icon.

## Frontend/Extension (WIP)

## Backend
The backend is a Node.js server used to connect to IBM Watson API. A sample site is built at <https://chatanalyzer.herokuapp.com>. The example shown on the website is from the Watson API reference; you are free to enter your own messages and see the result.

To run the server on your local machine, you neeed to first sign up for an IBM cloud account and then create a Clound Foundry Service. You can follow the instructions at <https://www.ibm.com/watson/services/tone-analyzer/>. After that, open your service webpage and copy your entire credentials.

On your local machine, Create a `credentials.json` in `Backend/` and paste the credentials. It should look like:
```json
{
  "url": "{url, typically 'https://gateway.watsonplatform.net/tone-analyzer/api'}",
  "username": "{SERVICE username, NOT account username}",
  "password": "{SERVICE password, NOT account password}"
}
```

## TODO
1. Context analysis: instead of single-sentence analysis, the app would collect the past few messages and analyze them together.
2. User suggestion: User can suggest changes by clicking the icon and choosing the correct emotion.