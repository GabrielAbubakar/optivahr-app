# Optiva HR Frontend Task Submission.
This application was bootstrapped using the React Typescript template of Vite.

## Steps to get the application running locally
1. First clone the application from the online repository to a local folder using the following command:
```bash
git clone <repository-link>
```

2. Enter into the cloned folder and open a terminal where the following command should be executed to install all of the dependencies of the project:
```node
npm install
```

3. After installation of the dependencies to get the application running locally, run the following command
```node
npm run dev
```

4. After the run command above, navigate to the localhost, [Open Localhost](http://localhost:5173) in order to see the live preview of the application.

## Challenges faced in the application
In implementing the requirements of the task on how the final application should perform and also the expectations on the features available I encountered a number of issues with the API that complicated some of the features as prescribed

- Firstly, the api in its /books route does not provide for a way to query/filter books based on most of the fields asked for (publisher, isbn, authors, end date etc), and only allowed for Quering based on the books name
- Also I had some issues with the pagination as the common standard for paginated apis was not used, however I was still able to implement some sort of pagination of the results
- 
