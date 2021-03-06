import styled from "styled-components";

export const MiniSearchNoteContainer = styled.div`
  position: relative;
  
  .url-preview {
    font-weight: bold;
    margin-bottom: 0px;
    margin-left: 10px;
  }

  .note {
  font-size: 15px;
    border-radius: 10px;
    margin: 5px 10px 0px 10px;
    box-shadow: 0px 4px 17px -5px rgba(0, 0, 0, 0.75);
  }
  .title-bar {
    position: relative;
    padding: 8px 0px 8px 8px;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    color: ${props => props.color.text};
    background-color: ${props => props.color.title};
    font-weight: bold;
    overflow-wrap: break-word;
  }

  .body {
    box-sizing: border-box;
    position: relative;
    background-color: white;
    width: 100%;
    padding: 8px;
  }

  .note:hover {
    filter: brightness(0.95);
  }
`;
