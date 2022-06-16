import { ChangeEvent, useEffect, useMemo, useState } from 'react';
import type { NextPage } from 'next';

import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
import axios from 'axios';
import { uniqBy } from 'lodash';

import { Input, Label, Row, Data, Page } from './styles';
import { formatData, gridDateFormatter } from '../helpers';
import { ServerLogEntry } from '../models';

const Home: NextPage = () => {
  const [logData, setLogData] = useState<ServerLogEntry[]>([]);
  const [uploadMinSize, setUploadMinSize] = useState<number>(0);

  const columnDefs = [
    { field: 'id', width: 100 },
    {
      field: 'timestamp',
      filter: 'agDateColumnFilter',
      valueFormatter: gridDateFormatter,
      width: 220,
    },
    { field: 'username', filter: true, width: 140 },
    { field: 'operation', width: 120 },
    { field: 'size', width: 100 },
  ];

  useEffect(() => {
    axios.get('http://localhost:3000/api/logs').then((res): void => {
      const { data } = res;

      // TODO: Resolve TS warning
      setLogData(formatData(data));
    });
  }, []);

  // Memoized because logs are generally a large data set to traverse
  const numberOfUniqueUsers = useMemo(
    () => uniqBy(logData, 'username').length,
    [logData]
  );

  // Memoized because logs are generally a large data set to traverse
  const numberOfUploadsLargerThanX = useMemo(() => {
    return logData?.filter(({ size }) => size > uploadMinSize).length;
  }, [logData, uploadMinSize]);

  return (
    columnDefs.length > 0 && (
      <Page className="ag-theme-alpine" style={{ width: 800, height: 500 }}>
        <AgGridReact
          rowData={logData} // Row Data for Rows
          columnDefs={columnDefs} // Column Defs for Columns
        />

        <Row>
          <Label>Unique Users: </Label>
          <Data>{numberOfUniqueUsers}</Data>
        </Row>

        <Row>
          <Label>Number of uploads larger than: </Label>
          <Input
            name="upload-min-size-filter"
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setUploadMinSize(Number(e.target.value))
            }
          />
          <Data>{numberOfUploadsLargerThanX}</Data>
        </Row>
      </Page>
    )
  );
};

export default Home;
