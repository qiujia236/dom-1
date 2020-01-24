dom = {
  find(node) {
    if (node === undefined) {
      alert("请传一个参数");
      return false;
    }
    if (arguments.length > 1) {
      alert("只能传一个参数");
      return false;
    }
    let queryStr = node.split(">");
    let topNode;
    if (queryStr.length > 1) {
      for (let i = 0; i < queryStr.length; i++) {
        if (i === 0) {
          topNode = document.querySelectorAll(queryStr[i]);
        } else {
          return topNode[0].querySelectorAll(queryStr[i]);
        }
      }
    } else if (queryStr.length === 1) {
      return document.querySelectorAll(queryStr);
    }
  },

  style(node, attr, value) {
    if (arguments.length === 3) {
      node.style[attr] = value;
    } else if (arguments.length === 2) {
      if (typeof attr === "string") {
        return node.style[attr];
      } else if (attr instanceof Object) {
        for (let key in attr) {
          node.style[key] = attr[key];
        }
      }
    }
  },

  each(nodeList, fn) {
    for (let i = 0; i < nodeList.length; i++) {
      fn.call(null, nodeList[i]);
    }
  }

  //   each(nodeList) {
  //     [].slice.call(nodeList).forEach(function(element) {
  //       console.log(element);
  //     });
  //   }
};

let x = dom.find(".foo");
dom.style(x[0], "border", "1px solid red");
// console.log(dom.style(x[0], { border: "1px solid red" }));
dom.each(x, n => console.log(n));

// dom.each(x);
