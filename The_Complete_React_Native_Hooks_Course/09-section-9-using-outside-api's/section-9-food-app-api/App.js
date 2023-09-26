import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import SearchScreen from './src/screens/SearchScreen';

// To start the project with navigation library --> Then, run npm install --legacy-peer-deps and then npm start.
const navigator = createStackNavigator(
  {
    Search: SearchScreen,
  },
  {
    initialRouteName: 'Search',
    defaultNavigationOptions: {
      title: 'Business UseEffect Search',
    },
  }
);

export default createAppContainer(navigator);

/* NOTE :
For networking, we can use this 2 method to fetch data from api.
1) Fetch --> build in funtion in react native. 
2) axios --> a library, to use this library run this command : npm install axios
*/

/* 
NOTE : This project hide the yelp.js file.
To see all hiden files in Mac using command + shift + . | gitignore might be hidden file.
To Add Gitignore file and to ignore files before pushing them to GitHub using a `.gitignore` file, follow these steps:

1. **Create a `.gitignore` file**:
   - If you don't already have a `.gitignore` file in your repository, create one at the root of your project. You can do this by using the following command in your terminal:
     ```
     touch .gitignore
     ```
   - If you're using an integrated development environment (IDE) or a code editor, you can also create a new file and name it `.gitignore`.

2. **Edit the `.gitignore` file**:
   - Open the `.gitignore` file in a text editor.
   - Add the names of the files or directories you want to ignore. For example, if you want to ignore a file named `secret.txt`, you would add the following line:
     ```
     secret.txt
     ```
   - You can also use wildcards to match patterns. For instance, to ignore all files with the `.log` extension, you can use:
     ```
     *.log
     ```
   - Additionally, you can ignore entire directories by specifying the directory name. For example, to ignore a directory named `logs`, you would add:
     ```
     logs/
     ```

3. **Save the `.gitignore` file**.

4. **Stage and commit your changes**:
   - In your terminal, use the following commands to stage and commit the `.gitignore` file:
     ```
     git add .gitignore
     git commit -m "Add .gitignore file"
     ```

5. **Push to GitHub**:
   - Now, when you push your repository to GitHub, the files and directories specified in `.gitignore` will be ignored and won't be included in the repository.

Keep in mind that the files and directories listed in the `.gitignore` file won't be tracked by Git, so make sure that you've added all necessary files before committing and pushing. If a file was already tracked by Git before you added it to `.gitignore`, you'll need to untrack it using the following command:

```bash
git rm --cached <file-name>
```

Replace `<file-name>` with the name of the file you want to untrack. After this, commit and push the changes.

Remember to be cautious when using `.gitignore` to avoid accidentally ignoring critical files. Always review the contents of your `.gitignore` file before committing it to your repository.
*/