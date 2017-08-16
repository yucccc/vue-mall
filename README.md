# 做个锤子

## 前言

个人一直想尝试用vue与node结合，做一个全栈电商型的网站，最后选择了锤子手机商城，这个项目从0开发到部署前前后后大概花了一个多月的时间，涉及登录、商品展示、购物车、下单等等，是一个非常完整的流程。其中交易的逻辑也比较复杂，所以可能存在一些细节问题(页面美观度就请放过我....)，此后都会慢慢修复.

锤子手机用的是 __Angular__，罗永浩的产品，感觉还是挺简洁美观.页面商品数据是通过爬虫抓取然后写入数据库的.虽然锤子的页面也是动态生成的，不过还是很简单就可以拿到.
__注: 项目数据与锤子商品数据并无关系,并不是通过proxy代理请求的锤子商城接口__

## 技术栈

vue2 + vuex + vue-router + webpack + ES6 + axios + sass + flex + svg + node + mongoDB

## 关于接口数据

接口项目地址   [node-api](https://github.com/yucccc/node-api)  使用的是 node + mongodb

商品数据通过爬虫抓取写入数据库 (eventproxy + superagent) ，由于锤子手机的数据结构十分复杂并且页面是动态的，因此我通过转发包装简化了数据，但不影响正常业务逻辑，如果你发现部分商品不见了，有可能是锤子手机改变了数据结构.正常情况下不会存在这种问题，大可放心.

如果想要做个人项目却苦于没有数据,也可请求该项目的接口(后期有时间会把文档补上)，或者自己clone项目运行

## 关于部署

使用 nginx 做反向代理，解决跨域问题.

## 项目运行

```txt
git clone https://github.com/yucccc/vue-mall.git

cd vue-mall

cnpm i

npm run dev

// 如果运行出现代理错误 请确保 config 文件下 index.js proxyTable代理正确

// 直接运行代理应为
http://mall.yucccc.com:3333

// 通过运行node-api请求本地api代理应为
http://127.0.0.1:3333

```

## 说明

- 如果对您有帮助，您可以点右上角 "Star" 支持一下 十分感谢!
- 如有问题请直接在 Issues 中提，或者您发现问题并有非常好的解决方案，欢迎 PR

## 效果演示

[锤子商城demo](http://mall.yucccc.com/) （请使用PC打开，并不是一个移动端项目 ~~~）

__注:为了更好的体验,需要自己注册一个账号,账号密码随意.__

为了方便演示，这里提供了两个账号.当然可能存在多个用户同时操作一个账号.

```txt
 账号: admin  密码: admin
 账号: admin1 密码: 123
```

## 目标功能

- [x] 登陆、登出功能
- [x] 注册
- [x] 加入、删除、修改购物
- [x] 新增、修改、删除收货地址
- [x] 下单功能
- [x] 支付功能 -- 由于没权限申请到蚂蚁金服支付宝开发接口,因此只是模拟支付.
- [x] 商品详情
- [x] 个人中心
- [x] 订单列表
- [x] 更换头像 -- 头像上传到七牛云,由于免费的七牛云空间有限,希望各位大佬不要搞我..

## 续

> 更多的功能后期还会陆续的补上.
> 更多的细节会陆续修复.代码会陆续优化.
> 秉着学习的态度,感谢大家.

## 项目布局

```txt
.
├── build                                       // webpack配置文件
├── config                                      // 项目打包路径
├── dist                                        // 打包文件
├── src                                         // 源码目录
│   ├── api                                     // 请求接口
│   ├── common                                  // 公共组件
│   ├── components                              // 组件
│   ├── page                                    // 页面
│   │   └── Cart                                // 购物车
│   │   └── Checkout                            // 提交订单
│   │   └── Goods                               // 商品
│   │       ├── goods                           // 商品列表
│   │       ├── goodsDetails                    // 商品详情
│   │   └── Home                                // 主页
│   │   └── Login                               // 登陆
│   │   └── Order                               // 订单
│   │       ├── order                           // 商品列表
│   │       ├── payment                         // 提交订单
│   │       ├── paysuccess                      // 提交成功
│   │   └── User                                // 个人中心
│   │       ├── children
│   │       │   ├── addressList                 // 地址列表
│   │       │   ├── information                 // 个人信息
│   │       │   └── order                       // 订单列表
│   │   └── index.vue                           // 主页
│   ├── store                                   // vuex的状态管理
│   │   ├── action.js                           // 配置actions
│   │   ├── index.js                            // 引用vuex，创建store
│   │   ├── modules                             // store模块
│   │   ├── mutation-types.js                   // 定义常量muations名
│   │   └── mutations.js                        // 配置mutations
│   ├── App.vue                                 // 页面入口文件
│   ├── main.js                                 // 程序入口文件，加载各种公共组件
├── favicon.ico                                 // 图标
├── index.html                                  // 入口html文件
.

```
