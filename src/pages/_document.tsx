/* istanbul ignore file */ // TODO: determine a way to test
import Document, {
  DocumentContext,
  DocumentInitialProps,
  Head,
  Html,
  Main,
  NextScript,
} from 'next/document';

import renderStaticEmotion from '../core/renderStaticEmotion';

export default class AppDocument extends Document {
  static async getInitialProps(ctx: DocumentContext): Promise<DocumentInitialProps> {
    const page = await ctx.renderPage();
    const { css, ids } = await renderStaticEmotion(page.html);
    const initialProps = await Document.getInitialProps(ctx);

    return {
      ...initialProps,
      styles: (
        <>
          {initialProps.styles}
          <style data-emotion={`css ${ids.join(' ')}`} dangerouslySetInnerHTML={{ __html: css }} />
        </>
      ),
    };
  }
  render() {
    return (
      <Html lang="en">
        <Head>
          <meta name="description" content="Low Fares Done Right" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
