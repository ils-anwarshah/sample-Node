const secrets = require("../getSecrets");
secrets.load_config().then(() => require("./server"));
