"use client";

import Color from "@tiptap/extension-color";
import Image from "@tiptap/extension-image";
import Link from "@tiptap/extension-link";
import Table from "@tiptap/extension-table";
import TableCell from "@tiptap/extension-table-cell";
import TableHeader from "@tiptap/extension-table-header";
import TableRow from "@tiptap/extension-table-row";
import TextAlign from "@tiptap/extension-text-align";
import TextStyle from "@tiptap/extension-text-style";
import Underline from "@tiptap/extension-underline";
import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import { useState } from "react";
import {
  FaAlignCenter,
  FaAlignJustify,
  FaAlignLeft,
  FaAlignRight,
  FaBold,
  FaCode,
  FaCodeBranch,
  FaImage,
  FaItalic,
  FaLink,
  FaListOl,
  FaListUl,
  FaQuoteLeft,
  FaRedo,
  FaStrikethrough,
  FaTable,
  FaUnderline,
  FaUndo,
} from "react-icons/fa";

const MenuBar = ({ editor }) => {
  const [linkUrl, setLinkUrl] = useState("");
  const [showLinkInput, setShowLinkInput] = useState(false);
  const [imageFile, setImageFile] = useState(null);
  const [showImageInput, setShowImageInput] = useState(false);

  if (!editor) {
    return null;
  }

  const addLink = () => {
    if (linkUrl) {
      editor.chain().extendMarkRange("link").setLink({ href: linkUrl }).run();
      setLinkUrl("");
      setShowLinkInput(false);
    }
  };

  const addImage = () => {
    if (imageFile) {
      const reader = new FileReader();
      reader.onload = (e) => {
        if (e.target && e.target.result) {
          editor.chain().setImage({ src: e.target.result }).run();
          setImageFile(null);
          setShowImageInput(false);
        }
      };
      reader.readAsDataURL(imageFile);
    }
  };

  const addTable = () => {
    editor.chain().insertTable({ rows: 3, cols: 3, withHeaderRow: true }).run();
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImageFile(file);
    }
  };

  return (
    <div className="menuBar border-b pb-2 mb-4 bg-gray-100 p-2 rounded-md shadow-md">
      <div className="flex flex-wrap gap-1">
        {/* Text formatting */}
        <button
          onClick={() => editor.chain().toggleBold().run()}
          className={`px-2 py-1 rounded hover:bg-gray-200 ${
            editor.isActive("bold")
              ? "bg-blue-600 text-white"
              : "bg-transparent"
          }`}
        >
          <FaBold />
        </button>
        <button
          onClick={() => editor.chain().toggleItalic().run()}
          className={`px-2 py-1 rounded hover:bg-gray-200 ${
            editor.isActive("italic")
              ? "bg-blue-600 text-white"
              : "bg-transparent"
          }`}
        >
          <FaItalic />
        </button>
        <button
          onClick={() => editor.chain().toggleUnderline().run()}
          className={`px-2 py-1 rounded hover:bg-gray-200 ${
            editor.isActive("underline")
              ? "bg-blue-600 text-white"
              : "bg-transparent"
          }`}
        >
          <FaUnderline />
        </button>
        <button
          onClick={() => editor.chain().toggleStrike().run()}
          className={`px-2 py-1 rounded hover:bg-gray-200 ${
            editor.isActive("strike")
              ? "bg-blue-600 text-white"
              : "bg-transparent"
          }`}
        >
          <FaStrikethrough />
        </button>
        <button
          onClick={() => editor.chain().toggleCode().run()}
          className={`px-2 py-1 rounded hover:bg-gray-200 ${
            editor.isActive("code")
              ? "bg-blue-600 text-white"
              : "bg-transparent"
          }`}
        >
          <FaCode />
        </button>

        {/* Text color */}
        <input
          type="color"
          onInput={(e) => editor.chain().setColor(e.target.value).run()}
          value={editor.getAttributes("textStyle").color || "#000000"}
          className="h-8 w-8 p-0 border-0 rounded hover:bg-gray-200"
        />

        <div className="border-r mx-1 h-8"></div>

        {/* Headings */}
        <button
          onClick={() => editor.chain().toggleHeading({ level: 1 }).run()}
          className={`px-2 py-1 rounded hover:bg-gray-200 ${
            editor.isActive("heading", { level: 1 })
              ? "bg-blue-600 text-white"
              : "bg-transparent"
          }`}
        >
          H1
        </button>
        <button
          onClick={() => editor.chain().toggleHeading({ level: 2 }).run()}
          className={`px-2 py-1 rounded hover:bg-gray-200 ${
            editor.isActive("heading", { level: 2 })
              ? "bg-blue-600 text-white"
              : "bg-transparent"
          }`}
        >
          H2
        </button>
        <button
          onClick={() => editor.chain().toggleHeading({ level: 3 }).run()}
          className={`px-2 py-1 rounded hover:bg-gray-200 ${
            editor.isActive("heading", { level: 3 })
              ? "bg-blue-600 text-white"
              : "bg-transparent"
          }`}
        >
          H3
        </button>

        <div className="border-r mx-1 h-8"></div>

        {/* Text alignment */}
        <button
          onClick={() => editor.chain().setTextAlign("left").run()}
          className={`px-2 py-1 rounded hover:bg-gray-200 ${
            editor.isActive({ textAlign: "left" })
              ? "bg-blue-600 text-white"
              : "bg-transparent"
          }`}
        >
          <FaAlignLeft />
        </button>
        <button
          onClick={() => editor.chain().setTextAlign("center").run()}
          className={`px-2 py-1 rounded hover:bg-gray-200 ${
            editor.isActive({ textAlign: "center" })
              ? "bg-blue-600 text-white"
              : "bg-transparent"
          }`}
        >
          <FaAlignCenter />
        </button>
        <button
          onClick={() => editor.chain().setTextAlign("right").run()}
          className={`px-2 py-1 rounded hover:bg-gray-200 ${
            editor.isActive({ textAlign: "right" })
              ? "bg-blue-600 text-white"
              : "bg-transparent"
          }`}
        >
          <FaAlignRight />
        </button>
        <button
          onClick={() => editor.chain().setTextAlign("justify").run()}
          className={`px-2 py-1 rounded hover:bg-gray-200 ${
            editor.isActive({ textAlign: "justify" })
              ? "bg-blue-600 text-white"
              : "bg-transparent"
          }`}
        >
          <FaAlignJustify />
        </button>

        <div className="border-r mx-1 h-8"></div>

        {/* Lists */}
        <button
          onClick={() => editor.chain().toggleBulletList().run()}
          className={`px-2 py-1 rounded hover:bg-gray-200 ${
            editor.isActive("bulletList")
              ? "bg-blue-600 text-white"
              : "bg-transparent"
          }`}
        >
          <FaListUl />
        </button>
        <button
          onClick={() => editor.chain().toggleOrderedList().run()}
          className={`px-2 py-1 rounded hover:bg-gray-200 ${
            editor.isActive("orderedList")
              ? "bg-blue-600 text-white"
              : "bg-transparent"
          }`}
        >
          <FaListOl />
        </button>

        {/* Blockquote */}
        <button
          onClick={() => editor.chain().toggleBlockquote().run()}
          className={`px-2 py-1 rounded hover:bg-gray-200 ${
            editor.isActive("blockquote")
              ? "bg-blue-600 text-white"
              : "bg-transparent"
          }`}
        >
          <FaQuoteLeft />
        </button>

        {/* Code block */}
        <button
          onClick={() => editor.chain().toggleCodeBlock().run()}
          className={`px-2 py-1 rounded hover:bg-gray-200 ${
            editor.isActive("codeBlock")
              ? "bg-blue-600 text-white"
              : "bg-transparent"
          }`}
        >
          <FaCodeBranch />
        </button>
        <div className="border-r mx-1 h-8"></div>

        {/* Link */}
        <button
          onClick={() => setShowLinkInput(!showLinkInput)}
          className={`px-2 py-1 rounded hover:bg-gray-200 ${
            editor.isActive("link")
              ? "bg-blue-600 text-white"
              : "bg-transparent"
          }`}
        >
          <FaLink />
        </button>
        {showLinkInput && (
          <div className="flex ml-1">
            <input
              type="text"
              placeholder="https://example.com"
              value={linkUrl}
              onChange={(e) => setLinkUrl(e.target.value)}
              className="px-2 py-1 border rounded"
            />
            <button
              onClick={addLink}
              className="px-2 py-1 bg-green-500 text-white rounded ml-1"
            >
              Add
            </button>
          </div>
        )}

        {/* Image */}
        <button
          onClick={() => setShowImageInput(!showImageInput)}
          className="px-2 py-1 rounded hover:bg-gray-200"
        >
          <FaImage />
        </button>
        {showImageInput && (
          <div className="flex ml-1">
            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              className="px-2 py-1 border rounded"
            />
            <button
              onClick={addImage}
              className="px-2 py-1 bg-green-500 text-white rounded ml-1"
            >
              Add
            </button>
          </div>
        )}

        {/* Table */}
        <button
          onClick={addTable}
          className="px-2 py-1 rounded hover:bg-gray-200"
        >
          <FaTable />
        </button>

        <div className="border-r mx-1 h-8"></div>

        {/* Undo/Redo */}
        <button
          onClick={() => editor.chain().undo().run()}
          disabled={!editor.can().undo()}
          className="px-2 py-1 rounded hover:bg-gray-200 disabled:opacity-50"
        >
          <FaUndo />
        </button>
        <button
          onClick={() => editor.chain().redo().run()}
          disabled={!editor.can().redo()}
          className="px-2 py-1 rounded hover:bg-gray-200 disabled:opacity-50"
        >
          <FaRedo />
        </button>
      </div>
    </div>
  );
};

const TiptapEditor = () => {
  const editor = useEditor({
    extensions: [
      StarterKit,
      Underline,
      TextAlign.configure({
        types: ["heading", "paragraph"],
        alignments: ["left", "center", "right", "justify"],
        defaultAlignment: "left",
      }),
      TextStyle,
      Color,
      Link.configure({
        openOnClick: false,
      }),
      Image.configure({
        inline: true,
        allowBase64: true,
        allowResizing: true,
      }),
      Table.configure({
        resizable: true,
      }),
      TableRow,
      TableHeader,
      TableCell,
    ],
    content: '<h2>Welcome to the TipTap Rich Text Editor!</h2><p>This is a fully-featured text editor with support for formatting, alignment, tables, and more.</p>',
  });

  return (
    <div className="editor-container border rounded shadow h-screen w-screen">
      <MenuBar editor={editor} />
      <div className="px-4 pb-4 h-[calc(100vh-120px)] overflow-y-auto">
        <EditorContent
          editor={editor}
          className="prose max-w-none h-full w-full"
        />
      </div>
    </div>
  );
};

export default TiptapEditor;
