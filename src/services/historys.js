import { createBrowserHistory } from "history";

const rootHistory = createBrowserHistory();
const authHistory = createBrowserHistory({ basename: "/auth" });
const appHistory = createBrowserHistory();

export { rootHistory, authHistory, appHistory };
