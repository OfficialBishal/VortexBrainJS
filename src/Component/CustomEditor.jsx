import React, { useRef } from "react";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import FullEditor from "ckeditor5-custom-build-full/build/ckeditor.js";
import { editorConfiguration } from "../Utils/constants";

const CustomEditor = ({ setFieldValue, name }) => {
  const toolBarRef = useRef(null);

  return (
    <div className="document-editor">
      <div ref={toolBarRef} className="document-editor__toolbar"></div>
      <div className="document-editor__editable-container">
        <div className="document-editor__editable">
          <CKEditor
            editor={FullEditor}
            config={editorConfiguration}
            data=""
            onReady={(editor) => {
              if (toolBarRef.current) {
                toolBarRef.current.appendChild(editor.ui.view.toolbar.element);
              }
            }}
            onInit={(editor) => {
              // Add the toolbar to the container
              const toolbarContainer = document.querySelector(
                "#document-editor__toolbar"
              );
              toolbarContainer.appendChild(editor.ui.view.toolbar.element);

              window.editor = editor;
              // You can store the "editor" and use when it is needed.
              console.log("Editor is ready to use!", editor);
            }}
            onChange={(event, editor) => {
              const data = editor.getData();
              setFieldValue(name, data);
              //   console.log({ event, editor, data });
            }}
            onBlur={(event, editor) => {
              // console.log("Blur.", editor);
            }}
            onFocus={(event, editor) => {
              // console.log("Focus.", editor);
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default CustomEditor;
