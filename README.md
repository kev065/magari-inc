# cars-app
This car buying and selling app was built using [React](https://react.dev/) to enable people to easily browse, buy or sell their cars.

**Users can do the following with this app:**
- browse through a list cars.
- view a car's details.
- sell their preowned cars on the site, subject to approval.

### How to Use
1. Clone this repository to your local machine. 
2. Ensure you have node.js, npm and json server installed globally. 
3. Navigate to the **cars-app** directory and run the following command: `json-server --watch db.json --port 3000` to enable fetching from db.json file. 
4. Open a new terminal window and run the following command: `json-server --watch db.json --port 8000` to enable receiving the submitted info to a local .json file(db2.json)
5. Install react dependencies on your project directory by running the following command: `npm install && npm start` 
6. Your application will now run in your default browser at **port 8000** http://localhost:8000/
7. You can now test out the app by visiting it and browsing for yourself.
8. You can contribute to this project by forking it, making the necessary changes, pushing to GitHub and creating a pull request. 

### Common errors
You might get an OpenSSL error if you're using Node JS v17 and later versions. To fix this type the following commands: 
- `export NODE_OPTIONS=--openssl-legacy-provider` for macOS, Linux or Windows Git Bash.
- `set NODE_OPTIONS=--openssl-legacy-provider` for Windows Command Prompt.
- `$env:NODE_OPTIONS="--openssl-legacy-provider"` for Windows Power Shell.

### Technologies used 
- [React](https://react.dev/)

### Licence
This project is licenced under the [MIT Licence](https://github.com/kev065/cars-app/blob/main/LICENSE/).

