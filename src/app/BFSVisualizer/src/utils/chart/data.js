const normalStyle = {
  background: '#63B3ED',
  color: 'white',
  width: 50,
}

const focusStyle = {
  background: 'red',
  color: 'white',
  width: 50,
}

export const getNodes = (focus) => [
  {
    id: '1',
    data: { label: 'START' },
    position: { x: 400, y: 0 },
    style: focus === 'START' ? focusStyle : normalStyle,
  },
  {
    id: '2',
    data: { label: 'A' },
    position: { x: 400, y: 70 },
    style: focus === 'A' ? focusStyle : normalStyle,
  },
  {
    id: '3',
    data: { label: 'B' },
    position: { x: 300, y: 150 },
    style: focus === 'B' ? focusStyle : normalStyle,
  },
  {
    id: '12',
    data: { label: 'J' },
    position: { x: 200, y: 250 },
    style: focus === 'J' ? focusStyle : normalStyle,
  },
  {
    id: '10',
    data: { label: 'K' },
    position: { x: 250, y: 250 },
    style: focus === 'K' ? focusStyle : normalStyle,
  },
  {
    id: '11',
    data: { label: 'L' },
    position: { x: 300, y: 250 },
    style: focus === 'L' ? focusStyle : normalStyle,
  },
  {
    id: '4',
    data: { label: 'C' },
    position: { x: 400, y: 150 },
    style: focus === 'C' ? focusStyle : normalStyle,
  },
  {
    id: '5',
    data: { label: 'D' },
    position: { x: 500, y: 150 },
    style: focus === 'D' ? focusStyle : normalStyle,
  },
  {
    id: '14',
    data: { label: 'M' },
    position: { x: 550, y: 250 },
    style: focus === 'M' ? focusStyle : normalStyle,
  },
  {
    id: '15',
    data: { label: 'N' },
    position: { x: 600, y: 250 },
    style: focus === 'N' ? focusStyle : normalStyle,
  },
  {
    id: '16',
    data: { label: 'O' },
    position: { x: 650, y: 250 },
    style: focus === 'O' ? focusStyle : normalStyle,
  },
  {
    id: '6',
    data: { label: 'E' },
    position: { x: 400, y: 250 },
    style: focus === 'E' ? focusStyle : normalStyle,
  },
  {
    id: '17',
    data: { label: 'F' },
    position: { x: 450, y: 250 },
    style: focus === 'F' ? focusStyle : normalStyle,
  },
  {
    id: '18',
    data: { label: 'G' },
    position: { x: 500, y: 350 },
    style: focus === 'G' ? focusStyle : normalStyle,
  },
  {
    id: '19',
    data: { label: 'H' },
    position: { x: 550, y: 350 },
    style: focus === 'H' ? focusStyle : normalStyle,
  },
  {
    id: '20',
    data: { label: 'I' },
    position: { x: 600, y: 350 },
    style: focus === 'I' ? focusStyle : normalStyle,
  },
  {
    id: '7',
    data: { label: 'W' },
    position: { x: 300, y: 350 },
    style: focus === 'W' ? focusStyle : normalStyle,
  },
  {
    id: '8',
    data: { label: 'X' },
    position: { x: 400, y: 350 },
    style: focus === 'X' ? focusStyle : normalStyle,
  },
]

export const initialEdges = [
  { id: 'e1-2', source: '1', target: '2' },
  { id: 'e2-3', source: '2', target: '3' },
  { id: 'e2-4', source: '2', target: '4' },
  { id: 'e2-5', source: '2', target: '5' },
  { id: 'e4-6', source: '4', target: '6' },
  { id: 'e6-7', source: '6', target: '7' },
  { id: 'e6-8', source: '6', target: '8' },
  { id: 'e6-9', source: '6', target: '9' },
  { id: 'e3-10', source: '3', target: '10' },
  { id: 'e3-11', source: '3', target: '11' },
  { id: 'e3-12', source: '3', target: '12' },
  { id: 'e4-13', source: '4', target: '13' },
  { id: 'e5-14', source: '5', target: '14' },
  { id: 'e5-15', source: '5', target: '15' },
  { id: 'e5-16', source: '5', target: '16' },
  { id: 'e4-17', source: '4', target: '17' },
  { id: 'e17-18', source: '17', target: '18' },
  { id: 'e17-19', source: '17', target: '19' },
  { id: 'e17-20', source: '17', target: '20' },
]
