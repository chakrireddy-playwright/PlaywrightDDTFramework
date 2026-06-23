import axios from "axios";

export async function createJiraBug(
  summary: string,
  description: string
): Promise<void> {

  const jiraUrl = process.env.JIRA_URL!;
  const email = process.env.JIRA_EMAIL!;
  const apiToken = process.env.JIRA_TOKEN!;
  const projectKey = process.env.JIRA_PROJECT_KEY!;

  const auth = Buffer
    .from(`${email}:${apiToken}`)
    .toString("base64");

  const issueData = {
    fields: {
      project: {
        key: projectKey
      },
      summary: summary,
      description: {
        type: "doc",
        version: 1,
        content: [
          {
            type: "paragraph",
            content: [
              {
                type: "text",
                text: description
              }
            ]
          }
        ]
      },
      issuetype: {
        name: "Bug"
      }
    }
  };

  try {

    const response = await axios.post(
      `${jiraUrl}/rest/api/3/issue`,
      issueData,
      {
        headers: {
          Authorization: `Basic ${auth}`,
          Accept: "application/json",
          "Content-Type": "application/json"
        }
      }
    );

    console.log(`Jira Bug Created: ${response.data.key}`);

  } catch (error: any) {

    console.log("Jira Bug Creation Failed");

    console.log(
      error.response?.data || error.message
    );
  }
}