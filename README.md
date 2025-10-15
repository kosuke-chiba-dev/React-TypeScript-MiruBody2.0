# MiruBody2.0 - 体型管理のための食事スコアリングアプリ

## アップデート内容
- ブラウザをリロードすると、選択した項目の情報が消えてしまうことが不便だと感じ、LocalStorageを用いて、ブラウザにデータを保存できるようにしました。したがって、ブラウザをリロードしても、同じデバイスの同じブラウザならば、ブラウザをリロードしてもデータが消えないようになりました。
- 2.0でReactを使った理由
  <br>1.このLocalStorageの機能を実装するにあたって、ReactのuseEffectフックを利用することで、より直感的に実装できるから。
  <br>2.部品毎にコンポーネント化することで、開発者がコードを理解しやすくなるから。
  <br>3.将来的に他のページを作ったりなど、ルーティングを追加するとなった場合にReactのreact-router-domを使うと実装しやすいから。

## 現状のニーズ
- 食事内容を“良い/悪い”の感覚ではなく、**数値（スコア）**で簡単に把握したい
- 体型管理（減量・増量・維持）のために、毎日の食事の質を素早くチェックしたい
- 面倒な記録や複雑なグラフではなく、その日の総合スコアを一目で確認したい

## 解決手法
- 食事項目を「プラス（体に良い）」と「マイナス（控えたい）」に分け、各項目に**スコア（+5〜-5）**を設定
- その日の食事で摂った（または該当した）項目を選択すると、合計点を自動集計し「今日のスコア」として表示
- スコアの可視化により、過不足の気づき → 行動修正 → 体型管理の継続をサポート

## 想定ユーザー
- 体型・健康を気にする20代後半〜30代の男女
- 「細かいカロリー計算は続かないが、良い/悪いのバランスを直感的に整えたい」人

## MiruBody アプリの機能
- 今日のスコア表示：円形ゲージ中央に合計点を大きく表示
- プラス/マイナス食材の選択：クリック操作で即時反映（例：葉物サラダ +5、砂糖入りドリンク -5 など）
- グループ別表示：
　プラス（体に良い）
　マイナス（控えたい）
- 軽量・シンプルUI：スマホ/PCで見やすいレイアウト（レスポンシブ前提のスタイル）

## 名前の由来（MiruBody）
- **Body（からだ）**を Miru（見る） → 「MiruBody」
- まずは**“見える化”**して気づきを得ることが、体型管理の第一歩という考えから命名


<br><br><br><br><br><br><br>

## スクリーンショット

### 1-1. 初期表示(PC)
<p align="left">
  <img src="/screenshots/mirubody-react-xl1.svg" width="50%" alt="MiruBody初期表示1(PC)" />
</p>

<p align="left">
  <img src="/screenshots/mirubody-react-xl2.svg" width="50%" alt="MiruBody初期表示2(PC)" />
</p>
<br><br><br>

### 1-2. 初期表示(SP)
<p align="left">
  <img src="/screenshots/mirubody-react-s1.svg" width="50%" alt="MiruBody初期表示1(SP)" />
</p>

<p align="left">
  <img src="/screenshots/mirubody-react-s2.svg" width="50%" alt="MiruBody初期表示2(SP)" />
</p>
<br><br><br><br><br><br><br>

### 2-1. 実際に、複数項目を選択した際の表示(PC)
<p align="left">
  <img src="/screenshots/mirubody-react-result-xl1.svg" width="50%" alt="実際に、複数項目を選択した際の表示1(PC)" />
</p>

<p align="left">
  <img src="/screenshots/mirubody-react-result-xl2.svg" width="50%" alt="実際に、複数項目を選択した際の表示2(PC)" />
</p>

<br><br><br>
### 2-2. 実際に、複数項目を選択した際の表示(SP)
<p align="left">
  <img src="/screenshots/mirubody-react-result-s1.svg" width="50%" alt="実際に、複数項目を選択した際の表示1(SP)" />
</p>

<p align="left">
  <img src="/screenshots/mirubody-react-result-s2.svg" width="50%" alt="実際に、複数項目を選択した際の表示2(SP)" />
</p>
