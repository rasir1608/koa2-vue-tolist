
const jobDate = [
  {
    id: 6506,
    taskId: 2755,
    appId: 78,
    name: 'ok3lI_R[<xb',
    state: 'SUCCESS',
    scheduleTime: 1510223040000,
    createTime: 1510226561000,
    beginTime: 1510305738000,
    endTime: 1510305768000,
    retries: 4,
    args: null,
    taskType: 'SHELL',
    preJobIds: '',
    owners: '01235599,80002646',
    operator: '80002790',
  },
  {
    id: 8493,
    taskId: 2755,
    appId: 78,
    name: '32newcO1m`2',
    state: 'KILLED',
    scheduleTime: 1510291440000,
    createTime: 1510291442000,
    beginTime: 1510306536000,
    endTime: 1510306566000,
    retries: 1,
    args: null,
    taskType: 'HIVE',
    preJobIds: '00000ac3201711101200',
    owners: '01235599,80002646',
    operator: '80002790',
  },
  {
    id: 9022,
    taskId: 2755,
    appId: 78,
    name: 'J2GIJ`LW`o:==MfAVTX',
    state: 'WAIT',
    scheduleTime: 1510212240000,
    createTime: 1510227685000,
    beginTime: 1510305707000,
    endTime: 1510305737000,
    retries: 4,
    args: null,
    taskType: 'ETL',
    preJobIds: '',
    owners: '01235599,80002646',
    operator: '80002790',
  },
  {
    id: 7081,
    taskId: 2755,
    appId: 78,
    name: 'Y<_3p4nEtsnI',
    state: 'INIT',
    scheduleTime: 1510208640000,
    createTime: 1510227685000,
    beginTime: 1510305672000,
    endTime: 1510305702000,
    retries: 3,
    args: null,
    taskType: 'ZIP',
    preJobIds: '',
    owners: '01235599,80002646',
    operator: '80002790',
  },
  {
    id: 4790,
    taskId: 2755,
    appId: 78,
    name: '=1=E[AxXrg',
    state: 'EXEC',
    scheduleTime: 1510208640000,
    createTime: 1510227685000,
    beginTime: 1510305672000,
    endTime: 1510305702000,
    retries: 3,
    args: null,
    taskType: 'SHELL',
    preJobIds: '',
    owners: '01235599,80002646',
    operator: '80002790',
  },
  {
    id: 9889,
    taskId: 2755,
    appId: 78,
    name: 'y;l<`1dWuB',
    state: 'READY',
    scheduleTime: 1510208640000,
    createTime: 1510227685000,
    beginTime: 1510305672000,
    endTime: 1510305702000,
    retries: 3,
    args: null,
    taskType: 'HIVE',
    preJobIds: '',
    owners: '01235599,80002646',
    operator: '80002790',
  },
  {
    id: 5815,
    taskId: 2755,
    appId: 78,
    name: '?WRJ:E;a^3FTq',
    state: 'QUEUE',
    scheduleTime: 1510208640000,
    createTime: 1510227685000,
    beginTime: 1510305672000,
    endTime: 1510305702000,
    retries: 3,
    args: null,
    taskType: 'ETL',
    preJobIds: '',
    owners: '01235599,80002646',
    operator: '80002790',
  },
];
const jobLink = [
  {
    id: 6506,
    pre: [],
    sub: [8493, 5815],
  },
  {
    id: 9022,
    pre: [7081],
    sub: [],
  },
  {
    id: 7081,
    pre: [4790],
    sub: [],
  },
  {
    id: 8493,
    pre: [6506],
    sub: [5815],
  },
  {
    id: 5815,
    pre: [6506],
    sub: [4790],
  },
];
module.exports = {
  jobDate, jobLink,
};