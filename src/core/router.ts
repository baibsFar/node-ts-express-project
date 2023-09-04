import { Router as ExpressRouter, Request, Response, NextFunction } from 'express'

export interface Route {
    path: string
    method: 'get' | 'post' | 'put' | 'patch' | "delete"
    handler: (req: Request, res: Response, next?: NextFunction) => void
}

export class Router {
    private static routerInstance: ExpressRouter
    private static routes: Array<Route> = []

    public static addRoute(route: Route) {
        let routeAlreadyExists: boolean = false
        Router.routes.forEach(r => {
            if (r.path === route.path) {
                routeAlreadyExists = true
                return
            }
        })

        if (!routeAlreadyExists)
            Router.routes.push(route)
    }

    public static activate() {
        if (Router.routerInstance === null || Router.routerInstance === undefined)
            Router.routerInstance = ExpressRouter()

        Router.routes.forEach(r => {
            Router.routerInstance[r.method](r.path, r.handler)
            console.log(`\x1b[36m [+] ${r.method.toUpperCase()} ->  ${r.path} \x1b[0m`)
        })

        return Router.routerInstance
    }
}