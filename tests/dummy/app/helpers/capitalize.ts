import { helper } from '@ember/component/helper';

export function capitalize([params]: [string]/*, hash*/) {
  if (params.length === 0) return '';
  return `${params[0].toLocaleUpperCase()}${params.substring(1)}`;
}

export default helper(capitalize);
