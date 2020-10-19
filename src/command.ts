export const command = (cmd: string, opts?: { [key: string]: string }) => {
  if (!opts) {
    return cmd;
  }
  const options = Object.entries(opts)
    .filter(([key, value]) => key && value && value !== 'false')
    .map(convert).join(' ');
  return `${cmd} ${options}`
}

const convert = ([key, value]: [string, string]) => {
  if (value === 'true')
    return `-${key}`;
  if (value.includes(' '))
    return `-${key} "${value}"`;
  return `-${key} ${value}`;
};
