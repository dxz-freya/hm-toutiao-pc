// 作用：导出一个配置好的axios对象，挂载在main.js上
import axios from 'axios'
// 对axios配置
// 基准地址
axios.defaults.baseURL = 'http://ttapi.research.itcast.cn/mp/v1_0/'
export default axios
