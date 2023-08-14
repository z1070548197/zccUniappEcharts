uniapp使用echarts的封装
# 安装
```shell
npm i zcc-uniapp-echarts
```
# 配置
## 全局引入
```javascript
import echart from 'zcc-uniapp-echarts'
Vue.use(echart);
```
## 局部引入
```javascript
import echart from 'zcc-uniapp-echarts/components/'
components:{
    echart
}
```
复制echarts到项目静态目录下
```shell
cp ./node_modules/zcc-uniapp-echarts/models/echarts.min.js ./static
```
# 使用
```html
<echart :option="options" style="height: 400px;"></echart>
```