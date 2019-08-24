import cookie from 'cookie';

export function get(req, res, next) {
  res.writeHead(200, {
    'Content-Type': 'application/json',
  });

  if (req.headers.cookie) {
    const cookies = cookie.parse(req.headers.cookie);
    return res.end(JSON.stringify(JSON.parse(cookies['_wm_delivery_address'] || 'null')));
  }
  return res.end(JSON.stringify('null'));
}
