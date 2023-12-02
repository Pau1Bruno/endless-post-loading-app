import ReactDOM from "react-dom/client";
import {Provider} from "react-redux";
import {store} from "./store";
import {StrictMode} from "react";
import {createBrowserRouter, RouterProvider,} from "react-router-dom";
import Root from "./pages/root";
import Error from "./pages/error/error";
import "./global.scss";
import PostId from "./pages/post-id/post-id";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Root/>,
        errorElement: <Error/>,
    },
    {
        path: "posts/:postId",
        element: <PostId/>,
    },

]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
    .render(
        <StrictMode>
            <Provider store={store}>
                <RouterProvider router={router}/>
            </Provider>
        </StrictMode>
    );
