import React, { useContext } from 'react';
import LinkContext from '../../context/link/linkContext';

const Preview = () => {
  const linkContext = useContext(LinkContext);

  let { code } = linkContext;

  return (
    <>
      <h2>プレビュー</h2>
      <div className='card' dangerouslySetInnerHTML={{ __html: code }}/>
    </>
  );
};

export default Preview;
