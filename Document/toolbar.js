CKEDITOR.editorConfig = function (config) {
  config.toolbarGroups = [
    { name: "basicstyles", groups: ["basicstyles", "cleanup"] },
    { name: "document", groups: ["mode", "document", "doctools"] },
    {
      name: "paragraph",
      groups: ["list", "align", "indent", "blocks", "bidi", "paragraph"],
    },
    "/",
    { name: "clipboard", groups: ["clipboard", "undo"] },
    {
      name: "editing",
      groups: ["find", "selection", "spellchecker", "editing"],
    },
    { name: "forms", groups: ["forms"] },
    { name: "links", groups: ["links"] },
    { name: "insert", groups: ["insert"] },
    "/",
    { name: "styles", groups: ["styles"] },
    { name: "colors", groups: ["colors"] },
    { name: "tools", groups: ["tools"] },
    { name: "others", groups: ["others"] },
    { name: "about", groups: ["about"] },
  ];

  config.removeButtons =
    "Source,Save,NewPage,Preview,Templates,Form,Radio,TextField,Textarea,Select,ImageButton,HiddenField,Checkbox,Button,CreateDiv,Anchor,Flash,PageBreak,Iframe,ShowBlocks,Maximize,About";
};
