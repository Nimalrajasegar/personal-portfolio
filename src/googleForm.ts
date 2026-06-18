// Replace with your own Google Form's submission URL and entry IDs.
// Get these from your form: change /viewform to /formResponse for the
// action URL, and inspect each input's name="entry.XXXXXXXXX" attribute.
export const googleFormConfig = {
  actionUrl: "https://docs.google.com/forms/d/e/REPLACE_WITH_FORM_ID/formResponse",
  fields: {
    name: "entry.REPLACE_NAME",
    email: "entry.REPLACE_EMAIL",
    subject: "entry.REPLACE_SUBJECT",
    message: "entry.REPLACE_MESSAGE",
  },
};
