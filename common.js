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
 *  解析地址栏参数 
 * @param {*} hash 
 * */
function parseHash (hash) { }








