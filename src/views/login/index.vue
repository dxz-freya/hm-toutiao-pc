<template>
  <div class="container">
    <!-- 登录卡片 -->
    <el-card>
      <!-- logo -->
      <img src="../../assets/logo.png" width="100px" />
      <el-form ref="loginForm" :model="loginForm" :rules="loginRules" status-icon>
        <el-form-item prop="mobile">
          <el-input v-model="loginForm.mobile" placeholder="请输入手机号"></el-input>
        </el-form-item>
        <el-form-item prop="code">
          <el-input
            v-model="loginForm.code"
            placeholder="请输入验证码"
            style="width:233px;margin-right:12px"
          ></el-input>
          <el-button>获取验证码</el-button>
        </el-form-item>
        <el-form-item>
        <el-checkbox :value="true">我已阅读并同意用户协议和隐私条款</el-checkbox>
        <el-button @click="login" type="primary" style="width:100%;margin-top:15px">登录</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script>
export default {
  data: function () {
    // 校验规则必须定义在return之前
    const checkMobile = (rule, value, callback) => {
      // 通过校验逻辑判断成功失败
      // 手机号格式：1.开头，第二位是3-9，+9个数字
      if (/^1[3-9]\d{9}$/.test(value)) {
        // test验证
        callback()
      } else {
        callback(new Error('手机号格式不对'))
      }
    }
    return {
      loginForm: {
        mobile: '',
        code: ''
      },
      loginRules: {
        mobile: [
          // 支持type:data|email|url  ,  不支持手机号
          { required: true, message: '请输入手机号码', trigger: 'blur' },
          // 在校验规则中，指定属性 validator 值是一个校验函数（校验逻辑进行判断）
          { validator: checkMobile, message: '请输入手机号码', trigger: 'blur' }
        ],
        code: [
          { required: true, message: '请输入验证码', trigger: 'blur' },
          {
            len: 6,
            message: '请输入正确的验证码',
            trigger: 'blur'
          }
        ]
      },
      rules: [{}]
    }
  },
  methods: {
    login () {
      // 获取表单实例--调用校验函数
      this.$refs['loginForm'].validate(valid => {
        if (valid) {
          // 如果valid为true
          // 发请求 校验手机号和验证码
          this.$http.post('authorizations', this.loginForm)
            .then(res => {
              // 成功
              this.$router.push('/')
            })
            .catch(() => {
              // 错误，提示
              this.$message.error('手机号或验证码错误')
            })
        }
      })
    }
  }
}
</script>

<style>
.container {
  background: url("../../assets/login_bg.jpg") center no-repeat / cover;
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
}
.el-card {
  height: 370px;
  width: 400px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
img {
  display: block;
  margin: 10px auto 18px;
}
.el-input {
  width: 100%;
}
</style>
