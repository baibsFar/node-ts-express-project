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