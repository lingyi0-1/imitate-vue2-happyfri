# 说明

> 这是一个demo。[原项目网址](https://github.com/bailicangdu/vue2-happyfri)

> 做此demo借鉴了原项目的图片资源、UI设计和交互，其它的由个人完成

> 开发环境 Microsoft Windows 10.0.18362 , Chromn 76.0.3809.132 , node.js v10.13.0

> 用到的技术：vue+vue-cli+vue-router+vuex+sass+vw布局

# 效果演示

[demo地址](https://lingyi0-1.github.io/imitate-vue2-happyfri/#/)(请用chrome手机模式预览)

### 移动端扫描下方二维码

<img src='https://github.com/lingyi0-1/imitate-vue2-happyfri/blob/master/src/assets/images/demoQRcode.png' width="300" height="300" />

## 项目运行（nodejs 6.0+）

```

# 克隆到本地
git clone https://github.com/lingyi0-1/imitate-vue2-happyfri.git

# 进入文件夹
cd imitate-vue2-happyfri

# 安装依赖
npm install

# 开启本地服务器
npm run serve

# 发布环境
npm run build

```


## vue.config.js

```

module.exports = {
    lintOnSave: false,
    publicPath: process.env.NODE_ENV === "production" ? "/imitate-vue2-happyfri" : "/",
    css:{
      loaderOptions: {
        sass: {
          data: `@import "@/assets/css/vm.scss";`
        }
      }
    }

}

```

## main.js

```

import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/css/normalize.css'
import './assets/css/body.css'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

```

## 路由配置

```

import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home'
import Item from './views/Item'
import Score from './views/Score'


Vue.use(Router)

export default new Router({
  routes: [
      {
          path: '/',
          component: Home,
      },
      {
          path: '/item',
          component: Item,
      },
      {
          path: '/score',
          component: Score,
      }
  ]
})

```

## 状态管理

```

import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    score: 0,//分数
  },
  mutations: {
    updateScore(state, n){
      state.score = n;
    }
  },
  actions: {

  }
})

```

## 单位转换器px=>vw(vw布局)

```

$vw_base: 375;
@function vw($px){
  @return ($px/375)*100vw;
}

```