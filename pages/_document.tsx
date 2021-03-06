import Document, { Head, Html, Main, NextScript } from "next/document";

export default class MyDocument extends Document {

    render() {

        return (
            <Html>
                <Head>
                    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                    <link rel="preconnect" href="https://fonts.googleapis.com" />
                    <link rel="preconnect" href="https://fonts.gstatic.com" />
                    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;900&family=Roboto:ital,wght@0,400;0,700;1,900&display=swap" rel="stylesheet" />
                    <link href="https://fonts.googleapis.com/css2?family=Barlow:wght@400;600;900&family=Poppins:wght@400;500;900&family=Roboto:ital,wght@0,400;0,700;1,900&display=swap" rel="stylesheet" />

                    <link rel="shortcut icon" href="./favicon.png" type="image/png" />
                </Head>

                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}