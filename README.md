# Chat Analyzer

A Chrome extension that uses IBM Watson's tone analyzer to analyze the tone of Facebook chats. The extension will grab the newest messages in chats, send them to a backend, which makes the connection to the analyzer to get the emotions, and show the emotions as the extension icon.

For the backend, you neeed to create an IBM cloud account and then create a Clound Foundry Service. After that, create a `credentials.json` and paste the credentials. It should look like:
```json
{
  "url": "{url, typically 'https://gateway.watsonplatform.net/tone-analyzer/api'}",
  "username": "{SERVICE username, NOT account username}",
  "password": "{SERVICE password, NOT account password}"
}
```

##TODO:
1. Context analysis: instead of single-sentence analysis, the app would collect the past few messages and analyze them together.
2. User suggestion: User can suggest changes by clicking the icon and choosing the correct emotion.