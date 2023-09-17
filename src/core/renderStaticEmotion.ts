/* istanbul ignore file */ // TODO: determine a way to test
import { cache } from '@emotion/css';
import createEmotionServer from '@emotion/server/create-instance';

export default async function renderStaticEmotion(html) {
  if (html === undefined) {
    throw new Error('did you forget to return html from renderToString?');
  }
  const { extractCritical } = createEmotionServer(cache);
  const { ids, css } = extractCritical(html);

  return { html, ids, css };
}
