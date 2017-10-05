# Bug Bounty

Casual project to gamify bug fixes for repositories in GitHub

## Contributing

### Getting Started

The following dependencies are required for building the project:

- [.NET Core CLI](https://www.microsoft.com/net/download/core)
- [NodeJS](https://nodejs.org/en/download/)

### Running

You can run the project from the root folder with:

```
npm install
npm run start
```

This will start a .NET Core server with a proxied connection to
webpack for client side development.

### Publishing

The project is designed to be published into Heroku using a .NET
Core Buildpack and the NodeJS Buildpack. On publish, the dotnet
core project will build Node project to generate static web assets,
and deploy them into the `wwwroot` folder with the releaseable
dll. On starting the server, it will statically serve these files,
as well as providing API access.
