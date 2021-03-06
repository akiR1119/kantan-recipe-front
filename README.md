# このアプリについて

- このアプリはTypeScript＋React Hooksの学習のために制作したものとなります。  
- 自炊のためのレシピを簡単に記録し、閲覧するためのアプリです（一部機能未実装）。  
- TypeScript・Reactほぼ未経験の状態から１週間でどれだけ開発ができるかチャレンジし、新規技術を習得するというテーマのもとで開発が行われました。

公開先: [https://kantan-recipe-front.herokuapp.com/](https://kantan-recipe-front.herokuapp.com/)

# アプリ概要
## 開発環境

|ソフトウェア      |バージョン|
|:-------------|------:|  
|macOS Catalina|10.15.7|  
|Node.js       |v15.8.0|  
|TypeScript    |4.3.4  |  
|npm           |7.18.1 |  
|React         |17.0.2 |  

- 開発メンバー: １人(akiR1119)  
- 開発期間: 2021/06/23~2021/06/29, 2021/7/3  
- 開発者のスキルについて: 
  - PHP、Rubyでのサーバーサイド開発経験あり。
  - jQueryを使ったフロントエンド開発の経験あり。
  - Reactは公式サイトのチュートリアルを触れたことがある程度。
  - TypeScriptの経験はないが、[TypeScriptでReact Hooksに入門するチュートリアル - Qiita](https://qiita.com/yonetty/items/ad19bddc26806bb49cef)を参考にして学習を行った。

## 機能
- 自分の自炊レシピを登録する
  - レシピ名、材料、手順を記録できる。（現時点ではタブを閉じた際に消えてしまう）
  - 記録したレシピを一覧できる。

# 開発の目的
- TypeScriptでの開発実績を作る
- Reactでの開発実績を作る
- 現時点でのWebアプリ制作能力を試す
- 作業量の見積もりとスケジュール管理の訓練をする

## 技術/デプロイ先選定の理由
- TypeScriptを選んだ理由
  - 静的型付け言語の開発技術を習得したいから
- React(Hooks)を選んだ理由
  - 業務でサーバーサイド開発を行う中で、フロントエンドの技術がないと作れるものに限界があると感じたから
  - React開発側が従来のクラスを使った書き方を非推奨とし、Hooksを使った関数コンポーネントの書き方を推奨としているから
    - Hooksの導入により関数でコンポーネントを書くことができるようになっている。
- Herokuを選んだ理由
  - Gitを使用して短時間でデプロイができるから

## 目標
- なんでもいいので１週間後に動くものをデプロイする
  - 今まで個人的にアプリ制作に取り組んできたが、色々と機能を考えているうちに規模が大きくなってしまって挫折することが多かった。今回は状況にかかわらず１週間後に必ずデプロイをすることを設定し、進捗に関係なく公開することにした。
  - ウォーターフォール型ではなく、プロトタイピングやアジャイルに近い方法を試してみたかった。
- 作業量の見積もりを行い、スケジュールを管理する
  - 開発着手前にタスクを分解しそれぞれの作業量を見積もった。１週間で環境構築〜デプロイを完結させるために、確保できる作業時間以上のタスクを行わないことにした。

## 結果
### できたこと
- アプリを公開することができた。
- １週間で見積もった作業を一通り実装することができた。

### できなかったこと
- 当初想定していた機能が見積もりから漏れていた。
  - モーダル画面を開く/閉じる動作はコンポーネントの機能として想定していなかったため、実装が間に合わなかった。
  - 入力したデータを保存する機能の見積もりが漏れていた。現時点では入力はできても保存がされない。LocalStrage等で保存する機能を想定しておくべきだった。
  - 見積もりから漏れた原因としては、これらの機能は最上位コンポーネントに実装されるものだが、見積もりは下位のコンポーネントしか行っていなかったことにある。

## 今後実装したいこと
- react-modalを使ったモーダル画面のON-OFFを実装
- 登録フォームで追加した材料・手順を削除する機能
- 登録フォームでのバリデーションを実装
- RailsでAPIを作り、ユーザー認証とデータの登録を行えるようにする

## 開発の結果得られたもの（感想）
- ゼロからアプリ制作を行うことで短期間のうちに濃い学びを得ることができた。ReactについてもTypeScriptについてもまだまだ学ぶべき点が残されているが、知識が不足していても開発に手をつけたほうが早く身につくと感じた。
- 「１週間でデプロイまで行う」と決めることがいい手段だとわかった。期限がきたら稚拙な状態でも公開することにしていたので、スケジュールへの意識が高まり効率よく開発が行えた。また、設計が肥大化するのを防いで期間内に実現可能なタスクに集中できた。
- コンポーネントを設計するための知識が欠けていることがわかった。stateをどこで管理するか、stateを変更する関数をどこに持たせるか、関数やファイルの命名、ディレクトリ構成などを学ばないと可読性の低いコードになったり、手戻りが発生しやすくなってしまう。
