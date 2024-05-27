import {
  CometChatMessageList,
  CometChatUIKit,
  MessageListStyle,
} from '@cometchat/chat-uikit-react';
import {CometChat} from '@cometchat/chat-sdk-javascript';
import {useEffect, useState} from 'react';
import {messageList_list_container} from './style';

const CometChatMessagesList = (props: any) => {
  console.log('porps', props);

  const [user, setUser] = useState<CometChat.User>();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const getUser = async () => {
    try {
      setIsLoading(true);
      const userData: CometChat.User = await CometChat.getUser('superhero3');
      setUser(userData);
      setIsLoading(false);
    } catch (error) {
      console.log('failed to get user', error);
      setIsLoading(false);
    }
  };
  useEffect(() => {
    getUser();
  }, [props.selectedCategories, props.selectedTypes]);
  return (
    <div style={messageList_list_container()}>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <CometChatMessageList
          user={user}
          messageListStyle={
            new MessageListStyle({
              width: '100%',
            })
          }
          messagesRequestBuilder={new CometChat.MessagesRequestBuilder()
            .setLimit(60)
            .setCategories(props.selectedCategories)
            .setTypes(props.selectedTypes)}
        />
      )}
    </div>
  );
};

const MessageCategories = (props: any) => {
  return (
    <div>
      {props.allCategories.map((category: any) => (
        <div key={category}>
          <input
            type="checkbox"
            id={category}
            value={category}
            checked={props.selectedCategories.includes(category)}
            onChange={props.handleChange}
          />
          <label htmlFor={category}>{category}</label>
        </div>
      ))}
    </div>
  );
};

const MessageTypes = (props: any) => {
  return (
    <div>
      {props.allTypes.map((type: any) => (
        <div key={type}>
          <input
            type="checkbox"
            id={type}
            value={type}
            checked={props.selectedTypes.includes(type)}
            onChange={props.handleTypesChange}
          />
          <label htmlFor={type}>{type}</label>
        </div>
      ))}
    </div>
  );
};

export {CometChatMessagesList, MessageCategories, MessageTypes};
