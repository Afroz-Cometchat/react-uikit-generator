import {CometChatMessageList, CometChatUIKit, MessageListStyle} from '@cometchat/chat-uikit-react';
import {
  messaegList_preview_container,
  messageList_edit_container,
} from './style';
import {CometChatMessagesList, MessageCategories, MessageTypes} from './view';
import {useEffect, useState} from 'react';
import Editor from 'react-simple-code-editor';
import {highlight, languages} from 'prismjs';
import { code_snippet_preview, copy_button } from '../CometChatAvatar/style';
import { CometChat } from '@cometchat/chat-sdk-javascript';

function MessageList() {
  const allCategories: string[] =
    CometChatUIKit.getDataSource().getAllMessageCategories();
  const allTypes: string[] =
    CometChatUIKit.getDataSource().getAllMessageTypes();
  const [selectedCategories, setSelectedCategories] =
    useState<string[]>(allCategories);
  const [selectedTypes, setSelectedTypes] = useState<string[]>(allTypes);
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.checked) {
      setSelectedCategories(prevSelectedCategories => [
        ...prevSelectedCategories,
        event.target.value,
      ]);
    } else {
      setSelectedCategories(prevSelectedCategories =>
        prevSelectedCategories.filter(
          category => category !== event.target.value,
        ),
      );
    }
  };

  const handleTypesChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.checked) {
      setSelectedTypes(prevSelectedTypes => [
        ...prevSelectedTypes,
        event.target.value,
      ]);
    } else {
      setSelectedTypes(prevSelectedTypes =>
        prevSelectedTypes.filter(type => type !== event.target.value),
      );
    }
  };

  const messageCategoriesProps = {
    allCategories,
    selectedCategories,
    handleChange,
  };
  const messageTypesProps = {
    allTypes,
    selectedTypes,
    handleTypesChange,
  };
  const messageListProps = {
    selectedCategories,
    selectedTypes,
  };
  function copyToClipboard(text: any) {
    navigator.clipboard
      .writeText(text)
      .then(() => {
        console.log('Code copied to clipboard!');
      })
      .catch((err: any) => {
        console.log('Error in copying text: ', err);
      });
  }
  const copyCode = () => {
    const code = `
    const CometChatMessagesList = (props: any) => {
    const [user, setUser] = useState<CometChat.User>();
    const getUser = async () => {
        try {
            const userData: CometChat.User = await CometChat.getUser('superhero3');
            setUser(userData);
          } catch (error) {
            console.log('failed to get user', error);
          }
        };
        useEffect(() => {
          getUser();
        }, []);
    
      return (
          <CometChatMessageList
            user={//UID}
            messagesRequestBuilder={new CometChat.MessagesRequestBuilder()
            .setLimit(60)
            .setCategories([${selectedCategories.map(ele => `
                            "${ele}"`)}
                        ])
            .setTypes([${selectedTypes.map(ele => `
                        "${ele}"`)}
                    ])}
        />
      )
    }
    `;
    copyToClipboard(code);
  };

  return (
    <div>
      <div style={messageList_edit_container()}>
        <div>
          <div>
            <h2>Message Categories</h2>
            <MessageCategories {...messageCategoriesProps} />
          </div>
          <div>
            <h2>Message Types</h2>
            <MessageTypes {...messageTypesProps} />
          </div>
        </div>
        <div style={messaegList_preview_container()}>
          <CometChatMessagesList {...messageListProps} />
        </div>
      </div>
      <div style={code_snippet_preview()}>
      <button onClick={copyCode} style={copy_button()}>Copy Code</button>
        <Editor
          value={`
const CometChatMessagesList = (props: any) => {
const [user, setUser] = useState<CometChat.User>();
const getUser = async () => {
    try {
        const userData: CometChat.User = await CometChat.getUser('superhero3');
        setUser(userData);
      } catch (error) {
        console.log('failed to get user', error);
      }
    };
    useEffect(() => {
      getUser();
    }, []);

  return (
    <div style={{
          height: "95vh",
          boxShadow: "rgb(0 0 255 / 60%) 0px 1px 4px",
        }}>
        {user ? 
      <CometChatMessageList
        user={user}
        messagesRequestBuilder={new CometChat.MessagesRequestBuilder()
        .setLimit(60)
        .setCategories([${selectedCategories.map(ele => `
                        "${ele}"`)}
                    ])
        .setTypes([${selectedTypes.map(ele => `
                    "${ele}"`)}
                ])}
    /> :
     <p>Loadgin...</p>}
       </div>
  )
}
`}
          onValueChange={code => ''}
          highlight={code => highlight(code, languages.js!, 'jsx')}
          padding={10}
          style={{
            fontFamily: '"Fira code", "Fira Mono", monospace',
            fontSize: 12,
          }}
        />
      </div>
    </div>
  );
}

// const MessageList = (props: any) => {
//     const [user, setUser] = useState<CometChat.User>();
//     const getUser = async () => {
//         try {
//             const userData: CometChat.User = await CometChat.getUser('superhero3');
//             setUser(userData);
//           } catch (error) {
//             console.log('failed to get user', error);
//           }
//         };
//         useEffect(() => {
//           getUser();
//         }, []);
    
//       return (
//           <div style={{
//             height: "95vh",
//             boxShadow: "rgb(0 0 255 / 60%) 0px 1px 4px",
//           }}>
//             {user ? 
//             <CometChatMessageList
//             user={user}
//             messagesRequestBuilder={new CometChat.MessagesRequestBuilder()
//             .setLimit(60)
//             .setCategories([
//                             "interactive",
//                             "custom"
//                         ])
//             .setTypes([
//                         "text",
//                         "image",
//                         "audio",
//                         "video",
//                         "file",
//                         "groupMember",
//                         "form",
//                         "scheduler",
//                         "card",
//                         "extension_sticker",
//                         "extension_poll"
//                     ])}
//         /> :
//         <p>Loadgin...</p>}
//           </div>
//       )
//     }
    

export default MessageList;
