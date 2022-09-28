# Eat and Nourish

Eat & Nourish is a single page application (SPA) that is served with data from the backend using AWS DataStore and populating the client-side with data from the user. The images and information on the frontend are dynamically generated with Next.js and when each individual page is clicked, it leads to the individual menu page

![eat and nourish](https://user-images.githubusercontent.com/25850598/192769186-f548a0f0-d400-48e1-9126-4d31ef33d6af.png)

## Getting Started

To get the project up and running:

1. clone the repository and navigate to the next-amplify-datastore folder

```
  $ git clonehttps://github.com/Terieyenike/next-amplify-datastore
  $ cd next-amplify-datastore/
```

2. install dependencies

```
  $ yarn install
```

3. serve with hot reload at localhost:3000

```
  $ yarn dev
```

4. build for production and launch server

```
  $ yarn build
  $ yarn start
```

The food site will be available on the available port on localhost:

`:3000` for the home page for the blog and has the route `:3000/recipe/[id]` for all the individual menu which will dynamically render the individual files and replace the `[id]` to its id name.

## Contributing

We ❤️ pull requests, and we’re continually working hard to make it as easy as possible for developers to contribute.
Before beginning development with the Eat & Nourish, please familiarize yourself with the following developer resources:

- [Contributor Guide](CONTRIBUTING.md) to learn about how to contribute to Eat and Nourish.
- [CODE_OF_CONDUCT](CODE_OF_CONDUCT.md).

## Author

Teri Eyenike

## Technologies

- NextJS
- AWS
- Cloudinary
- TailwindCSS
