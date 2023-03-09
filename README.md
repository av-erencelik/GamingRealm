# gaming-site

gaming-site is a responsive website that fetches data from rawg.io api and allow users to fav games and make comments.

## Table of Contents

- [Requirements](#requirements)
- [Technologies Used](#technologies-used)
- [Usage](#usage)
- [Project Overview](#project-overview)
- [Documentation](#documentation)

## Requirements

- React.js
- Node.js
- Firebase (for auth,database and storage)
- Netlify (for hosting)

## Technologies Used

- [React.js](https://reactjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Formik](https://formik.org/)
- [Framer Motion](https://www.framer.com/motion/)
- [Redux](https://redux.js.org/)
- [Moment](https://momentjs.com/)
- [React Player](https://github.com/CookPete/react-player)
- [Yup](https://github.com/jquense/yup)
- [Firebase](https://firebase.google.com/)
- [Netlify](https://www.netlify.com/)

## Usage

install all dependencies

```bash
npm install
```

start local dev server

```bash
npm run dev
```

create a production build

```bash
npm run build
```

### Firebase

1. Go to the official firebase website and create a new project.
2. Create an .env file like the .envexample file in the repo.
3. Enter the firebase config information into the env variables in the .env file you created.
4. On the firebase console enable authentication with email and password, firestore database and storage.

### Rawg.io API

1. Go to the [rawg.io](https://rawg.io/apidocs) and click get api key button.
2. Create a new account and with your new account get your api key.
3. Enter your api key to the VITE_RAWG_API_KEY variable on the .env file.

### Netlify

1. Add new site to netlify and upload project's dist folder.

## Project Overview

[demo](https://gamingdbsiteproject.netlify.app/home)

### Screenshots of demo

![ss1](https://i.postimg.cc/c1kJbgpB/Screenshot-40.png)

![ss2](https://i.postimg.cc/qMf7rV7N/Screenshot-41.png)

## Documentation

For additional documentation on this project, please refer to the following resources:

- [React.js Documentation](https://reactjs.org/docs/getting-started.html)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Formik Documentation](https://formik.org/docs/overview)
- [Framer Motion Documentation](https://www.framer.com/docs/)
- [Redux Documentation](https://redux.js.org/)
- [Moment Documentation](https://momentjs.com/docs/)
- [React Player Documentation](https://github.com/CookPete/react-player#readme)
- [Yup Documentation](https://github.com/jquense/yup#api)
- [Firebase Documentation](https://firebase.google.com/docs)
- [Netlify Documentation](https://docs.netlify.com/)
