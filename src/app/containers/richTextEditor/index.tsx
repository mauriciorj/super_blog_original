/* eslint-disable no-shadow */
import React, { useEffect, useState } from 'react';
import { Grid, Typography } from '@mui/material';
import { EditorState, convertToRaw, RichUtils } from 'draft-js';
import draftToHtml from 'draftjs-to-html';
// import { v4 as uuidv4 } from 'uuid';
import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';

const ControlledEditor: React.FC = () => {
  const [isMounted, setIsMounted] = useState<boolean>(false);

  // Editor state for question
  const [editorStateControlQuestion, setEditorStateControlQuestion] =
    useState<any>({
      editorStateQuestion: EditorState.createEmpty(),
    });

  // Editor state for answer
  const [editorStateControlAnswer, setEditorStateControlAnswer] = useState<any>(
    {
      editorState: EditorState.createEmpty(),
    }
  );

  /* eslint-disable  @typescript-eslint/no-explicit-any */
  const onEditorStateChangeQuestion = (editorStateQuestion: any) => {
    setEditorStateControlQuestion({
      editorStateQuestion,
    });
  };

  /* eslint-disable  @typescript-eslint/no-explicit-any */
  const onEditorStateChangeAnswer = (editorState: any) => {
    setEditorStateControlAnswer({
      editorState,
    });
  };

  const { editorState } = editorStateControlAnswer;
  const { editorStateQuestion } = editorStateControlQuestion;

  const wrapperStyle = {
    border: '1px solid #969696',
  };

  const editorStyle = {
    height: '10rem',
    paddingLeft: '10px',
  };

  const editorStyleQuestion = {
    maxHeight: '100px',
    paddingLeft: '10px',
  };

  /* eslint-disable  @typescript-eslint/no-explicit-any */
  const handleKeyCommandQuestion = (command: any, editorStateQuestion: any) => {
    const newState = RichUtils.handleKeyCommand(editorStateQuestion, command);

    if (newState) {
      onEditorStateChangeQuestion(newState);
      return 'handled';
    }

    return 'not-handled';
  };

  /* eslint-disable  @typescript-eslint/no-explicit-any */
  const handleKeyCommand = (command: any, editorState: any) => {
    const newState = RichUtils.handleKeyCommand(editorState, command);

    if (newState) {
      onEditorStateChangeAnswer(newState);
      return 'handled';
    }

    return 'not-handled';
  };

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return isMounted ? (
    <Grid
      item
      xs={12}
      sx={{
        display: 'flex',
        marginTop: '20px',
        marginLeft: '20px',
      }}
    >
      <Grid
        item
        xs={8}
        sx={{
          paddingRight: '20px',
          borderRight: '1px solid #333',
        }}
      >
        <h1>Rich Text Editor - v1</h1>
        <h3 style={{ marginTop: '30px' }}>Title</h3>
        <Editor
          editorState={editorStateQuestion}
          onEditorStateChange={onEditorStateChangeQuestion}
          handleKeyCommand={handleKeyCommandQuestion}
          wrapperStyle={wrapperStyle}
          editorStyle={editorStyleQuestion}
          hashtag={{
            separator: ' ',
            trigger: '#',
          }}
          toolbar={{
            options: ['inline'],
            inline: {
              options: ['bold', 'strikethrough'],
            },
          }}
        />
        <h3 style={{ marginTop: '30px' }}>Text</h3>
        <Editor
          editorState={editorState}
          onEditorStateChange={onEditorStateChangeAnswer}
          handleKeyCommand={handleKeyCommand}
          wrapperClassName="demo-wrapper"
          wrapperStyle={wrapperStyle}
          editorStyle={editorStyle}
          editorClassName="demo-editor"
        />
      </Grid>
      <Grid item xs={4} sx={{ marginLeft: '20px', marginRight: '20px' }}>
        <h3 style={{ marginTop: '30px' }}>Final Result (object format)</h3>
        <Typography>
          &#123;<br></br>
          &nbsp;&nbsp;Title:
          {draftToHtml(
            convertToRaw(editorStateQuestion.getCurrentContent())
          )}, <br></br>
          &nbsp;&nbsp;Text:
          {draftToHtml(convertToRaw(editorState.getCurrentContent()))},{' '}
          <br></br>
          &#125;
        </Typography>
      </Grid>
    </Grid>
  ) : null;
};

export default ControlledEditor;
