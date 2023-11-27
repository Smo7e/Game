import { useContext, useState } from "react";
import { useEffect } from "react";
import { MediatorContext, ServerContext } from "../../../App";
import { TMessages } from "../../../modules/Server/types";
const Chat: React.FC = () => {
    const mediator = useContext(MediatorContext);
    const server = useContext(ServerContext);
    const [messages, setMessages] = useState<TMessages[]>([]);
    const [isActiveChat, setIsActiveChat] = useState(false);

    const { GET_MESSAGES } = mediator.getEventTypes();

    const chatHandler = () => {
        server.startChatInterval();
        setIsActiveChat(!isActiveChat);
    };
    useEffect(() => {
        const getMessagesHandler = (messages_: Array<TMessages>) => {
            setMessages(messages_);
        };

        mediator.subscribe(GET_MESSAGES, getMessagesHandler);

        return () => {
            mediator.unsubscribe(GET_MESSAGES, getMessagesHandler);
        };
    });
    console.log(messages);
    return (
        <div className="Chat-container">
            <div onClick={chatHandler} className="chat-interface">
                Чат
            </div>
            {isActiveChat ? <div className="active-chat"></div> : <></>}
        </div>
    );
};
export default Chat;
