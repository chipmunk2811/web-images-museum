import { lazy } from 'react';
import { Route } from 'react-router-dom';

const routes = [
    {
        path: "",
        element: lazy(() => import('../pages/HomePages/index')),
        nested:
            [{
                path: "",
                element: lazy(() => import('../pages/HomePages/Page1/index')),
            },
            {
                path: "page2",
                element: lazy(() => import('../pages/HomePages/Page2/index')),
            },
            {
                path: "page3",
                element: lazy(() => import('../pages/HomePages/Page3/index'))
            },
            {
                path: "page4",
                element: lazy(() => import('../pages/HomePages/Page4/index'))
            },
            {
                path: "page5",
                element: lazy(() => import('../pages/HomePages/Page5/index'))
            },
            {
                path: "page6",
                element: lazy(() => import('../pages/HomePages/Page6/index'))
            },
            {
                path: "page7",
                element: lazy(() => import('../pages/HomePages/Page7/index'))
            },
            {
                path: "page8",
                element: lazy(() => import('../pages/HomePages/Page8/index'))
            },
            {
                path: "page9",
                element: lazy(() => import('../pages/HomePages/Page9/index'))
            }
            ]
    },
    {
        path: "admin",
        element: lazy(() => import('../pages/AdminPages/index')),
        nested:
            [{
                path: "images",
                element: lazy(() => import('../pages/AdminPages/images/index')),
            },
            {
                path: "setting",
                element: lazy(() => import('../pages/AdminPages/setting/index')),
            }]
    },
    {
        path: "auth",
        element: lazy(() => import('../pages/AdminPages/Login/index')),
    }
];

const renderRoutes = () => {
    return (routes.map(route => {
        if (route.nested) {
            return (
                <Route key={route.path} path={route.path} element={<route.element />}>
                    {route.nested.map(item => {
                        return <Route key={item.path} path={item.path} element={<item.element />} />
                    })}
                </Route>)
        } else {
            return <Route key={route.path} path={route.path} element={<route.element />} />
        }
    }))
};
export default renderRoutes;