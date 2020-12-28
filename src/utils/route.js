import request from "./request"
import Qs from "qs";

export const initMenu = (store) => {
    if (store.state.routes.length > 0) {
        return;
    }
    return request({
        url: '/api/getMenuData',
        method: 'POST',
        data: Qs.stringify({username: "admin", password: "admin"})
    });

}

export const initRoute = (routeData) => {
    let routes = [];
    routeData.forEach(route => {
        let {
            path,
            name,
            component,
            showInNavi,
            children
        } = route;
        if (children && children instanceof Array && children.length > 0) {
            children = initRoute(children);
        }

        let fmRouter = {
            path : path,
            name : name,
            showInNavi: showInNavi,
            children: children,
            component: (resolve) => {
                if (!component) {
                    require(['../components/routerRender.vue'], resolve);
                } else if (component.startsWith("dep")) {
                    require(['../views/department/' + component], resolve);
                } else if (component.startsWith("emp")) {
                    require(['../views/employee/' + component], resolve);
                } else {
                    require(['../views/' + component], resolve);
                }
            }
        }
        routes.push(fmRouter)
    });
    return routes;
}