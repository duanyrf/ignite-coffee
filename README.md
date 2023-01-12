## Step-by-Step Command List

1. `pnpm create vite`
  - It creates a new app React + Vite
  - You should define the name of the app, the framework you work with (React + Typescript here)
  - After finhish enter in the project's directory

2. `pnpm install` and `pnpm run dev`
  - It installs the dependencies of project e it starts the app server to check if it's working

3. Configure the basic structure of project, adjusting CSS reset e a simple message at App.tsx

4. Initialize a local git repository in the project's folder

5. `pnpm add -D eslint` and `pnpm add -D @rocketseat/eslint-config`
  - It sets up ESLint by Rocketseat
  - You sould create a file called *.eslintrc.json* in the root folder and add the following content on it:
  ```json
  {
    "extends": "@rocketseat/eslint-config/react"
  }
  ```
  - In package.json file create a script called *lint* and thecommand `eslint src --ext .ts,.tsx` on it (if you add flag *--fix* it will fix all the eslint errors)

  ## Default Theme and ThemeProvider

  1. Create a styles folder with global.css and themes folder. Inside of themes folder create a file called default.ts, containing color variables as a exported const.

  2. `pnpm add styled-components` and `pnpm add -D @types/styled-components`