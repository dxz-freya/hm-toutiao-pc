<template>
  <div class="container">
    <!-- 登录卡片 -->
    <el-card>
      <!-- logo -->
      <img src="../../assets/logo.png" width="100px" />
      <el-form ref="form" :model="form" >
        <el-form-item >
          <el-input placeholder="请输入手机号"></el-input>
        </el-form-item>
        <el-form-item >
          <el-input placeholder="请输入验证码" style="width:233px;margin-right:12px"></el-input>
          <el-button >获取验证码</el-button>
        </el-form-item>
        <el-checkbox :value="true">我已阅读并同意用户协议和隐私条款</el-checkbox>
        <el-button type="primary" style="width:100%;margin-top:15px">登录</el-button>
      </el-form>
    </el-card>
  </div>
</template>

<script>
export default {}
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
img{
    display: block;
    margin:10px auto 18px;
  }
.el-input{
  width: 100%;
}
</style>
