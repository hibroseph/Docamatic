import React from "react";
import { Rnd } from "react-rnd";
import { NoteContainer as Container } from "../styles/NoteStyles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowLeft,
  faArrowsAlt,
  faHeart,
  faThumbtack,
  faTrashAlt
} from "@fortawesome/free-solid-svg-icons";
import { useInputControls } from "../utils/useInputControls";
import { faHeart as fasHeart } from "@fortawesome/free-regular-svg-icons";
import ColorSwatch from "./ColorSwatch";

const Note = props => {

  const controls = useInputControls();

  const titleChange = event => {
    props.onTitleChange(event);
    controls.title.setCursorPosition(event.target.selectionStart);
  }

  const bodyChange = event => {
    props.onBodyChange(event);
    controls.body.setCursorPosition(event.target.selectionStart)
  }

  return (
    <Rnd
      default={{
        x: props.position.x,
        y: props.position.y,

        width: props.size.width,
        height: props.size.height
      }}
      onDragStop={(e, d) => {
        props.onPositionChange(props.id, d.x, d.y);
      }}
      onResizeStop={(e, d, ref, delta, position) => {
        props.onSizeChange(
          props.size.width + delta.width,
          props.size.height + delta.height
        );
      }}
      dragHandleClassName="drag-handle"
      minWidth={200}
      minHeight={200}
      bounds="window"
      enableResizing={{
        top: false,
        left: false,
        right: true,
        bottom: true,
        topRight: false,
        topLeft: false,
        bottomRight: true,
        bottomLeft: false
      }}
      disableDragging={props.stickify ? true : false}
      style={{ position: props.stickify ? "fixed" : "absolute" }}
    >
      <Container stickify={props.stickify} color={props.color}>
        <div className="title">
          <input
            ref={controls.title.ref}
            style={{ margin: 0 }}
            value={props.title}
            onChange={titleChange}

          />
          <FontAwesomeIcon className="arrow icons" icon={faArrowLeft} />

          <div className="settings-container">
            <div className="icon-container">
              <FontAwesomeIcon
                className="icons"
                onClick={props.onHeartifyClick}
                icon={props.heart ? faHeart : fasHeart}
              ></FontAwesomeIcon>
              {/* <FontAwesomeIcon
                className="icons"
                icon={faThumbtack}
                onClick={props.onStickifyClick}
                style={{ color: props.stickify ? props.color.text : "grey" }}
              ></FontAwesomeIcon> */}
              <FontAwesomeIcon
                onClick={props.onDeleteClick}
                className="icons"
                icon={faTrashAlt}
              />
              <FontAwesomeIcon
                className="drag-handle icons"
                style={{ color: props.stickify ? "grey" : props.color.text }}
                icon={faArrowsAlt}
              />
            </div>
            <ColorSwatch
              colors={props.colors}
              onColorChange={color => props.onColorChange(color)}
            ></ColorSwatch>
          </div>
        </div>

        <div className="body">
          <textarea
            ref={controls.body.ref}
            onChange={bodyChange}
            value={props.body} />
        </div>
      </Container>
    </Rnd>
  );
};

export default Note;
