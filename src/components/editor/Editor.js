import React, { useState, useEffect, useContext } from 'react';
import LinkContext from '../../context/link/linkContext';

const Editor = () => {
  const linkContext = useContext(LinkContext);
  const { addLink, clearLinks, links, code } = linkContext;

  const [clipboardAvailable, setClipboardAvailable] = useState(false);
  const [link, setLink] = useState();

  useEffect(() => {
    if (
      navigator.clipboard &&
      navigator.clipboard.read &&
      navigator.clipboard.write
    ) {
      setClipboardAvailable(true);
    } else {
      setClipboardAvailable(false);
    }
    console.log('useEffect');
  }, []);

  const onChange = (e) => setLink(e.target.value);

  const handleAddlink = () => {
    addLink(link);
    setLink('');
  };

  const handleClearLinks = () => {
    clearLinks();
  };

  const handlePasteFromClipboard = async () => {
    if (!clipboardAvailable) return; // 実際は呼ばれない

    try {
      const text = await navigator.clipboard.readText();
      setLink(text);
    } catch (err) {
      alert('Failed to read clipboard contents: ', err);
    }
  };

  const handleClearLink = () => {
    setLink('');
  };

  const handleCopyToClipboard = async () => {
    if (!clipboardAvailable) return; // 実際は呼ばれない

    try {
      await navigator.clipboard.writeText(code);
   } catch (err) {
      console.error('Failed to copy: ', err);
   }
  };

  return (
    <div>
      <div>
        {links.length !== 0 && (
          <button className='btn btn-danger' onClick={handleClearLinks}>
            全リンクの消去
          </button>
        )}
        <h2>追加リンク</h2>
        <textarea
          cols='50'
          rows='10'
          value={link}
          onChange={onChange}
        ></textarea>
        {clipboardAvailable && (
          <button className='btn btn-dark' onClick={handlePasteFromClipboard}>
            クリップボードから読み込み
          </button>
        )}
        <button className='btn btn-primary' onClick={handleAddlink}>
          リンクの追加
        </button>
        {link !== '' && (
          <button className='btn btn-danger' onClick={handleClearLink}>
            クリア
          </button>
        )}
      </div>
      {clipboardAvailable ? (
        <p>
          このブラウザーでは、クリップボード非同期APIがサポートされています。
        </p>
      ) : (
        <p>
          このブラウザーでは、クリップボード非同期APIがサポートされていません。詳しくは
          <a
            href='https://caniuse.com/#feat=mdn-api_clipboard_read'
            target='_blank'
            rel='noopener noreferrer'
          >
            こちら
          </a>
          をご覧ください。
        </p>
      )}
      {links.length !== 0 && (
        <button className='btn btn-primary' onClick={handleCopyToClipboard}>
          コードをクリップボードへコピー
        </button>
      )}
    </div>
  );
};

export default Editor;
