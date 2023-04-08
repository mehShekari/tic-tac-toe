/**
 * @Rows
*/
export const getRows = (_value) =>
{
  const c = Math.sqrt(_value.length);

  return _value.reduce((_prev, _curr, _i) =>
  {
    let y = Math.floor(_i / c);
    let x = _i % c;

    _prev[y] = _prev[y] || [];
    _prev[y][x] = _curr;

    return _prev;
  }, []);
}

export const checkRows = (_temp, _type) =>
{
  const rows = getRows(_temp);
  
  const isDone =  rows.flatMap((_row) =>
  {
    return _row.every((_cell) =>
    {
      return  _cell.type !== null && _cell.type === _type;
    })
  })

  return isDone.some((_rowBool) =>
  {
    return _rowBool === true;
  })
}

/**
 * @Columns 
*/
export const getColumns = (_value) =>
{
  const c = Math.sqrt(_value.length);
  
  return _value.reduce((_prev, _curr, _i) =>
  {
    let x = Math.floor(_i / c);
    let y = _i % c;

    _prev[y] = _prev[y] || [];
    _prev[y][x] = _curr;

    return _prev;
  }, []);
}

export const checkColumns = (_temp, _type) =>
{
  const columns = getColumns(_temp);
 
  const isDone = columns.flatMap((_column) =>
  {
    return _column.every((_cell) =>
    {
      return _cell.type !== null && _cell.type === _type;
    })
  })
  return isDone.some((_columnBool) =>
  {
    return _columnBool === true;
  })
}

/**
 * @Cross 
*/
export const getCrosses = (_value) =>
{
  const c = Math.sqrt(_value.length);

  let xl = 0;
  let xr = c - 1;
  
  let prev = -1;
  let pow = 0;

  return _value.reduce((_prev, _curr, _i) =>
  {
    let x = Math.floor(_i / c);
    let curr = x;

    if(curr > prev)
    {
      pow++;
      let cr = xr * pow;
      let cl = (pow * pow);

      if((cl % 2) == 1)
      {
        cl = cl - 1;
      }

      if(pow < 3)
      {
        _prev[0] = _prev[0] || [];
        _prev[1] = _prev[1] || [];
      } 

      _prev[0][pow - 1] = _value[cl];
      _prev[1][pow - 1] = _value[cr];

    }; 

    prev = curr;

    return _prev;
  }, []);
}

export const checkCross = (_temp, _type) =>
{
  const crosses = getCrosses(_temp);

  const isDone = crosses.flatMap((_cross) =>
  {
    return _cross.every((_cell) =>
    {
      return _cell.type !== null && _cell.type === _type;
    })
  })

  return isDone.some((_crossBool) =>
  {
    return _crossBool === true;
  })
}

