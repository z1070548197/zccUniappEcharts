import echarts from '../components/index.vue'

const echart={
    install(app){
        app.component('echart',echarts);
    }
}
export default echart;