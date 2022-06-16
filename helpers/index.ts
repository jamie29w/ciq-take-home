import { ValueFormatterParams } from 'ag-grid-community';

import { ServerLogEntry } from '../models';

interface FormattedServerLogEntry extends Omit<ServerLogEntry, 'timestamp'> {
  timestamp: Date;
}

export const formatData = (
  data: ServerLogEntry[]
): FormattedServerLogEntry[] => {
  return data.map((data) => ({ ...data, timestamp: new Date(data.timestamp) }));
};

export const gridDateFormatter = (date: ValueFormatterParams) => {
  const { value } = date;

  return value.toLocaleDateString() + ' ' + value.toLocaleTimeString();
};
