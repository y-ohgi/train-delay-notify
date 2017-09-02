train-delay-notify
---

# 概要
マストドンに電車の遅延情報をお知らせ

# Setup
1. パッケージのインストール
    - `$ npm install`
2. 環境情報の編集
    - `$ cp .env.example .env && emacs .env`
    - `$ cp deploy.env.example deploy.env && emacs deploy.env`
3. デフォルトだとJST7:30にトゥートするので適宜変更
    - `$ emacs event_sources.json`
4. デプロイ
    - `$ npm run deploy`

## 環境情報
### .env
* `AWS_ACCESS_KEY`
    - AWS アクセスキー
* `AWS_SECRET_ACCESS_KEY`
    - AWS シークレットキー
* `AWS_ROLE_ARN`
    - Lambdaに紐付けるロール
    - ex) `arn:aws:iam::000000000000000:role/AWSLambdaBasicExecutionRole`

### deploy.env
* `MASTODON_HOST`
    - マストドンのホスト(ドメイン名)
* `MASTODON_ACCESS_TOKEN`
    - マストドンのアクセスキー
* `TARGET_ROUTES`
    - 遅延情報を取得したい路線
    - csv形式で複数路線の登録が可能
    - ex) `久大本線,山陰本線`
