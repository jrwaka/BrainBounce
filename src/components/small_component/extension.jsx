'use client';

import { useState } from 'react';
import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import Underline from '@tiptap/extension-underline';
import TextAlign from '@tiptap/extension-text-align';
import Image from '@tiptap/extension-image';
import Link from '@tiptap/extension-link';
import Color from '@tiptap/extension-color';
import TextStyle from '@tiptap/extension-text-style';
import Table from '@tiptap/extension-table';
import TableRow from '@tiptap/extension-table-row';
import TableCell from '@tiptap/extension-table-cell';
import TableHeader from '@tiptap/extension-table-header';

const MenuBar = ({ editor }) => {
  const [linkUrl, setLinkUrl] = useState('');
  const [showLinkInput, setShowLinkInput] = useState(false);
  const [imageUrl, setImageUrl] = useState('');
  const [showImageInput, setShowImageInput] = useState(false);

  if (!editor) {
    return null;
  }

  const addLink = () => {
    if (linkUrl) {
      editor.chain().focus().extendMarkRange('link').setLink({ href: linkUrl }).run();
      setLinkUrl('');
      setShowLinkInput(false);
    }
  };

  const addImage = () => {
    if (imageUrl) {
      editor.chain().focus().setImage({ src: imageUrl }).run();
      setImageUrl('');
      setShowImageInput(false);
    }
  };

  const addTable = () => {
    editor.chain().focus().insertTable({ rows: 3, cols: 3, withHeaderRow: true }).run();
  };

  return (
    <div className="menuBar border-b pb-2 mb-4">
      <div className="flex flex-wrap gap-1 mb-2">
        {/* Text formatting */}
        <button
          onClick={() => editor.chain().focus().toggleBold().run()}
          className={`px-2 py-1 rounded ${editor.isActive('bold') ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}
        >
          B
        </button>
        <button
          onClick={() => editor.chain().focus().toggleItalic().run()}
          className={`px-2 py-1 rounded ${editor.isActive('italic') ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}
        >
          I
        </button>
        <button
          onClick={() => editor.chain().focus().toggleUnderline().run()}
          className={`px-2 py-1 rounded ${editor.isActive('underline') ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}
        >
          U
        </button>
        <button
          onClick={() => editor.chain().focus().toggleStrike().run()}
          className={`px-2 py-1 rounded ${editor.isActive('strike') ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}
        >
          S
        </button>
        <button
          onClick={() => editor.chain().focus().toggleCode().run()}
          className={`px-2 py-1 rounded ${editor.isActive('code') ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}
        >
          &lt;/&gt;
        </button>

        {/* Text color */}
        <input
          type="color"
          onInput={e => editor.chain().focus().setColor(e.target.value).run()}
          value={editor.getAttributes('textStyle').color || '#000000'}
          className="h-8 w-8 p-0 border-0"
        />

        <div className="border-r mx-1 h-8"></div>

        {/* Headings */}
        <button
          onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
          className={`px-2 py-1 rounded ${editor.isActive('heading', { level: 1 }) ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}
        >
          H1
        </button>
        <button
          onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
          className={`px-2 py-1 rounded ${editor.isActive('heading', { level: 2 }) ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}
        >
          H2
        </button>
        <button
          onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}
          className={`px-2 py-1 rounded ${editor.isActive('heading', { level: 3 }) ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}
        >
          H3
        </button>

        <div className="border-r mx-1 h-8"></div>

        {/* Text alignment */}
        <button
          onClick={() => editor.chain().focus().setTextAlign('left').run()}
          className={`px-2 py-1 rounded ${editor.isActive({ textAlign: 'left' }) ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}
        >
          Left
        </button>
        <button
          onClick={() => editor.chain().focus().setTextAlign('center').run()}
          className={`px-2 py-1 rounded ${editor.isActive({ textAlign: 'center' }) ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}
        >
          Center
        </button>
        <button
          onClick={() => editor.chain().focus().setTextAlign('right').run()}
          className={`px-2 py-1 rounded ${editor.isActive({ textAlign: 'right' }) ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}
        >
          Right
        </button>
        <button
          onClick={() => editor.chain().focus().setTextAlign('justify').run()}
          className={`px-2 py-1 rounded ${editor.isActive({ textAlign: 'justify' }) ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}
        >
          Justify
        </button>
      </div>

      <div className="flex flex-wrap gap-1">
        {/* Lists */}
        <button
          onClick={() => editor.chain().focus().toggleBulletList().run()}
          className={`px-2 py-1 rounded ${editor.isActive('bulletList') ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}
        >
          • List
        </button>
        <button
          onClick={() => editor.chain().focus().toggleOrderedList().run()}
          className={`px-2 py-1 rounded ${editor.isActive('orderedList') ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}
        >
          1. List
        </button>

        {/* Blockquote */}
        <button
          onClick={() => editor.chain().focus().toggleBlockquote().run()}
          className={`px-2 py-1 rounded ${editor.isActive('blockquote') ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}
        >
          Quote
        </button>

        {/* Code block */}
        <button
          onClick={() => editor.chain().focus().toggleCodeBlock().run()}
          className={`px-2 py-1 rounded ${editor.isActive('codeBlock') ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}
        >
          Code Block
        </button>

        <div className="border-r mx-1 h-8"></div>

        {/* Link */}
        <button
          onClick={() => setShowLinkInput(!showLinkInput)}
          className={`px-2 py-1 rounded ${editor.isActive('link') ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}
        >
          Link
        </button>
        {showLinkInput && (
          <div className="flex ml-1">
            <input
              type="text"
              placeholder="https://example.com"
              value={linkUrl}
              onChange={e => setLinkUrl(e.target.value)}
              className="px-2 py-1 border rounded"
            />
            <button onClick={addLink} className="px-2 py-1 bg-green-500 text-white rounded ml-1">
              Add
            </button>
          </div>
        )}

        {/* Image */}
        <button
          onClick={() => setShowImageInput(!showImageInput)}
          className="px-2 py-1 rounded bg-gray-200"
        >
          Image
        </button>
        {showImageInput && (
          <div className="flex ml-1">
            <input
              type="text"
              placeholder="https://example.com/image.jpg"
              value={imageUrl}
              onChange={e => setImageUrl(e.target.value)}
              className="px-2 py-1 border rounded"
            />
            <button onClick={addImage} className="px-2 py-1 bg-green-500 text-white rounded ml-1">
              Add
            </button>
          </div>
        )}

        {/* Table */}
        <button
          onClick={addTable}
          className="px-2 py-1 rounded bg-gray-200"
        >
          Table
        </button>

        <div className="border-r mx-1 h-8"></div>

        {/* Undo/Redo */}
        <button
          onClick={() => editor.chain().focus().undo().run()}
          disabled={!editor.can().undo()}
          className="px-2 py-1 rounded bg-gray-200 disabled:opacity-50"
        >
          Undo
        </button>
        <button
          onClick={() => editor.chain().focus().redo().run()}
          disabled={!editor.can().redo()}
          className="px-2 py-1 rounded bg-gray-200 disabled:opacity-50"
        >
          Redo
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
        types: ['heading', 'paragraph'],
        alignments: ['left', 'center', 'right', 'justify'],
        defaultAlignment: 'left',
      }),
      TextStyle,
      Color,
      Link.configure({
        openOnClick: false,
      }),
      Image,
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
    <div className="editor-container border rounded shadow">
      <MenuBar editor={editor} />
      <div className="px-4 pb-4">
        <EditorContent editor={editor} className="prose max-w-none min-h-64" />
      </div>
    </div>
  );
};

export default TiptapEditor;