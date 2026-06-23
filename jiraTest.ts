import 'dotenv/config';
import { createJiraBug } from "./utils/createJiraBug";

console.log("JIRA_URL =", process.env.JIRA_URL);
console.log("JIRA_PROJECT_KEY =", process.env.JIRA_PROJECT_KEY);

(async () => {

  await createJiraBug(
    "TypeScript Jira Test",
    "Created from Playwright TypeScript framework"
  );

})();