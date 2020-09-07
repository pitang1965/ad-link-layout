import React, { useReducer, useEffect } from 'react';
import LinkContext from './linkContext';
import linkReducer from './linkReducer';
import { ADD_LINK, CLEAR_LINKS, SET_CODE } from '../types';

const LinkState = (props) => {
  const initialState = {
    links: [],
    code: null,
  };

  const [state, dispatch] = useReducer(linkReducer, initialState);

  useEffect(() => {
    dispatch({
      type: SET_CODE,
      payload: buildCode(),
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state.links]);

  const buildCode = () => {
    const beforeAllLinks = '<div style="display: flex;">';
    const beforeEachLink = '<div style="margin-right: 10px;">';
    const afterEachLink = '</div>';
    const afterAllLinks = '</div>';

    const code =
      state.links.length === 0
        ? '<div style="height:240px">リンクを追加してください</div>'
        : state.links.reduce(
            (code, link) => code + beforeEachLink + link + afterEachLink,
            beforeAllLinks
          ) + afterAllLinks;

    return code;
  };

  // リンクを設定
  const addLink = (link) => {
    dispatch({
      type: ADD_LINK,
      payload: link,
    });
  };

  // 全リンクをクリア
  const clearLinks = () => {
    dispatch({
      type: CLEAR_LINKS,
    });
    dispatch({
      type: SET_CODE,
      payload: null,
    });
  };

  return (
    <LinkContext.Provider
      value={{
        links: state.links,
        code: state.code,
        addLink,
        clearLinks,
      }}
    >
      {props.children}
    </LinkContext.Provider>
  );
};

export default LinkState;
