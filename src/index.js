import hasADigit from 'has-a-digit';

const sanitizeURLPath = ({ url, placeholder = '[:id]', whitelist = [] }) => url.split('/').map((part) => {
  if (hasADigit(part) && whitelist.indexOf(part) < 0) {
    return placeholder;
  }
  return part;
}).join('/');

export default sanitizeURLPath;
