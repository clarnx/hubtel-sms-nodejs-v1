const { BasicAuth, ApiHost, MessagingApi } = require("index.js");

async function main() {
    const auth = new BasicAuth("clientId", "clientSecret");
    // instance of ApiHost
    const apiHost = new ApiHost(auth);
    // Let us try to send some message
    const messagingApi = new MessagingApi(apiHost);
    try {
        // Send a quick message
        const messageResponse = await messagingApi.sendQuickMessage(
            "DevUniverse",
            "+233206711836",
            "Welcome to planet Hubtel!"
        );
        console.log(messageResponse.getStatus());
    } catch (error) {
        console.error(error.message);
    }
}

main();
