/**
 * Created by PanJiaChen on 16/11/18.
 */

/**
 * Parse the time to string
 * @param {(Object|string|number)} time
 * @param {string} cFormat
 * @returns {string}
 */
export function parseTime(time, cFormat) {
  if (arguments.length === 0) {
    return null
  }
  const format = cFormat || '{y}-{m}-{d} {h}:{i}:{s}'
  let date
  if (typeof time === 'object') {
    date = time
  } else {
    if (typeof time === 'string' && /^[0-9]+$/.test(time)) {
      time = parseInt(time)
    }
    if (typeof time === 'number' && time.toString().length === 10) {
      time = time * 1000
    }
    date = new Date(time)
  }
  const formatObj = {
    y: date.getFullYear(),
    m: date.getMonth() + 1,
    d: date.getDate(),
    h: date.getHours(),
    i: date.getMinutes(),
    s: date.getSeconds(),
    a: date.getDay()
  }
  const time_str = format.replace(/{(y|m|d|h|i|s|a)+}/g, (result, key) => {
    let value = formatObj[key]
    // Note: getDay() returns 0 on Sunday
    if (key === 'a') {
      return ['日', '一', '二', '三', '四', '五', '六'][value]
    }
    if (result.length > 0 && value < 10) {
      value = '0' + value
    }
    return value || 0
  })
  return time_str
}

/**
 * @param {number} time
 * @param {string} option
 * @returns {string}
 */
export function formatTime(time, option) {
  if (('' + time).length === 10) {
    time = parseInt(time) * 1000
  } else {
    time = +time
  }
  const d = new Date(time)
  const now = Date.now()

  const diff = (now - d) / 1000

  if (diff < 30) {
    return '刚刚'
  } else if (diff < 3600) {
    // less 1 hour
    return Math.ceil(diff / 60) + '分钟前'
  } else if (diff < 3600 * 24) {
    return Math.ceil(diff / 3600) + '小时前'
  } else if (diff < 3600 * 24 * 2) {
    return '1天前'
  }
  if (option) {
    return parseTime(time, option)
  } else {
    return d.getMonth() + 1 + '月' + d.getDate() + '日' + d.getHours() + '时' + d.getMinutes() + '分'
  }
}

/**
 * @param {string} url
 * @returns {Object}
 */
export function param2Obj(url) {
  const search = url.split('?')[1]
  if (!search) {
    return {}
  }
  return JSON.parse(
    '{"' +
      decodeURIComponent(search).replace(/"/g, '\\"').replace(/&/g, '","').replace(/=/g, '":"').replace(/\+/g, ' ') +
      '"}'
  )
}

export const watchScrollDirection = function (scrollElement, callback) {
  const scrollPos = { x: 0, y: 0 }
  const scrollDirection = {
    directionX: 1,
    directionY: 1
  }
  let previousTimer
  function onScroll() {
    const scrollTop = scrollElement.scrollTop || scrollElement.pageYOffset
    const scrollLeft = scrollElement.scrollLeft || scrollElement.pageXOffset

    if (scrollPos.y > scrollTop) {
      scrollDirection.directionY = -1
    } else {
      scrollDirection.directionY = 1
    }
    if (scrollPos.x > scrollLeft) {
      scrollDirection.directionX = -1
    } else {
      scrollDirection.directionX = 1
    }

    callback.call(scrollElement, scrollDirection, scrollPos)

    scrollPos.x = scrollLeft
    scrollPos.y = scrollTop
  }
  function throttle() {
    let now = Date.now()
    if (!previousTimer) previousTimer = now
    if (now - previousTimer > 10) {
      onScroll()
      previousTimer = now
    }
  }
  scrollElement.addEventListener('scroll', throttle)
  return function () {
    scrollElement.removeEventListener('scroll', throttle)
  }
}

export function getOffsetTop(relativeNode, node, topSum = 0) {
  topSum += node.offsetTop

  if (node.offsetParent !== relativeNode) {
    return getOffsetTop(relativeNode, node.offsetParent, topSum)
  }
  return topSum
}
