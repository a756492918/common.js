/**
 * 分页页功能
 * @param {*} cur 当前页
 * @param {*} tot 总页数
 * @param {*} num 0 首页 1 下一页 -1 上一页
 * page:{
   PageSize:10,   
   PageIndex:1,
   TotalCount:0,
   PageCount:0
}
 */
function PG_toIndex (cur, tot, num) {
  if (cur > tot || num == tot) {
    return tot
  };
  if (num === void (0)) {
    return cur;
  };
  if (cur < 1 || isNaN(cur) || num === 0) {
    return 1
  }
  var page = cur * 1 + num * 1;
  if (page >= 1 && page <= tot) {
    return page;
  } else {
    return cur
  }

}


/**
 * 分页跳转
 * 最小页码不能小于等于1，当页码大于或等于总页码数时，直接返回总页数
 * @param {*} tot 总页数
 * @param {*} num 跳转页数
 */
function PG_toPage (tot, num) {
  if (isNaN(num) || num <= 1) {
    return 1;
  }
  if (num >= tot) {
    return tot;
  }
  return num;
}


/** 
 * 将接口返回的分页数据赋值给页面展示的分页对象中。
 * @param {*} 页面显示的page
 * @param {*} 后台返回的page
 */
function Page_transForm (src, dest) {
  src.PageIndex = dest.PageIndex;
  src.TotalCount = dest.PageIndex;
  src.PageCount = des.PageIndex;
  if (dest.PageSize) {
    src.PageSize = dest.PageSize
  }
}


/**
 * 获取报表查询提示语
 * @param {*} type 
 */
function getTableMsg (type) {
  var msgs = ['请指定查询条件，再点击查询按钮。', '正在查询中。。。', '暂时还没有相关数据，试试别的查询条件吧。']
  return msgs[type]
}


/**
 * 克隆（根据不同类型的数据进行克隆）
 * @param {*} obj 克隆对象
 */
function clone (obj) {
  var o;
  switch (typeof obj) {
    case 'undefined'：
      break;
    case 'string':
      o = obj + '';
      break;
    case 'number':
      o = obj - 0;
      break;
    case 'boolean':
      o = obj;
    case 'object':
      if (obj === null) {
        o = null
      } else {
        if (obj instanceof Array) {
          o = [];
          for (var i = 0; i < obj.length; i++) {
            o.push(clone(obj[i]))
          }
        } else {
          o = {};
          for (var k in obj) {
            o[k] = clone(obj[k]);    //深拷贝
          }
        }
      }
      break;
    default:
      o = obj;
      break
  }
  return o
}


/**
 * 对象转数组，转为数组后的格式是， [{ID: key, Name:obj[key]}]
 * @param {*} obj 
 */
function obj_toArr (obj) {
  var arr = [];
  if (obj.length) {
    return obj
  }
  for (var i in obj) {
    if (obj.hasOwnProperty(i)) {    // 判断obj对象是否存在i属性或方法(不包括原型)
      var o = {
        ID: i,
        name: obj[i]
      }
      arr.push(o)
    }
  }
  return arr;
}


/**
 * 根据时间获取星期
 * @param {*} date 
 */
function Date_getWeek (date) {
  var w = new Date(date).getDay();
  return w == 0 ? 7 : w
}


/**
 * 字符串 去 前后空格 
 * @param {*} str 字符串 
 * @param {*} type 1-所有空格  2-前后空格  3-前空格 4-后空格
 */
function trim (str, type = 1) {
  switch (type) {
    case 1:
      return str.replace(/\s+/g, "");
    case 2:
      return str.replace(/(^\s*)|(\s*$)/g, "");
    case 3:
      return str.replace(/(^\s*)/g, "");
    case 4:
      return str.replace(/(\s*$)/g, "");
    default:
      return str;
  }
}

/**
 * 返回当前浏览器是什么类型的浏览器
 */
function userBrowser () {
  var browserName = navigator.userAgent.toLowerCase();
  if (/msie/i.test(browserName) && !/opera/.test(browserName)) {
    console.log("IE");
  } else if (/firefox/i.test(browserName)) {
    console.log("Firefox");
  } else if (/chrome/i.test(browserName) && /webkit/i.test(browserName) && /mozilla/i.test(browserName)) {
    console.log("Chrome");
  } else if (/opera/i.test(browserName)) {
    console.log("Opera");
  } else if (/webkit/i.test(browserName) && !(/chrome/i.test(browserName) && /webkit/i.test(browserName) && /mozilla/i.test(browserName))) {
    console.log("Safari");
  } else {
    console.log("不知道什么鬼!");
  }
}


/*适配rem*/
//使用方式很简单，比如效果图上，有张图片。宽高都是100px;
//样式写法就是
// img{
//     width:1rem;
//     height:1rem;
// }
//这样的设置，比如在屏幕宽度大于等于750px设备上，1rem=100px；图片显示就是宽高都是100px
//比如在iphone6(屏幕宽度：375)上，375/750*100=50px;就是1rem=50px;图片显示就是宽高都是50px;
function getFontSize () {
  var doc = document,
    win = window;
  var docEl = doc.documentElement,
    resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
    recalc = function () {
      var clientWidth = docEl.clientWidth;
      if (!clientWidth) return;
      //如果屏幕大于750（750是根据我效果图设置的，具体数值参考效果图），就设置clientWidth=750，防止font-size会超过100px
      if (clientWidth > 750) {
        clientWidth = 750
      }
      //设置根元素font-size大小
      docEl.style.fontSize = 100 * (clientWidth / 750) + 'px';
    };
  //屏幕大小改变，或者横竖屏切换时，触发函数
  win.addEventListener(resizeEvt, recalc, false);
  //文档加载完成时，触发函数
  doc.addEventListener('DOMContentLoaded', recalc, false);
}









