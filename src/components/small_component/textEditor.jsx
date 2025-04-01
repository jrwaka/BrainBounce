"use client";

import React, { useCallback, useMemo, useState } from "react";
import {
  createEditor,
  Editor,
  Element as SlateElement,
  Transforms,
} from "slate";
import { Editable, Slate, useSlate, withReact } from "slate-react";

// Define the initial value explicitly
const initialValue = [
  {
    type: "paragraph",
    children: [{ text: "Start typing here..." }],
  },
];

// Toolbar button component
const ToolbarButton = ({ active, onMouseDown, children }) => {
  return (
    <button
      className={`p-2 m-1 rounded ${
        active ? "bg-blue-600 text-white" : "bg-gray-200"
      }`}
      onMouseDown={(event) => {
        event.preventDefault();
        onMouseDown();
      }}
    >
      {children}
    </button>
  );
};

// Format button component for text formatting
const FormatButton = ({ format, icon }) => {
  const editor = useSlate();

  // Check if the format is currently active
  const isFormatActive = () => {
    const marks = Editor.marks(editor);
    return marks ? marks[format] === true : false;
  };

  // Toggle the format on/off
  const toggleFormat = () => {
    const isActive = isFormatActive();

    if (isActive) {
      Editor.removeMark(editor, format);
    } else {
      Editor.addMark(editor, format, true);
    }
  };

  return (
    <ToolbarButton active={isFormatActive()} onMouseDown={toggleFormat}>
      {icon}
    </ToolbarButton>
  );
};

// Block button component for block formatting
const BlockButton = ({ format, icon }) => {
  const editor = useSlate();

  // Check if the block format is currently active
  const isBlockActive = () => {
    const [match] = Editor.nodes(editor, {
      match: (n) =>
        !Editor.isEditor(n) && SlateElement.isElement(n) && n.type === format,
    });
    return !!match;
  };

  // Toggle the block format
  const toggleBlock = () => {
    const isActive = isBlockActive();

    Transforms.setNodes(
      editor,
      { type: isActive ? "paragraph" : format },
      { match: (n) => Editor.isBlock(editor, n) }
    );
  };

  return (
    <ToolbarButton active={isBlockActive()} onMouseDown={toggleBlock}>
      {icon}
    </ToolbarButton>
  );
};

// Toolbar component
const Toolbar = () => {
  return (
    <div className="flex flex-wrap border-b p-1 mb-3">
      <FormatButton format="bold" icon="B" />
      <FormatButton format="italic" icon="I" />
      <FormatButton format="underline" icon="U" />
      <div className="border-r mx-2 my-1" />
      <BlockButton format="heading-one" icon="H1" />
      <BlockButton format="heading-two" icon="H2" />
      <BlockButton format="blockquote" icon="Quote" />
    </div>
  );
};

const TextEditor = () => {
  // Create a Slate editor object that won't change across renders
  const editor = useMemo(() => withReact(createEditor()), []);

  // Add the initial value when setting up the state
  const [value, setValue] = useState(initialValue);

  // Define custom rendering for elements
  const renderElement = useCallback((props) => {
    switch (props.element.type) {
      case "heading-one":
        return (
          <h1 className="text-2xl font-bold my-2" {...props.attributes}>
            {props.children}
          </h1>
        );
      case "heading-two":
        return (
          <h2 className="text-xl font-bold my-2" {...props.attributes}>
            {props.children}
          </h2>
        );
      case "blockquote":
        return (
          <blockquote
            className="border-l-4 pl-3 italic my-2"
            {...props.attributes}
          >
            {props.children}
          </blockquote>
        );
      default:
        return (
          <p className="my-1" {...props.attributes}>
            {props.children}
          </p>
        );
    }
  }, []);

  // Define custom rendering for text (leaf) nodes
  const renderLeaf = useCallback((props) => {
    let { attributes, children, leaf } = props;

    if (leaf.bold) {
      children = <strong>{children}</strong>;
    }

    if (leaf.italic) {
      children = <em>{children}</em>;
    }

    if (leaf.underline) {
      children = <u>{children}</u>;
    }

    return <span {...attributes}>{children}</span>;
  }, []);

  return (
    <div className="border p-4 rounded w-full">
      <Slate
        editor={editor}
        initialValue={initialValue}
        value={value}
        onChange={(value) => setValue(value)}
      >
        <Toolbar />
        <Editable
          renderElement={renderElement}
          renderLeaf={renderLeaf}
          placeholder="Enter some text..."
          spellCheck
          autoFocus
          className="min-h-32 outline-none"
        />
      </Slate>
    </div>
  );
};

export default TextEditor;
