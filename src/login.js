import { configure } from "mobx";

configure({
    useProxies: "ifavailable",
})
// TODO: Check if the user is already logged in and redirect them to the app.
