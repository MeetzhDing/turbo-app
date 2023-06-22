import { RemixServer } from '@remix-run/react';
import type { EntryContext } from '@remix-run/server-runtime';
import handleRequest from '@vercel/remix-entry-server';

export default function (
  request: Request,
  responseStatusCode: number,
  responseHeaders: Headers,
  remixContext: EntryContext,
) {
  const remixServer = <RemixServer context={remixContext} url={request.url} />;
  return handleRequest(request, responseStatusCode, responseHeaders, remixServer);
}
