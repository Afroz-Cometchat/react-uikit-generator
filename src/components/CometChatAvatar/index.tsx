import React from 'react';
import {useState} from 'react';
import AceEditor from 'react-ace-builds';
import {Border, ColorPicker, Dimension} from './view';
import Editor from 'react-simple-code-editor';
import {GrammarRest, highlight, languages} from 'prismjs';
import 'prismjs/components/prism-clike';
import 'prismjs/components/prism-javascript';
import 'prismjs/themes/prism.css';
import { avatar_edit_container, avatar_preview_container, code_snippet_preview, copy_button } from './style';

const CometChatAvatar: React.FC = () => {
  const [avatarStyle, setAvatarStyle] = useState({
    borderRadius: '50%',
    width: '70px',
    height: '70px',
    border: 'none',
    nameTextColor: 'red',
    backgroundSize: 'cover',
    backgroundColor: 'black',
    nameTextFont: '20px Arial, sans-serif',
    // nameTextColor?: string;
    // backgroundSize?: string;
    // outerViewBorderWidth?: string;
    // outerViewBorderSpacing?: string;
    // outerViewBorderRadius?: string;
    // outerViewBorderColor?: string;
    // backgroundColor?: string;
  });

  const handleAvatarStyleChange = (property: any, value: any) => {
    setAvatarStyle(prevState => ({...prevState, [property]: value}));
  };

  const updateStyle = (e: any) => {
    setAvatarStyle({...avatarStyle, [e.target.name]: e.target.value});
  };
  const profilePic =
    'https://media.istockphoto.com/id/1394637422/photo/confident-handsome-30s-caucasian-millennial-man-businessman.jpg?s=612x612&w=0&k=20&c=yAaiBJ7NNX1dC2XE-HZecZkUF62f-J-ypKiIT_xn7eA=';

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
    const code = `<cometchat-avatar 
    image={"${profilePic}"} 
    avatarStyle={JSON.stringify(${JSON.stringify(avatarStyle)})} />`;
    copyToClipboard(code);
  };

  const GrammarRest: GrammarRest = {};

  return (
    <div>
      <div style={avatar_edit_container()}>
        <div>
          <Dimension
            value={avatarStyle.width}
            onChange={(value: any) => handleAvatarStyleChange('width', value)}
            property={'width'}
          />
          <Dimension
            value={avatarStyle.height}
            onChange={(value: any) => handleAvatarStyleChange('height', value)}
            property={'height'}
          />
          <Border
            value={avatarStyle.border}
            borderRadius={avatarStyle.borderRadius}
            onChange={(value: any, borderRadius: any) => {
              handleAvatarStyleChange('border', value);
              handleAvatarStyleChange('borderRadius', `${borderRadius}%`);
            }}
          />
          <ColorPicker
            value={avatarStyle.nameTextColor}
            onChange={(value: any) =>
              handleAvatarStyleChange('nameTextColor', value)
            }
            property={'text'}
          />
          <ColorPicker
            value={avatarStyle.backgroundColor}
            onChange={(value: any) =>
              handleAvatarStyleChange('backgroundColor', value)
            }
            property={'background'}
          />

          <input
            type="text"
            name="backgroundSize"
            onChange={updateStyle}
            value={avatarStyle.backgroundSize}
            placeholder="backgroup size"
          />
          <input
            type="text"
            name="backgroundColor"
            onChange={updateStyle}
            value={avatarStyle.backgroundColor}
            placeholder="backgroud color"
          />
          <input
            type="text"
            name="nameTextFont"
            onChange={updateStyle}
            value={avatarStyle.nameTextFont}
            placeholder="name text font"
          />
          {/* <input
            type="text"
            name="name"
            onChange={updateStyle}
            value={avatarStyle.nameTextFont}
            placeholder="name text font"
          /> */}
        </div>
        <div style={avatar_preview_container()}>
          <cometchat-avatar
            image={profilePic}
            avatarStyle={JSON.stringify(avatarStyle)}
            name="gocha"
          />
        </div>
      </div>
      <div style={code_snippet_preview()}>
        <button onClick={copyCode} style={copy_button()}>Copy Code</button>
        <div>
          <Editor
            value={`<cometchat-avatar 
      image={"${profilePic}"} 
      avatarStyle={JSON.stringify(${JSON.stringify(avatarStyle)})} />`}
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
    </div>
  );
};

export default CometChatAvatar;
