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
          resultObj.next = `${(next * 1) + (buttonName * 1)}`;
        } else {
          resultObj.next = buttonName;
        }
      } else if (next) {
        resultObj.next = `${(next * 1) + (buttonName * 1)}`;
        resultObj.total = null;
      } else {
        resultObj.next = buttonName;
        resultObj.total = null;
      }
      break;
    case 'AC':
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
      } else if (obj.total) {
        resultObj.total = `${-1 * parseFloat(total)}`;
      } else {
        resultObj = {};
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

  return resultObj;
};

export default calculate;
