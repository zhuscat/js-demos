## 使用 iframe + window.name 的方式

创建一个 iframe, 把 src 设为你要获取数据的那个网站，然后等到 onload 之后设置 window.name，并把 src 设为与自己同域的，然后再使用 window.name 获取数据

## 使用 JSONP 的方式

script 标签中 src 为获取数据的API接口，并提供 callback

## 使用 CORS 的方式

服务器设置返回头部

## document.domain

当使用二级域名的时候，可以把域名设置成更“宽松”的。

## postMessage

```javascript
windowObj.postMessage(message, targetOrigin);
```