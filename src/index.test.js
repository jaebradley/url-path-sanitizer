import sanitizeURLPath from '.';

describe('sanitizeURLPath', () => {
  it('does not change URL path that does not have a digit', () => {
    const url = 'a/b/c/d';
    expect(sanitizeURLPath({ url })).toEqual(url);
  });

  it('does not change URL path if is digit but whitelisted', () => {
    const pathPart = '1';
    const url = `a/b/${pathPart}/d`;
    const whitelist = [pathPart];
    expect(sanitizeURLPath({ url, whitelist })).toEqual(url);
  });

  it('does change URL path if is digit and not whitelisted', () => {
    const url = '1/2/3/4';
    const expected = '[:id]/[:id]/[:id]/[:id]';
    expect(sanitizeURLPath({ url })).toEqual(expected);
  });

  it('does change placeholder', () => {
    const url = '1/2/3/4';
    const placeholder = 'jae';
    const expected = `${placeholder}/${placeholder}/${placeholder}/${placeholder}`;
    expect(sanitizeURLPath({ url, placeholder })).toEqual(expected);
  });
});
