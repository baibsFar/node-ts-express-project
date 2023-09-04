# NodeJS + Typescript + ExpressJS project
## How to use
- Install dependencies
```sh
npm install
```
- Create controller in your folder choice
```ts
import { Router } from 'root/src/core/router'
import { Request, Response } from 'express

export const MyController = () => {
    Router.addRoute({
        path: '/your-path',
        method: 'get' | 'post' | 'put' | 'patch' | 'delete',
        handler: (req: Request, res: Response /* NextFunction is up to you */) => {}
    })    
}
```
- Add controller in setup file (core/setup.ts)
```ts
// Add your controllers here in array
const controllers = [MyController]
controllers.forEach(controller => controller())
```
- You can configure your port in src/main.ts
- Then run you server
```sh
# Build and run
npm run build
npm run start
# Development run
npm run dev
```

## Database
If you want to use database and ORM in this project, you need to put a ".env" file for configuration and add data source in core/setup.ts file. You also need to [install database driver](https://typeorm.io/#installation) that depends on the type of database you work with.
- .env file
```sh
PORT=3000

# Database
DB_TYPE=
DB_PORT=
DB_HOST=
DB_NAME=
DB_USER=
DB_PASSWORD=

# Mode PROD or DEV
MODE=DEV
```
- core/setup.ts
```ts
activateDatabase(
    createDataSource({
        type: process.env.DB_TYPE as 'postgres',
        port: +process.env.DB_PORT,
        host: process.env.DB_HOST,
        database: process.env.DB_NAME,
        username: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        entities: [/* Here go the entities */],
        synchronize: process.env.MODE === 'PROD' ? false : true
    })
)
```