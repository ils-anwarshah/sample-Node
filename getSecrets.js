require("dotenv").config();
const { SecretManagerServiceClient } = require("@google-cloud/secret-manager");

const client = new SecretManagerServiceClient();

let CONFIG = process.env;

const load_config = async () => {
  try {
    console.log("process.env.SECRET_NAME:", process.env.SECRET_NAME);

    const [version] = await client.accessSecretVersion({
      name: process.env.SECRET_NAME,
    });

    console.log("TAKING GCP SECRET RESOURCE", version.payload.data);
    const payload = version.payload.data.toString("utf8");
    CONFIG = JSON.parse(payload);
    console.log("CONFIG", CONFIG);
    // CONFIG = () => CONFIG
    module.exports = { CONFIG };

  } catch (error) {
    console.error("Error accessing secret version:", error);
    console.log("TAKING LOCAL RESOURCE");
    CONFIG = process.env;
    module.exports = { CONFIG };
  }
};
module.exports = { load_config };
