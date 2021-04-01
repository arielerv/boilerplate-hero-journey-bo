#Hero's Journey</h2>
The project is a boilerplate for React and is created with create-react-app.<br/>
The data flow is in <a href=https://github.com/reduxjs/react-redux>redux</a> and <a href=https://github.com/redux-saga/redux-saga>redux-saga</a>.<br/>

For the routes and navigation, use <a href=https://github.com/supasate/connected-react-router>connected-react-router</a>, I think it is convenient to have the user activity in the redux.
It seeks to have a simple and functional code, for that reason <a href=https://github.com/jkeam/reduxsauce>reduxsauce</a> was used.<br/>

For the handling styles use <a href=https://styled-components.com/docs>styled-components</a>.
Also has already set a code formatter <a href=https://github.com/prettier/prettier>prettier</a> and husky for the pre-commit based on <a href=https://github.com/conventional-changelog/conventional-changelog>conventional changelog</a>.

##Environment Variables
Create a ".env" file with:
```
  REACT_APP_ENDPOINT=http://localhost:5051
  REACT_APP_VERSION=0.0.1
  REACT_APP_TYPE_CONFIRM=email
  GENERATE_SOURCEMAP=false
  INLINE_RUNTIME_CHUNK=false
  PORT=5050
```

Change `REACT_APP_TYPE_CONFIRM` to "" if you don't want or don't have an established email sender.
Note that you will not be able to see `forgot password`.<br/>
*This also has to be set in the backend.<br/><br/>

After clone this project you should install the npm packages and bower packages.
```
  npm install --force
```

To run the app you should use this command.
```
  npm start
```

Enjoy.<br/>
AE
