import { ServerResponse as HttpResponse} from "http";
import BasicAuth from "@/Hubtel/BasicAuth";
import ApiHost from "@/Hubtel/ApiHost";
import MessagingApi from "@/Hubtel/MessagingApi";
import MessageResponse from "@/Hubtel/MessageResponse";


async function main() {
    const auth = new BasicAuth("user123", "pass123");
    // instance of ApiHost
    const apiHost = new ApiHost(auth);
    // Let us try to send some message
    const messagingApi = new MessagingApi(apiHost);
    try {
        // Send a quick message
        const messageResponse: any = await messagingApi.sendQuickMessage("DevUniverse", "+233207110652", "Welcome to planet Hubtel!");

        if (messageResponse instanceof MessageResponse) {
            console.log(messageResponse.getStatus());
        } else if (messageResponse instanceof HttpResponse) {
            console.log(`\nServer Response Status : ".${messageResponse.statusMessage}`);
        }
    } catch (error: any) {
        console.error(error.message);
    }
}

main()

