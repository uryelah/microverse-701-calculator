import operate from './operate';

const calculate = (obj, buttonName) => {
  const { next, operation, total } = obj;

  if (buttonName === '0' && next === '0') {
    return {};
  }

  let resultObj = { ...obj };

  switch (buttonName) {
    case '0':
    case '1':
    case '2':
    case '3':
    case '4':
    case '5':
    case '6':
    case '7':
    case '8':
    case '9':
      if (operation) {
        if (next) {
          resultObj.next = next + buttonName;
        } else {
          resultObj.next = buttonName;
        }
      } else if (next) {
        resultObj.next = next + buttonName;
        resultObj.total = null;
      } else {
        resultObj.next = buttonName;
        resultObj.total = null;
      }
      break;
    case 'AC':
      resultObj.calcPath = [];
      resultObj.next = null;
      resultObj.total = null;
      resultObj.operation = null;
      break;
    case '.':
      if (next) {
        if (next.includes('.')) {
          resultObj = {};
        } else {
          resultObj.next = `${next}.`;
        }
      } else if (operation) {
        resultObj.next = '0.';
      } else if (total) {
        if (total.includes('.')) {
          resultObj = {};
        } else {
          resultObj.total = `${total}.`;
        }
      } else {
        resultObj.total = '0.';
      }
      break;
    case '=':
      if (next && operation) {
        resultObj.total = operate(total, next, operation);
        resultObj.next = null;
        resultObj.operation = null;
      } else {
        resultObj = {};
      }
      break;
    case '+/-':
      if (next) {
        resultObj.next = `${-1 * parseFloat(next)}`;
      } else if (total) {
        resultObj.total = `${-1 * parseFloat(total)}`;
      } else {
        resultObj = {};
      }
      break;
    case '%':
      if (total) {
        resultObj.total = operate(total, !next ? 100 : next, buttonName);
        resultObj.next = null;
        resultObj.operation = null;
      } else {
        resultObj.total = null;
        resultObj.next = null;
        resultObj.operation = null;
        resultObj.calcPath = [];
      }
      break;
    default:
      if (operation) {
        resultObj.total = operate(total, next, operation);
        resultObj.next = null;
        resultObj.operation = buttonName;
      } else if (!next) {
        resultObj.operation = buttonName;
      } else {
        resultObj.total = next;
        resultObj.next = null;
        resultObj.operation = buttonName;
      }
  }

  if (resultObj.next) {
    if (buttonName === '.') {
      resultObj.calcPath.splice(resultObj.calcPath.length - 1, 1);
      resultObj.calcPath[resultObj.calcPath.length - 1] = resultObj.next;
    } else if (resultObj.calcPath[resultObj.calcPath.length - 1] && resultObj.calcPath[resultObj.calcPath.length - 1].match(/\./)) {
      resultObj.calcPath[resultObj.calcPath.length - 1] = resultObj.next;
    } else {
      resultObj.calcPath.push(resultObj.next);
    }
  }

  if (resultObj.operation
    && resultObj.calcPath[resultObj.calcPath.length - 1] !== resultObj.operation) {
    if (['-', '+', 'x', 'X', '÷', '%', '+/-', '/'].includes(resultObj.calcPath[resultObj.calcPath.length - 1])) {
      resultObj.calcPath[resultObj.calcPath.length - 1] = resultObj.operation;
    } else if (buttonName !== '.') {
      resultObj.calcPath.push(resultObj.operation);
    }
  }


  return resultObj;
};

export default calculate;
