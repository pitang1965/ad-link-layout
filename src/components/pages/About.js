import React, { Fragment } from 'react';
import SampleCode from './sampleCode';

const About = () => {
  return (
    <Fragment>
      <h1>このアプリについて</h1>
      <p>
        本ツールは複数のアフィリエイトリンク（タグ）を横並びさせるためのショートコードを生成します。
      </p>
      <div className='card' dangerouslySetInnerHTML={{ __html: SampleCode }} />
      <p>
        例えばAmazonのText+Imageリンクを3つ合成して次のような表示を行うコードを取得できます。
        例えば次のような流れです。
      </p>
      <br/>
      <ol>
        <li>他のブラウザ（タブ）でリンクコードをコピーする。</li>
        <li>本アプリの[クリップボードから読み込み]をクリックする。</li>
        <li>追加リンクにペーストされた内容を確認の上[リンクの追加]ボタンをクリックする。</li>
        <li>1から3を必要なだけ繰り返す。</li>
        <li>プレビューされた内容で良ければ[コードをクリップボードへコピー]ボタンをクリックする。</li>
        <li>クリップボードの内容を他のアプリで使用する。例えば、WordPressでショートコードとして使う。</li>
      </ol>
      <p>
        作成者<i class='fab fa-twitter'></i>:{' '}
        <a href='https://twitter.com/pitang1965'>@pitang1965</a>
      </p>
      <br />
      <p>よろしければ我が家のメダカを見てね～。</p>
      <iframe
        title='About'
        width='560'
        height='315'
        src='https://www.youtube.com/embed/4e9PS8PYrHo'
        frameborder='0'
        allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture'
        allowfullscreen
      ></iframe>
    </Fragment>
  );
};

export default About;
