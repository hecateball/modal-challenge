# Vue 3 + Typescript + Vite
Vue 3 + Typescript + Viteのからっぽプロジェクトテンプレートです。

## つかいかた
cloneしてnpm installしてください。

```shell
npm install
```

## ローカル実行
`npm run dev`をするとlocalhost:3000にアプリが立ち上がります。

```shell
npm install
```

# 細かな話

## ディレクトリ構成
レビュー時に共通理解があると助かるため、とりあえず今回は以下の構成を用意しました。
この構成は崩さないでください。

### src
現状のままにしてください。新しいファイルをこのディレクトリ直下に置く必要はないはずです。

### src/pages
ページコンポーネントをおいてください。
（今回の演習では特にファイルを追加する必要はないと思いますが。）

ここにファイルを追加した場合は、router.tsを編集する必要があります。

### src/components
ページコンポーネント、あるいは別のコンポーネントから読み込まれるコンポーネントを配置してください。

### src/composables
コンポジション関数をおいて下さい。

### src/assets
画像やCSSなどの静的なアセットのうち、ビルドツールによるバンドルの対象とするものをおいてください。

### public
静的なアセットのうち、ビルドツールによるバンドルが不要なものをおいてください。

## import 
import は `~/hoge/fuga` のスタイルで行ってください。先頭にスラッシュを付けてはいけません。
（`~` は `src` を指しています。）

`<template>`内からassetsディレクトリの中身を参照する場合は、
`/~/hoge`のようにスラッシュで開始してください。

# Modal Challenge
今回の実装課題です。
デザインは細かいこと言いません。なんとなく雰囲気が伝わればとりあえずOKとします。

目標はLv.1をかんぺきにこなすことです。なんとかうごくLv.2やLv.3よりも、美しいコードによって実現されたLv.1を目指してください。

## ルール
- 全編を通して、Vuexの使用を禁止します。
- その他の外部ライブラリの使用は禁止しませんが、Vueの標準機能だけで完遂できるように課題を設計したので、使う場合はキビしく理由が追求されるものとおもってくださいw
- コードをリモートにpushする前にかならずprettierを通してください。へんなフォーマットのコードをpushするとレビュワーがキレ散らかします。
  - 方法は指定しませんが、IDEのOn Save（保存時）にフォーマッタを走らせるのがよいでしょう。わからん人は `prettier -w src` してください。 

## Lv.1 単純なモーダル
ボタンを押すことによって、モーダルウィンドウを開閉する機能を作ってください。
Vue 3の機能を最大限活用し、最も美しいコードを書いてください。

1. モーダルウィンドウを開くボタンを実装してください。モーダル表示時はオーバーレイ（モーダルウィンドウと下の画面の間に挟まる黒いレイヤー）を表示してください。
2. モーダルウィンドウ内にはそのモーダルウィンドウを閉じるボタンを置いてください。
3. オーバーレイ部をクリックしたらモーダルウィンドウを閉じてください。
4. モーダルウィンドウが閉じられている間、オーバーレイも閉じられているようにしてください。

## Lv.2 複数のモーダル
最大で3つのモーダルを表示してください。

1. 3つのチェックボックスと1つのボタンを配置して、モーダルウィンドウを最大で3つ同時に表示する機能を実装してください。複数のウィンドウを表示する場合でも、オーバーレイは1枚でOKです。
2. 各チェックボックスと3つのモーダルをそれぞれ対応させてください。
   - チェックボックス1にチェックが入っている状態でボタンを押すと、モーダルAを開く
   - チェックボックス2にチェックが入っている状態でボタンを押すと、モーダルBを開く
   - チェックボックス3にチェックが入っている状態でボタンを押すと、モーダルCを開く
3. モーダルの重なり順は、常に モーダルC > モーダルB > モーダルA > オーバーレイ > 元の画面 の順とします。非表示のモーダルは単に存在しないものとして無視してください。
4. 各モーダルには、それぞれ自分自身を閉じるボタンをおいてください。 
5. すべてのモーダルウィンドウが非表示になる場合は、同時にオーバーレイを閉じて下さい。モーダルが1枚でも表示されている場合は、オーバーレイを常に表示してください。
6. オーバーレイをクリックしたら全てのモーダルを閉じてください（結果的にオーバーレイも閉じられるはずです）。

## Lv.3 無限のモーダル
Lv.2の仕様を拡張し、任意の数のモーダルを表示できるようにしてください。
何も深いことは考えていませんが、たぶんチェックボックスを増やしたり減らしたりできるボタンを置くことになるでしょうな。

## 発展課題
余力のある人は以下の課題にも取り組んでみてください。

- tailwindcssによるスタイリングを行ってください。
- [<script setup>](https://github.com/vuejs/rfcs/blob/sfc-improvements/active-rfcs/0000-sfc-script-setup.md) に挑戦してください。
- jestを用いてテストを書いてください（ぶっちゃけこれは難しいので、軽い気持ちで手を出すことはおすすめしません ）。