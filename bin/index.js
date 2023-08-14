import echarts from '../components/index.vue'

const echart={
    install(app,options){
        app.component('echarts',echarts)
    }
}
export default echart;